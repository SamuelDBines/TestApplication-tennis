import React, { Component } from "react";
import { Container } from "react-materialize";
const API = "/data";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hits: []
    };
  }

  componentDidMount() {
    try {
      fetch(`${API}?name=${window.location.href.split("#")[1]}`)
        .then(response => response.json())
        .then(data => this.setState({ hits: data }))
        .catch(e =>
          this.setState({ hits: "An error occured while requesting data" })
        );
    } catch (e) {
      this.setState({ hits: "An error occured while requesting data" });
    }
  }

  render() {
    let data = this.state.hits;

    return (
      <Container>
        <p className="justify white-text">{data}</p>
      </Container>
    );
  }
}

export default Projects;
