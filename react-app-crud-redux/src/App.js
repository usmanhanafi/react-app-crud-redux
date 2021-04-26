import React, { Component } from "react";
import JumbotronComponent from "./components/JumbotronComponent";
import NavbarComponent from "./components/NavbarComponent";
// import TableComponent from "./components/TableComponent";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeContainer from "./containers/HomeContainer";
import CreateUserContainer from "./containers/CreateUserContainer";
import DetailUserContainer from "./containers/DetailUserContainer";
import EditUserContainer from "./containers/EditUserContainer";

export default class App extends Component {
  state = {
    title: "Usmanafi",
    users: [
      {
        id: 1,
        nama: "tholib",
        alamat: "yogyakarta",
        umur: 19,
        nohp: "0895421900858",
      },
      {
        id: 2,
        nama: "usman",
        alamat: "sleman",
        umur: 18,
        nohp: "0895421780858",
      },
      {
        id: 3,
        nama: "hanafi",
        alamat: "seyegan",
        umur: 17,
        nohp: "0895467900858",
      },
      {
        id: 4,
        nama: "maya",
        alamat: "seyegan",
        umur: 17,
        nohp: "0895467900858",
      },
      {
        id: 5,
        nama: "dria",
        alamat: "sleman",
        umur: 18,
        nohp: "0895467900858",
      },
      {
        id: 6,
        nama: "lina",
        alamat: "seyegan",
        umur: 17,
        nohp: "0895467900858",
      },
      {
        id: 7,
        nama: "kote",
        alamat: "seyegan",
        umur: 17,
        nohp: "0895467900858",
      },
      {
        id: 8,
        nama: "andik",
        alamat: "sleman",
        umur: 17,
        nohp: "0895467900858",
      },
      {
        id: 9,
        nama: "sifa",
        alamat: "yogyakata",
        umur: 17,
        nohp: "0895467900858",
      },
      {
        id: 10,
        nama: "aku",
        alamat: "yogyakata",
        umur: 17,
        nohp: "0895467900858",
      },
      {
        id: 11,
        nama: "karo",
        alamat: "sleman",
        umur: 17,
        nohp: "0895467900858",
      },
      {
        id: 12,
        nama: "koe",
        alamat: "yogyakata",
        umur: 17,
        nohp: "0895467900858",
      },
    ],
  };
  render() {
    return (
      <div>
        <NavbarComponent />
        <JumbotronComponent title={this.state.title} />
        {/* <TableComponent users={this.state.users} /> */}
        <Router>
          <Route path="/" exact>
            <HomeContainer users={this.state.users}/>
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
