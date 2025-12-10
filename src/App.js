import React, { Component } from "react";
import { Button, Row, Tabs, Tab, Col } from "react-materialize";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Header, Footer } from "./components/index";
import Service from "./pages/Service/index";
import { createStore, combineReducers, applyMiddleware } from "redux";
import featuredReducer from "./reducers/index";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
import axios from "axios";

import {
  LineGraph,
  BarChart,
  Searchbar,
  Table,
  Loading,
} from "../../components/index";
import { connect } from "react-redux";
import { addMore } from "../../actions/index";

import { getPlayers } from "../../service/index";
import { playerList, uploadAction } from "../../actions/index";

import "./css/styles.module.css";
const route = "http://localhost:8080/csv/";

export const getPlayers = async () => {
  const result = await Promise.all([
    axios.get(`${route}wta_players.csv`),
    axios.get(`${route}wta_rankings_current.csv`),
  ]);
  const players = {};
  result[0].data.forEach((player) => {
    players[player[0]] = `${player[1]} ${player[2]}`;
  });
  return { players, ranking: result[1].data };
};

export const getMatches = async () => {
  const result = Promise.all([
    axios.get(`${route}wta_matches_2010.csv`),
    axios.get(`${route}wta_matches_2011.csv`),
    axios.get(`${route}wta_matches_2012.csv`),
    axios.get(`${route}wta_matches_2013.csv`),
    axios.get(`${route}wta_matches_2014.csv`),
    axios.get(`${route}wta_matches_2015.csv`),
    axios.get(`${route}wta_matches_2016.csv`),
  ]);
  console.log(result);
};

const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(
  combineReducers({
    featuredReducer,
  }),
  middleware
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Route path="/" component={Service} />
        </Router>
      </Provider>
    );
  }
}

export default App;
