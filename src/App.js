import React from 'react';
import Home from './components/home';
import AboutMe from './components/aboutMe';
import MyMusic from './components/myMusic';
import { 
  BrowserRouter as Router, 
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/about'><AboutMe/></Route>
          <Route path='/music'><MyMusic/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
