const headerElement = React.createElement(
    "h1",
    null,
    "Hello from React element!"
);
const divElement = React.createElement(
    "div",
    { className: "blue" },
    headerElement
);

ReactDOM.render(
    divElement,
    document.getElementById('component1')
);