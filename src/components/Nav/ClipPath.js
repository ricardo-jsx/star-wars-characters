import React from 'react';
import styled, { keyframes } from 'styled-components';

const display = keyframes`
  0% { clip-path: circle(0% at 100% 0%); }
  100% { clip-path: circle(100% at 100% 0%); }
`;

const StyledBox = styled.div`
  animation: ${(props) => (props.open ? display : 'none')} 1s;
  clip-path: ${(props) => (props.open ? 'circle(100%)' : 'circle(0%)')};
  position: absolute;
  background: ${(props) => props.theme.white};
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function ClipPath({ open, children }) {
  return <StyledBox open={open}>{open && children}</StyledBox>;
}
