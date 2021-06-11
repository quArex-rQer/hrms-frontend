import logo from './logo.svg';
import './App.css';
import Navi from './layouts/Navi';
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react';
import Dashboard from './layouts/Dashboard';
function App() {
  return (
    <div className="App">
      <Navi />

      <Container>
        <Dashboard />
      </Container>

    </div>
  );
}

export default App;
