import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

export const AnimatedLogo = styled.img`
  height: 10vmin;
  pointer-events: none;
  animation: ${rotate} infinite 10s linear;
`;
