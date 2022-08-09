import './App.css';
import { Button } from './components/Button';

function App() {
  return (
    <div className="App mt-3">
      <Button.Base>Primary</Button.Base>
      <br />
      <br />
      <Button.Base variant="outline">Outline</Button.Base>
      <br />
      <br />
      <div style={{ marginTop: 30 }}>
        <Button.Featured as="a">Featured</Button.Featured>
      </div>
    </div>
  );
}

export default App;
