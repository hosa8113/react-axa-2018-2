const borderStyle = {
  borderWidth: 1,
  borderColor: "silver",
  borderStyle: "solid"
};

class Clock extends React.Component {
  render() {
    const displayTime = moment(this.props.time)
      .add(this.props.hourOffset, "h")
      .toString();

    return (
      <div style={borderStyle}>
        <h3>{displayTime}</h3>
      </div>
    );
  }
}

class AppComponent extends React.Component {
  render() {
    const now = new Date();

    return (
      <div>
        <h1>{this.props.title}</h1>
        The current time is: <Clock time={now} />
        The current GMT is: <Clock time={now} hourOffset={-2} />
      </div>
    );
  }
}

const app = <AppComponent title="Greetings" />;

ReactDOM.render(app, document.getElementById("root"));

// DEMO:
// - add nested content to clock
