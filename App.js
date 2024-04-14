const reactElementHeading = React.createElement("div", { id: "surya" }, [
  React.createElement("h1", { id: "surya-child1" }, "fsa"),
  React.createElement("h1", { id: "surya-child2" }, "fsa"),
]);
const actualRootElement = ReactDOM.createRoot(document.getElementById("root"));
actualRootElement.render(reactElementHeading);
