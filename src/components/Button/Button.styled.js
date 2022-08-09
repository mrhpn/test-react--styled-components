import styled from 'styled-components';

// Props, and Pseudo Elements
export const Base = styled.button`
  background: ${({ variant }) => (variant === 'outline' ? '#fff' : '#fff828')};
  border: 3px #000 solid;
  border-radius: 999px;
  box-sizing: border-box;
  color: black;
  font-weight: 900;
  padding: 20px 60px;
  position: relative;
  text-transform: uppercase;
  font-family: Helvetica Neue, ui-sans-serif, system-ui, -apple-system,
    BlinkMacSystemFont, Segoe UI, Roboto, Arial, Noto Sans, sans-serif,
    Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;

  &:hover {
    background: ${({ variant }) =>
      variant === 'outline' ? '#fff828' : '#fff'};
    cursor: pointer;
  }
`;

// Modifying the basic style
export const Featured = styled(Base)`
  color: white;
  border: 3px #000 solid;
  background: rgb(63, 94, 251);
  background: radial-gradient(
    circle,
    rgba(63, 94, 251, 1) 0%,
    rgba(252, 70, 107, 1) 100%
  );

  &:hover {
    background: rgb(63, 94, 251);
    background: radial-gradient(
      circle,
      rgba(252, 70, 107, 1) 100%,
      rgba(63, 94, 251, 1) 0%
    );
  }
`;

// Accepting attributes
export const Submit = styled(Base).attrs((props) => ({ type: 'submit' }))`
  color: white;
  background: rgb(63, 94, 251);

  &:hover {
    color: rgb(63, 94, 251);
  }
`;

// Theming
export const Dark = styled(Base)`
  color: ${(props) => props.theme.dark.text};
  background-color: ${(props) => props.theme.dark.primary};

  &:hover {
    background-color: black;
  }
`;
