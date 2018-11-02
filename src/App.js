import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import NavBar from './components/NavBar';
import HomeView from './views/HomeView';
import ExampleView from './views/ExampleView';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Container fluid>
          <Route exact path="/" component={HomeView} />
          <Route path="/example" component={ExampleView} />
        </Container>
      </div>
    </Router>
  );
}

export default App;
