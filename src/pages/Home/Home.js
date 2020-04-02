import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from 'components/Logo/index';
import ImgSlider from 'components/ImgSlider/index';
import Nav from 'components/Nav/index';
import Loader from 'components/Loader/index';
import { Details, List } from 'components/Character/index';

import { useCharacter, usePage } from './useQueries';

const HomeStyled = styled.div`
  display: flex;
  min-width: 800px;
  width: 800px;
  height: 550px;
  overflow: hidden;
  background: ${(props) => props.theme.mirage};
  border-radius: 20px;
  position: relative;

  .left {
    display: flex;
    flex: 1;
  }

  .right {
    display: flex;
    flex: 1;
    flex-direction: column;
    position: relative;
  }

  @media (max-width: ${(props) => props.theme.mobile}) {
    flex-direction: column;
    width: 100%;
    height: 200vh;
  }
`;

export default function Home() {
  const [characterId, setCharacterId] = useState(1);
  const { loading, character } = useCharacter(characterId);
  const { loading: pageIsLoading, pageOfCharacters, nextPage } = usePage();

  return (
    <HomeStyled>
      <div className="left">
        <Logo />
        <Loader loading={loading}>
          <ImgSlider imgs={character.imgs} />
        </Loader>
      </div>
      <div className="right">
        <Nav>
          <List
            loading={pageIsLoading}
            characters={pageOfCharacters.results}
            onSelectCharacter={setCharacterId}
            getMoreResults={nextPage}
            fetchedAllCharacters={pageOfCharacters.results.length >= pageOfCharacters.count}
          />
        </Nav>
        <Details character={character} />
      </div>
    </HomeStyled>
  );
}
