import React, { useMemo } from 'react';
import styled from 'styled-components';
import { useQuery } from '@apollo/react-hooks';

import Logo from 'components/Logo/index';
import ImgSlider from 'components/ImgSlider/index';

import { GET_LUKE } from './Home.queries';

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
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_LUKE);

  const imgs = useMemo(() => {
    if (loading) return [];

    return [
      { id: data.character.id, name: data.character.name, img: data.character.img },
      ...data.character.starships.map(({ id, img, name }) => ({ id, name, img })),
    ];
  }, [data, loading]);

  if (loading) return <p>Loading...</p>;

  return (
    <HomeStyled>
      <div className="left">
        <Logo />
        <ImgSlider imgs={imgs} />
      </div>
      <div className="right" />
    </HomeStyled>
  );
}
