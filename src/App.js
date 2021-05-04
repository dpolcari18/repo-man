import './App.css';

// react router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// components
import Login from './components/Login'
import NotFound from './components/NotFound'

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path='/' component={Login} />
          <Route path='*' component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
