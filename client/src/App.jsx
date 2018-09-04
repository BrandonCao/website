import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar/NavBar';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
          <NavBar/>
            <Switch>
              <Route path="/" component= { Home } exact />
              <Route path="/projects" component= { Projects } exact />
            </Switch>
        </div>
      </BrowserRouter>
      </div>
    );
  }
}

export default App;
