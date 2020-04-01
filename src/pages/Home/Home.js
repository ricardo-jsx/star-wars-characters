import React, { useState } from 'react';
import styled from 'styled-components';

import Logo from 'components/Logo/index';
import ImgSlider from 'components/ImgSlider/index';
import Nav from 'components/Nav/index';
import Loader from 'components/Loader/index';
import CharacterList from './CharacterList';
import CharacterDetails from './CharacterDetails';

import { useCharacter } from './useQueries';

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
`;

export default function Home() {
  const [characterId, setCharacterId] = useState(1);
  const { loading, character } = useCharacter(characterId);

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
          <CharacterList onSelectCharacter={setCharacterId} />
        </Nav>
        <CharacterDetails character={character} />
      </div>
    </HomeStyled>
  );
}
