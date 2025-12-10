import React from "react";
import { connect } from "react-redux";
import { TextInput } from "react-materialize";
import { searchData } from "../actions/index";

const mapDispatchToProps = {
  searchData,
};

const mapStateToProps = (state) => ({
  uploadData: state.featuredReducer,
});

const SearchBar = connect(
  mapStateToProps,
  mapDispatchToProps
)(({ searchData, uploadData }) => {
  const { fullData, playerList } = uploadData;

  const handleChange = ({ target, key }) => {
    if (key === "Enter") {
      const { value } = target;
      const players = Object.keys(playerList).filter((keys) =>
        playerList[keys].includes(value)
      );
      const onePlayer = players.length === 1;
      const data = fullData.filter((row) => players.includes(row[2]));
      searchData(data, onePlayer);
    }
  };

  return (
    <TextInput label="Search player id or Name" onKeyPress={handleChange} />
  );
});

export default SearchBar;
