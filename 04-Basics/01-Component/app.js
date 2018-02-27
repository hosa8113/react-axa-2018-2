class GreeterComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Greetings</h1>
        <p>Hello World!</p>
        <p>The current time is:</p>
        <p>{new Date().toLocaleString()}</p>
      </div>
    );
  }
}

ReactDOM.render(<GreeterComponent />, document.getElementById("root"));

// DEMO:
// - extract app-component into variable
// - conditional rendering of message
// - greeting messages as props
// - introduce variables in render for message & date
// - introduce state for date & refresh button
// - schedule update in componentDidMount
