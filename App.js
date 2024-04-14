import React from "react";
import ReactDOM from "react-dom/client";
const reactElementHeading = React.createElement("div", { id: "surya" }, [
  React.createElement("h1", { id: "surya-child1" }, "this is react"),
  React.createElement("h1", { id: "surya-child2" }, "this is react 2"),
]);
const actualRootElement = ReactDOM.createRoot(document.getElementById("root"));
actualRootElement.render(reactElementHeading);
