const heading = React.createElement(
  "h1",
  { id: "headingEl" },
  "Hello world from react"
);
heading.innerHTML = "namaste react";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
