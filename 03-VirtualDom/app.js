let count = 0;

function renderApp() {
  count += 1;
  const content = <div>Count {count} </div>
  ReactDOM.render(content, document.getElementById("root"));
}

renderApp();
setInterval(renderApp, 1000);


// DEMO:
// - show DOM changes in dev tools
// - render the count twice
// - change the div to a input, focus a input
