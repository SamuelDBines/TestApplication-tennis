import React from "react";
import { Button, Row, Tabs, Tab, Col } from "react-materialize";
import axios from "axios";
import {
  // LineGraph,
  // BarChart,
  Searchbar,
  Table,
  Loading,
} from "./components/index";
import { useHeaders, useMatches } from "./hooks";

const route = "/csv/";

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

const getHeaders = async () => axios.get("/dist/wta_headers.json");

const items = [
  "wta_matches_2010.csv",
  "wta_matches_2011.csv",
  "wta_matches_2012.csv",
  "wta_matches_2013.csv",
  "wta_matches_2014.csv",
  "wta_matches_2015.csv",
  "wta_matches_2016.csv",
];

const initialState = {
  status: null,
  data: undefined,
  fullData: undefined,
  search: undefined,
  playerList: undefined,
  onePlayer: false,
  limit: 10,
};
const limit = 10;

const App = () => {
  const { headers } = useHeaders();
  const { matches } = useMatches(items);
  console.log(matches);

  const addMoreClick = () => {
    if (limit < fullData.length) addMore(limit + 10);
  };

  // const removeMoreClick = () => {
  //   if (limit > 0) addMore(limit - 10);
  // };

  // const initData = async () => {
  //   const { players, ranking } = await getPlayers();
  //   playerList(players);
  //   uploadAction(ranking);
  // };
  if (true) {
    return <Loading type="spinningBubbles" />;
  }
  return (
    <>
      <Row>
        <Col s={4}>
          {!matchDat.data ? (
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
              <div className="styled-canvas">
                <Table />
              </div>
            </Tab>
            <Tab title="Points">
              <div className="styled-canvas">
                {!onePlayer ? (
                  <Loading type="spinningBubbles" />
                ) : (
                  <LineGraph data={data} />
                )}
              </div>
            </Tab>
            <Tab title="Tourniments">
              <div className="styled-canvas">
                {!onePlayer ? <Loading /> : <BarChart data={data} />}
              </div>
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </>
  );
};

export default App;
