import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Header, Footer } from "./components/index";
import Home from "./pages/Home/Index";
import Login from "./pages/Login/index";
import Register from "./pages/Register/index";
import Service from "./pages/Service/index";
import Projects from "./pages/Projects/Index";

class App extends Component {
  render() {
    return (
      <Router>
        <Header />
        <Route exact={true} path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/info" component={Projects} />

        <Footer />
      </Router>
    );
  }
}

export default App;
