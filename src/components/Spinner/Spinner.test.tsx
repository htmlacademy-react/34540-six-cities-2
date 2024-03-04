import {render} from '@testing-library/react';
import {Spinner} from './Spinner.tsx';


describe('Component: Loading spinner', () => {
  it('should render correct with a className equal to the "spinner"', () => {
    const expectedClassName = 'spinner';

    const {container} = render(<Spinner/>);

    expect(container.getElementsByClassName(expectedClassName).length).toBe(1);
  });
});
