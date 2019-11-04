import React from "react";
import ReactLoading from "react-loading";

export default ({ type, color }) => (
  <div style={{ margin: "auto", width: "300px" }}>
    <p style={{ textAlign: "center" }}>
      Charts will only be shown for individual players so make sure you narrow
      your search
    </p>
    <ReactLoading type={type} color={color} height={"100%"} width={"100%"} />
  </div>
);
