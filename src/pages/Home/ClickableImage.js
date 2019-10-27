import React, { Component } from "react";
import { MediaBox, Col } from "react-materialize";
import { Link } from "react-router-dom";
class ClickableImage extends Component {
  render() {
    return (
      <Col m={6} s={12} className="p0">
        <Link to={this.props.link}>
          <div className="overlay-container">
            <div
              className="imageButton"
              style={{ backgroundImage: `url(${this.props.img})` }}
            ></div>
            <h3 className="centered"> {this.props.name}</h3>
          </div>
        </Link>
      </Col>
    );
  }
}

export default ClickableImage;
