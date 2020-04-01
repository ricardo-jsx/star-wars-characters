import React from 'react';
import styled, { keyframes } from 'styled-components';

import LoadingImg from './loading.png';

const rotate = keyframes`
  0% { transform: rotate(0deg) }
  25% { transform: rotate(5deg) }
  75% { transform: rotate(-5deg) }
  100% { transform: rotate(0deg) }
`;

const StyledLoader = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  img {
    animation: ${rotate} 5s infinite;
    animation-timing-function: cubic-bezier(1, 0, 0.5, 1);
  }

  span {
    font-family: StarJedi;
    color: ${(props) => props.theme.athensGray};
    font-size: 24px;
  }
`;

export default function Loader({ loading, children }) {
  if (!loading) return children;

  return (
    <StyledLoader>
      <img src={LoadingImg} alt="Loading" />
      <span>Loading...</span>
    </StyledLoader>
  );
}
