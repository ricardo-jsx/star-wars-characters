import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import List from './List';

const charactersMock = [
  { id: 1, name: 'Luke', img: 'resources/characters/1.jpg' },
  { id: 2, name: 'Solo', img: 'resources/characters/2.jpg' },
];

describe('components/Character/List', () => {
  it('should get more results when there are more users to be listed', () => {
    const getMoreResults = jest.fn();
    const { getByText, rerender } = render(<List getMoreResults={getMoreResults} />);

    fireEvent.click(getByText('Load More...'));
    expect(getMoreResults).toHaveBeenCalledTimes(1);

    rerender(<List getMoreResults={getMoreResults} fetchedAllCharacters />);

    fireEvent.click(getByText('Load More...'));
    expect(getMoreResults).toHaveBeenCalledTimes(1);
  });

  it('should not render Load More button when loading', () => {
    const { queryByText } = render(<List loading />);
    expect(queryByText('Load More...')).toBeNull();
  });

  it('should render all characters', () => {
    const { queryByText } = render(<List characters={charactersMock} />);

    expect(queryByText('Luke')).not.toBeNull();
    expect(queryByText('Solo')).not.toBeNull();
  });

  it('should be possible to select a character', () => {
    const fn = jest.fn();
    const { queryByText } = render(<List characters={charactersMock} onSelectCharacter={fn} />);

    expect(fn).not.toHaveBeenCalled();
    fireEvent.click(queryByText('Luke'));
    expect(fn).toHaveBeenCalled();
  });
});
