import React, { useState } from "react";
import { connect } from "react-redux";
import ReactFileReader from "react-file-reader";
import { Loading } from "../index";
import { uploadAction } from "../../actions/index";
const mapDispatchToProps = {
  uploadAction
};

const mapStateToProps = state => ({
  uploadData: state.featuredReducer
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(({ uploadAction, uploadData }) => {
  console.log(uploadData, uploadAction);
  const [state, usestate] = useState({});

  const handleFiles = files => {
    var reader = new FileReader();
    reader.onload = function(e) {
      usestate(reader.result);

      const rows = reader.result.split("\n").map(results => results.split(","));
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
});
