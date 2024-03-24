import React from "react";
import EncodingParametersInURLs from "./EncodingParametersInURLs";
import WorkingWithObjects from "./WorkingWithObjects";
import WorkingWithArrays from "./WorkingWithArrays";

function Assignment5() {
  return (
    <div className="container">
      <h1>Assignment 5</h1>
      <WorkingWithArrays />
      <WorkingWithObjects />
      <EncodingParametersInURLs />
      <a href="http://localhost:4000/a5/welcome">Welcome</a>
    </div>
  );
}
export default Assignment5;
