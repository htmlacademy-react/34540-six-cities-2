import {render, screen, fireEvent} from '@testing-library/react';
import {ReviewForm} from './review-form.tsx';
import {HistoryRouter} from '../history-router/history-router.tsx';
import {browserHistory} from '../../browser-history.ts';
import {SubmitStatus} from '../../const.ts';


describe('Component: Form', () => {
  const setup = () => {
    const utils = render(
      <HistoryRouter history={browserHistory}>
        <ReviewForm
          submitStatus={SubmitStatus.Pending}
          onSubmit={() => true}
        />
      </HistoryRouter>
    );

    const inputRating = screen.getByDisplayValue('3');
    const inputReview = screen.getByPlaceholderText('Tell how was your stay, what you like and what can be improved');

    return {
      inputRating,
      inputReview,
      ...utils,
    };
  };

  it('It should be disabled', () => {
    const {inputRating, inputReview} = setup();

    fireEvent.change(inputRating, {target: {checked: false}});
    fireEvent.change(inputReview, {target: {value: 'Test'}});

    expect(screen.getByText('Submit')).toHaveAttribute('disabled');
  });
});
