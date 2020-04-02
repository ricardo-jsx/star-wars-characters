import React from 'react';
import { render } from '@testing-library/react';
import ClipPath from './ClipPath';

describe('components/Nav/ClipPath', () => {
  it('should render content only when open', () => {
    const { rerender, queryByText } = render(
      <ClipPath>
        <p>Hello World</p>
      </ClipPath>
    );
    expect(queryByText('Hello World')).toBeNull();

    rerender(
      <ClipPath open>
        <p>Hello World</p>
      </ClipPath>
    );
    expect(queryByText('Hello World')).not.toBeNull();
  });
});
