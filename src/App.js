import { ThemeProvider } from 'styled-components';

import './App.css';
import logo from './logo.svg';
import AnimatedLogo, { Button } from './components/Button';
import { toBePartiallyChecked } from '@testing-library/jest-dom/dist/matchers';

const theme = {
  dark: {
    primary: 'gray',
    text: 'white',
  },
  light: {
    primary: 'white',
    test: 'black',
  },
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App mt-3">
        <AnimatedLogo src={logo} />
        <br />
        <br />
        <Button.Base>Primary</Button.Base>
        <br />
        <br />
        <Button.Base variant="outline">Outline</Button.Base>
        <br />
        <br />
        <div style={{ marginTop: 30 }}>
          <Button.Featured as="a">Featured</Button.Featured>
        </div>
        <br />
        <br />
        <Button.Submit>Submit</Button.Submit>
        <br />
        <br />
        <Button.Dark>Dark</Button.Dark>
      </div>
    </ThemeProvider>
  );
}

export default App;
