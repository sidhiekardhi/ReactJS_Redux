import React, { Component } from 'react'
import JumbotronComponent from './component/JumbotronComponent'
import NavbarComponent from './component/NavbarComponent'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import HomeContainer from './container/HomeContainer';
import DetailUserContainer from './container/DetailUserContainer';
import EditUserContainer from './container/EditUserContainer';
import CreateUserContainer from './container/CreateUserContainer';

export default class App extends Component {


  render() {
    return (
      <div>
       <NavbarComponent />
       <JumbotronComponent/>
       <Router>
          <Route path="/" exact component={HomeContainer}/>
          <Route path="/create" exact component={CreateUserContainer}/>
          <Route path="/detail/:id" exact component={DetailUserContainer}/>
          <Route path="/edit/:id" exact component={EditUserContainer}/>
       </Router>
       
      </div>
    )
  }
}
