import React, { Component } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";
import EditUserContainer from "./containers/EditUserContainer";

export default class App extends Component {

  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent />
        <Router>
          <Route path="/" exact>
            <HomeContainer />
          </Route>
          <Route path="/create" exact>
            <CreateUserContainer />
          </Route>
          <Route path="/detail/:id" exact>
            <DetailUserContainer />
          </Route>
          <Route path="/edit/:id" exact>
            <EditUserContainer />
          </Route>
        </Router>
      </div>
    );
  }
}
