class GreeterComponent extends React.Component {
  render() {
    return (
      <div>
        <h1 style={{ color: "red", backgroundColor: "yellow" }}>
          {this.props.title}
        </h1>
        <p className="box">{this.props.message}</p>
      </div>
    );
  }
}

const app = <GreeterComponent title="Greetings" message="Hello World!" />;

ReactDOM.render(app, document.getElementById("root"));

// DEMO:
// - extract style to variable, move variable in scope
// - reuse the extracted style
// - introduce second style object and merge the objects
