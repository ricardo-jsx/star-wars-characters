import React, { useMemo } from 'react';
import styled from 'styled-components';

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  font-family: StarJedi;
  margin-top: 30px;

  h1 {
    color: white;
    margin-left: 1rem;
    margin-bottom: 1rem;
    line-height: 18px;
    font-size: 20px;
    letter-spacing: 2px;
  }

  > div {
    display: flex;
    margin: 0 1rem 0.5rem 1rem;

    span {
      color: white;
      user-select: none;
    }

    span:nth-child(1):after {
      content: ': ';
      white-space: pre;
    }
  }
`;

export default function CharacterDetails({ character }) {
  const starships = useMemo(() => {
    return character.starships ? character.starships.map((starship) => starship.name).join(', ') : '';
  }, [character]);

  return (
    <StyledSection>
      <h1>Character Details</h1>

      <div>
        <span>Name</span>
        <span>{character.name}</span>
      </div>
      <div>
        <span>Height</span>
        <span>{character.height}</span>
      </div>
      <div>
        <span>Mass</span>
        <span>{character.mass} KG</span>
      </div>
      <div>
        <span>Hair Color</span>
        <span>{character.hair_color}</span>
      </div>
      <div>
        <span>Birth Year</span>
        <span>{character.birth_year}</span>
      </div>
      <div>
        <span>Gender</span>
        <span>{character.gender}</span>
      </div>
      <div>
        <span>Skin Color</span>
        <span>{character.skin_color}</span>
      </div>
      <div>
        <span>Starships</span>
        <span>{starships}</span>
      </div>
    </StyledSection>
  );
}
