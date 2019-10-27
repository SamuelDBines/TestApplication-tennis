import React, { Component } from "react";
import { Container, Parallax } from "react-materialize";
import ScrollableAnchor from "react-scrollable-anchor";
import SquareImageComponent from "./SquareImageComponent";
import { configureAnchors } from "react-scrollable-anchor";

configureAnchors({ offset: -60, scrollDuration: 700 });
class Home extends Component {
  render() {
    const projectImages = [
      { url: "images/IoT.jpg", name: "IoT" },
      { url: "images/website.jpg", name: "Websites" },
      { url: "images/cloud.png", name: "Cloud Services" },
      { url: "images/blockChain.jpg", name: "Blockchain" }
    ];
    const profileImages = [
      { url: "images/teamwork.jpeg", name: "Team Work" },
      { url: "images/ideas.jpg", name: "Ideas" },
      { url: "images/share-knowledge.jpg", name: "Share Knowledge" },
      { url: "images/problem-solving.jpg", name: "Problem Solving" }
    ];
    return (
      <div>
        <Container>
          <ScrollableAnchor id={"introduction"}>
            <div>
              How can BCritical influence the way you interact with technology?
            </div>
          </ScrollableAnchor>
        </Container>
        <Parallax image={<img src="images/london.jpeg" />} />
        <Container>
          <ScrollableAnchor id={"technology"}>
            <SquareImageComponent images={projectImages} />
          </ScrollableAnchor>
        </Container>

        <Parallax image={<img src="images/london2.jpeg" />} />
        <Container>
          <ScrollableAnchor id={"profile"}>
            <SquareImageComponent images={profileImages} />
          </ScrollableAnchor>
        </Container>
        <Parallax image={<img src="images/london3.jpg" />} />
      </div>
    );
  }
}

export default Home;
