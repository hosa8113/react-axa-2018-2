class GreeterComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: ""
    };
  }

  render() {
    return (
      <div>
        <input value={this.state.name} onChange={e => this.handleChange(e)} />
        <div>Your name is: {this.state.name}</div>
      </div>
    );
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }
}

ReactDOM.render(<GreeterComponent />, document.getElementById("root"));

// DEMO:
// - pass method diractly to onChange -> oops!
// - explain this binding in JavaScript
// - binding in render method
// - binding in constructor
// - using class fields & arrow functions
