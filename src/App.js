import React from "react";
import "./App.css";
import MultipleInputImgbb from "./MultipleInputImgbb/MultipleInputImgbb";
import SimpleInputlmgbb from "./SimpleInputImgbb/SimpleInputImgbb";
import SingleInputImgbb from "./SingleInputImgbb/SingleInputImgbb";
import SimpleInputWithSubmission from "./SimpleInputWithSubmission/SimpleInputWithSubmission";

const App = () => {
  return (
    <div>
      <h1 style={{ color: "red", textAlign: "center" }}>
        this is simple img input for img bb
      </h1>
      <SimpleInputlmgbb />

      <h1 style={{ color: "red", textAlign: "center" }}>
        this is single img input with submission img bb
      </h1>
      <SimpleInputWithSubmission />

      <h1 style={{ color: "red", textAlign: "center" }}>
        this is simple img input for img bb
      </h1>
      <SingleInputImgbb />

      <h1 style={{ color: "red", textAlign: "center" }}>
        this is Multiple img input for img bb
      </h1>
      <MultipleInputImgbb />
    </div>
  );
};

export default App;
