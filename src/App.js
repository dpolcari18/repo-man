import './App.css';

// react router
import { BrowserRouter as Router, Route } from 'react-router-dom'

// react-bootstrap
import Container from 'react-bootstrap/Container'

function App() {
  return (
    <Router>
      <Container>
        <Route exact patch='/' render={() => <Login />} />
        <div>TESTING</div>
      </Container>
    </Router>
  );
}

export default App;
