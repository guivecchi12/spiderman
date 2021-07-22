import React from 'react';
import HeaderNav from './components/headerNav'
import Home from './components/home';
import AboutMe from './components/aboutMe';
import MyContent from './components/myContent';
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
      <HeaderNav/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path='/about' component={AboutMe}/>
          <Route path='/music' component={MyContent}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
