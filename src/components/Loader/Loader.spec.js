import React from 'react';
import { render } from '@testing-library/react';
import Loader from './Loader';

describe('components/Loader', () => {
  it('should render children only when component is not loading', () => {
    const { rerender, queryByAltText, queryByText } = render(
      <Loader loading>
        {' '}
        <p>Hello World</p>
      </Loader>
    );
    expect(queryByAltText('Loading')).not.toBeNull();
    expect(queryByText('Hello World')).toBeNull();

    rerender(
      <Loader loading={false}>
        <p>Hello World</p>
      </Loader>
    );
    expect(queryByAltText('Loading')).toBeNull();
    expect(queryByText('Hello World')).not.toBeNull();
  });
});
