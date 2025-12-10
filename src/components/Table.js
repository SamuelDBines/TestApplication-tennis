import React, { useState } from "react";

const TableRow = ({
  date,
  ranking,
  playerName,
  playerID,
  points,
  tourniments,
  fullData,
  searchData,
}) => {
  const handleChange = (key, value) => {
    const onePlayer = key === 2 ? true : false;
    const data = fullData.filter((row) => {
      return value.includes(row[key]);
    });
    searchData(data, onePlayer);
  };
  const formatDate = (date) => {
    var year = date.substring(0, 4);
    var month = date.substring(4, 6);
    var day = date.substring(6, 8);

    return `${day}-${month}-${year}`;
  };
  return (
    <tr>
      <th
        style={{ cursor: "pointer" }}
        onClick={() => handleChange(0, date)}
        data-field="date"
      >
        {formatDate(date)}
      </th>
      <th
        style={{ cursor: "pointer" }}
        onClick={() => handleChange(2, playerID)}
        data-field="playerID"
      >
        {playerID}
      </th>
      <th
        style={{ cursor: "pointer" }}
        onClick={() => handleChange(2, playerID)}
        data-field="playerID"
      >
        {playerName}
      </th>
      <th
        style={{ cursor: "pointer" }}
        onClick={() => handleChange(1, ranking)}
        data-field="ranking"
      >
        {ranking}
      </th>
      <th
        style={{ cursor: "pointer" }}
        onClick={() => handleChange(3, points)}
        data-field="points"
      >
        {points}
      </th>
      <th
        style={{ cursor: "pointer" }}
        onClick={() => handleChange(4, tourniments)}
        data-field="tourniments"
      >
        {tourniments}
      </th>
    </tr>
  );
};

const Table = ({ uploadData }) => {
  const { data, limit, playerList, fullData } = uploadData;
  return (
    <table>
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
    </table>
  );
};

export default Table;
