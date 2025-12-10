import React from "react";
import { TextInput } from "react-materialize";

const SearchBar = ({ searchData, uploadData }) => {
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
};

export default SearchBar;
