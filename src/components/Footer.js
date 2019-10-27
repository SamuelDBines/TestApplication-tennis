import React, { Component } from "react";
import { Row, Col, Container } from "react-materialize";
class App extends Component {
  render() {
    return (
      <footer className="page-footer">
        <Container>
          <Row>
            <Col m={6} s={12}>
              <h5 className="white-text">BCritical Ltd</h5>
              <p className="grey-text text-lighten-4">
                Find out more how we can help your buisness adapt to the
                technology market place.
              </p>
            </Col>
            <Col m={6} s={12}>
              <h5 className="white-text">Links</h5>
              <ul>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://github.com/SamuelDBines"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <a
                    className="grey-text text-lighten-3"
                    href="https://uk.linkedin.com/in/sam-bines-a5ab70185"
                  >
                    LinkedIn
                  </a>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
        <div className="footer-copyright">
          <Container>
            <Row>
              <Col m={6} s={12}>
                © 2019 All Written code and content except for images which can
                be found at
                <a
                  className="grey-text text-lighten-4 "
                  href="https://pexels.com"
                >
                  Pexels.com
                </a>
              </Col>
              <Col m={6} s={12}>
                <ul>
                  <li>Email: samuelBines@gmail.com</li>
                </ul>
              </Col>
            </Row>
          </Container>
        </div>
      </footer>
    );
  }
}

export default App;
