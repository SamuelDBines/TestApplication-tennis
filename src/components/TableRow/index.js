import React from "react";
import { connect } from "react-redux";
import { searchData } from "../../actions/index";

const mapDispatchToProps = {
  searchData
};

const mapStateToProps = state => ({
  uploadData: state.featuredReducer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  ({
    date,
    ranking,
    playerName,
    playerID,
    points,
    tourniments,
    fullData,
    searchData
  }) => {
    const handleChange = (key, value) => {
      console.log(key, value);
      const onePlayer = key === 2 ? true : false;
      const data = fullData.filter(row => {
        // console.log(row[key]);
        return value.includes(row[key]);
      });
      searchData(data, onePlayer);
    };
    const formatDate = date => {
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
  }
);
