import React, { useState } from "react";
import { connect } from "react-redux";
import { TextInput } from "react-materialize";
import { searchData } from "../../actions/index";
import { Canvas } from "../index";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const mapDispatchToProps = {
  searchData
};

const mapStateToProps = state => ({
  uploadData: state.featuredReducer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ searchData, uploadData }) => {
  const { fullData, playerList } = uploadData;

  const handleChange = ({ target, key }) => {
    if (key === "Enter") {
      const { value } = target;
      const players = Object.keys(playerList).filter(keys =>
        playerList[keys].includes(value)
      );
      const onePlayer = players.length === 1;
      const data = fullData.filter(row => players.includes(row[2]));
      searchData(data, onePlayer);
    }
  };

  return (
    <TextInput label="Search player id or Name" onKeyPress={handleChange} />
  );
});
