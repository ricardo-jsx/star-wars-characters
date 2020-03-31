import React from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo/Logo';

const HomeStyled = styled.div`
  display: flex;
  min-width: 800px;
  width: 800px;
  height: 500px;
  overflow: hidden;
  background: ${props => props.theme.mirage};
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
`

export default function Home() {
  
  return (
    <HomeStyled>
      <div className="left">
        <Logo />
        <img src="/resources/characters/20.jpg" />
      </div>
      <div className="right" />
    </HomeStyled>
  )
}