import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Burger from './Burger';

describe('components/Nav/Burger', () => {
  it('should open/close burger on click', () => {
    const fn = jest.fn();

    const { getByRole } = render(<Burger open setOpen={fn} />);
    fireEvent.click(getByRole('button'));
    expect(fn).toHaveBeenCalled();
  });
});
