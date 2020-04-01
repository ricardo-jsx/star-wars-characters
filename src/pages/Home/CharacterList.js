import React from 'react';
import styled from 'styled-components';
import { usePage } from './useQueries';

const StyledList = styled.ul`
  display: block;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  list-style: none;
  overflow-y: auto;

  span {
    font-family: StarJedi;
    font-size: 14px;
  }
`;

const StyledListItem = styled.li`
  border-top: 1px solid ${(props) => props.theme.mirage};
  padding: 1rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  &:hover {
    &:before {
      content: '';
      background: ${(props) => props.theme.mirage};
      opacity: 0.3;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      position: absolute;
      z-index: -1;
    }
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
    object-fit: cover;
  }

  span {
    margin-left: 1rem;
  }
`;

const StyledButton = styled.button`
  padding: 1rem;
  background: ${(props) => props.theme.mirage};
  color: ${(props) => props.theme.white};
  outline: none;
  border: none;
  cursor: pointer;
  font-family: StarJedi;
  width: 100%;

  &:disabled {
    background: gray;
    cursor: not-allowed;
  }
`;

export default function CharacterList({ onSelectCharacter }) {
  const { loading, pageOfCharacters, nextPage } = usePage();
  const { results = [], count = 0 } = pageOfCharacters;

  const fetchedAllCharacters = results.length >= count;

  return (
    <StyledList>
      {results.map((result) => (
        <StyledListItem key={result.id} onClick={() => onSelectCharacter(result.id)}>
          <img src={result.img} alt={`Preview ${result.name}`} />
          <span>{result.name}</span>
        </StyledListItem>
      ))}

      {!loading && (
        <StyledButton onClick={nextPage} disabled={fetchedAllCharacters}>
          Load More...
        </StyledButton>
      )}
    </StyledList>
  );
}
