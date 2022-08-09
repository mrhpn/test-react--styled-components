import styled from 'styled-components';

export const Base = styled.button`
  background: #fff828;
  border: 3px solid;
  border-radius: 999px;
  box-sizing: border-box;
  color: #000;
  font-weight: 900;
  padding: 20px 60px;
  position: relative;
  text-transform: uppercase;
  font-family: Helvetica Neue, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
`;

export const Featured = styled(Base)`
  color: white;
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );
  border: 3px #000 solid;
`;