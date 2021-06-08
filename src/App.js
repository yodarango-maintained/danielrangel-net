import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Works from './pages/Works';
import Certifications from './pages/Certifications';

import "./index.css"

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path = '/' component = {Home} />
      </Switch>
      <Switch>
          <Route exact path = '/works' component = {Works} />
      </Switch>
      <Switch>
          <Route exact path = '/certifications' component = {Certifications} />
      </Switch>
    </Router>
  );
}

export default App;
