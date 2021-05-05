import './App.css';

// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// containers
import Home from './containers/Home'

// components
import NotFound from './components/NotFound'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
