import React from 'react';
import { render } from '@testing-library/react';

import Details from './Details';

describe('components/Character/Details', () => {
  it('should display all character infos', () => {
    const characterMock = {
      id: 1,
      name: 'Luke Skywalker',
      height: '172',
      mass: '77',
      hair_color: 'blond',
      birth_year: '19BBY',
      gender: 'male',
      skin_color: 'fair',
      img: '/resources/characters/1.jpg',
      starships: [
        {
          id: 12,
          name: 'X-wing',
          img: '/resources/starships/12.jpg',
        },
        {
          id: 22,
          name: 'Imperial shuttle',
          img: '/resources/starships/22.jpg',
        },
      ],
    };

    const { container } = render(<Details character={characterMock} />);
    expect(container).toMatchSnapshot();
  });
});
