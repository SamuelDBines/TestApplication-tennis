import React, { Component, useState } from "react";
import { Container, Button, Row, Tabs, Tab, Col } from "react-materialize";
import {
  LineGraph,
  BarChart,
  Searchbar,
  Table,
  Loading
} from "../../components/index";
import { connect } from "react-redux";
import { addMore } from "../../actions/index";
import { StyledCanvas } from "./styles";
import { getPlayers } from "../../service/index";
import { playerList, uploadAction } from "../../actions/index";

const mapDispatchToProps = {
  addMore,
  playerList,
  uploadAction
};

const mapStateToProps = state => ({
  uploadData: state.featuredReducer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ uploadData, addMore, playerList, uploadAction }) => {
  const { fullData, limit, data, onePlayer } = uploadData;

  const addMoreClick = () => {
    if (limit < fullData.length) addMore(limit + 10);
  };
  const removeMoreClick = () => {
    if (limit > 0) addMore(limit - 10);
  };
  const initData = async () => {
    const { players, ranking } = await getPlayers();
    playerList(players);
    uploadAction(ranking);
  };

  return (
    <Row>
      <Col s={4}>
        {!uploadData.data ? (
          <Button onClick={initData}> Start</Button>
        ) : (
          <Searchbar />
        )}
        {!fullData || fullData.length === limit ? (
          ""
        ) : (
          <Button onClick={addMoreClick}>Add 10 more</Button>
        )}
      </Col>
      <Col s={8}>
        <Tabs className="tab-demo z-depth-1 tabs-fixed-width">
          <Tab title="Table" active>
            <StyledCanvas>
              <Table />
            </StyledCanvas>
          </Tab>
          <Tab title="Points">
            <StyledCanvas>
              {!onePlayer ? (
                <Loading type="spinningBubbles" />
              ) : (
                <LineGraph data={data} />
              )}
            </StyledCanvas>
          </Tab>
          <Tab title="Tourniments">
            <StyledCanvas>
              {!onePlayer ? <Loading /> : <BarChart data={data} />}
            </StyledCanvas>
          </Tab>
        </Tabs>
      </Col>
    </Row>
  );
});
