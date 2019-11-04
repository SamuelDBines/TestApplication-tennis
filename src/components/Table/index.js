import React, { useState } from "react";
import { connect } from "react-redux";
import { TableRow } from "../index";
import { Table } from "react-materialize";

const mapStateToProps = state => ({
  uploadData: state.featuredReducer
});

export default connect(
  mapStateToProps,
  null
)(({ uploadData }) => {
  const { data, limit, playerList, fullData } = uploadData;
  return (
    <Table>
      <thead>
        <tr>
          <th data-field="date">Date</th>
          <th data-field="playerID">PlayerID</th>
          <th data-field="playerName">Player Name</th>
          <th data-field="ranking">Ranking</th>
          <th data-field="points">Points</th>
          <th data-field="tourniments">Tourniments Entered</th>
        </tr>
      </thead>
      <tbody>
        {data.slice(0, limit).map((row, idx) => (
          <TableRow
            key={idx}
            date={row[0]}
            ranking={row[1]}
            playerName={playerList[row[2]]}
            playerID={row[2]}
            points={row[3]}
            tourniments={row[4]}
            fullData={fullData}
          />
        ))}
      </tbody>
    </Table>
  );
});
