import React from "react";
import { Card } from "react-materialize";
import { Loading } from "./Loading";

const Canvas = ({ uploadData, children }) => {
  return (
    <Card className="white-text canvasCard">
      {!uploadData.data ? (
        <div>
          <p> Press start to begin </p>
          <Loading type="bubbles" color="red" />
        </div>
      ) : (
        children
      )}
    </Card>
  );
};

export default Canvas;
