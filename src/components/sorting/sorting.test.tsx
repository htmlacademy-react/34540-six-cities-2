import {render, screen} from '@testing-library/react';
import {Sorting} from './sorting.tsx';
import {SortName} from '../../const.ts';


describe('Component: Sorting', () => {
  it('should render correct by sorting selected value', () => {
    const expectedText = SortName.PriceDecrease;

    render(
      <Sorting
        onChange={()=>true}
        activeSorting={SortName.PriceDecrease}
      />
    );

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
