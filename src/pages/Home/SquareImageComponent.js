import React, { Component } from "react";
import { Card, Row } from "react-materialize";
import ClickableImage from "./ClickableImage";
class SquareImageComponent extends Component {
  createLinks(array, id) {
    array.forEach(element => {
      element.link = `${id}#${element.name}`;
      console.log(element);
    });
    return array;
  }
  render() {
    const id = "info";
    const images = this.createLinks(this.props.images, id);
    return (
      <Card>
        <Row>
          {images.map((element, index) => {
            return (
              <ClickableImage
                link={element.link}
                img={element.url}
                name={element.name}
              />
            );
          })}
        </Row>
      </Card>
    );
  }
}

export default SquareImageComponent;
