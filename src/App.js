import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Footer } from "./components/index";
import Service from "./pages/Service/index";
import { createStore, combineReducers, applyMiddleware } from "redux";
import featuredReducer from "./reducers/index";
import { Provider } from "react-redux";
import thunkMiddleware from "redux-thunk";
console.log(featuredReducer);
const middleware = applyMiddleware(thunkMiddleware);
const store = createStore(
  combineReducers({
    featuredReducer
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
