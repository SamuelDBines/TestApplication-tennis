import React, { useState } from "react";
import ReactFileReader from "react-file-reader";
import Loading from "./Loading";

const CSVReader = ({ uploadAction, uploadData }) => {
  const [state, usestate] = useState({});

  const handleFiles = (files) => {
    const reader = new FileReader();
    reader.onload = function (e) {
      usestate(reader.result);

      const rows = reader.result
        .split("\n")
        .map((results) => results.split(","));
      uploadAction(rows);
    };
    reader.readAsText(files[0]);
  };

  return (
    <ReactFileReader handleFiles={handleFiles} fileTypes={".csv"}>
      {uploadData.status == "FETCH_DATA_BEGIN" ? (
        <Loading type="bubbles" color="red" />
      ) : (
        <button className="btn">Upload</button>
      )}
    </ReactFileReader>
  );
};

export default CSVReader;
