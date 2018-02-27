class GreeterComponent extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.message}</p>
        <p>The current time is:</p>
        <p>{this.state.time.toLocaleString()}</p>
        <button onClick={() => this.refresh()}>Update</button>
      </div>
    );
  }

  refresh() {
    this.setState({ time: new Date() });
  }
}

const app = <GreeterComponent title="Greetings" message="Hello World!" />;

ReactDOM.render(app, document.getElementById("root"));

// DEMO:
// - skip constructor with class property
// - add another state field
// - set state with function argument
// - second callback argument to setState
// - show https://reactjs.org/docs/react-component.html#setstate
//
// - pass the event to the handler and log it
// - show access to event.nativeEvent
