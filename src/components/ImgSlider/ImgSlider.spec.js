import React from 'react';
import { render } from '@testing-library/react';

import ImgSlider from './ImgSlider';

describe('components/ImgSlider', () => {
  it('should render all images', () => {
    const imgs = [
      { id: 1, name: 'img-1', img: 'resources/characters/1.jpg' },
      { id: 2, name: 'img-2', img: 'resources/characters/2.jpg' },
    ];

    const { queryAllByAltText } = render(<ImgSlider imgs={imgs} />);
    expect(queryAllByAltText(imgs[0].name)).not.toBeNull();
    expect(queryAllByAltText(imgs[1].name)).not.toBeNull();
  });
});
