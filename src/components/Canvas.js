import React, { Component } from "react";
import { connect } from "react-redux";
import { StyledCard } from "./Canvas/styles";
import { Loading } from "./index";
const mapStateToProps = (state) => ({
  uploadData: state.featuredReducer,
});

const Canvas = connect(
  mapStateToProps,
  null
)(({ uploadData, children }) => {
  return (
    <StyledCard textClassName="white-text">
      {!uploadData.data ? (
        <div>
          <p> Press start to begin </p>
          <Loading type="bubbles" color="red" />
        </div>
      ) : (
        children
      )}
    </StyledCard>
  );
});
export default Canvas;
