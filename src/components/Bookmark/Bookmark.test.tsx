import {render, screen} from '@testing-library/react';
import {Bookmark} from './Bookmark.tsx';


describe('Component: Bookmark', () => {
  it('should render correct', () => {
    const expectedText = /bookmarks/i;

    render(<Bookmark id='1' isActive={true} place={'place-card'}/>);

    expect(screen.getByText(expectedText)).toBeInTheDocument();
  });
});
