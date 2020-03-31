import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLogo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 40px;
  top: 30px;
  font-family: StarJedi;
  z-index: 999;

  h1 {
    color: ${props => props.color};
    font-size: 16px;
    line-height: 14px;
    user-select: none;
  }
`;

export default function Logo({ color }) {
  return (
    <StyledLogo color={color}>
      <h1>Star</h1>
      <h1>Wars</h1>
    </StyledLogo>
  )
}

Logo.propTypes = {
  color: PropTypes.oneOf(['white', 'black']),
};

Logo.defaultProps = {
  color: 'white'
}