class Counter extends React.Component {
  state = {
    count: 0
  };

  render() {
    return (
      <div>
        <h3>Lifecycle Example</h3>
        <p>
          Count:
          <b> {this.state.count} </b>
        </p>
      </div>
    );
  }

  componentDidMount() {
    this.setState({ count: this.state.count + 2 });
  }
}

class App extends React.Component {
  state = { showCounter: true };
  render() {
    return (
      <div>
        <button onClick={() => this.toggle()}>Toggle!</button>
        {this.state.showCounter ? <Counter /> : null}
      </div>
    );
  }

  toggle() {
    this.setState({ showCounter: !this.state.showCounter });
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

// DEMO:
// - show componentWillMount
// - schedule the counter increment with setInterval, show leak
// - implement componentWillUnmount using this.timer
