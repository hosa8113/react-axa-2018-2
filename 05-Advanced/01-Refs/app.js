class GreeterComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>React works with a virtual DOM</h1>
        <button ref={domElement => (this.button1 = domElement)}>
          Button 1
        </button>
        <br />
        <button ref={domElement => (this.button2 = domElement)}>
          Button 2
        </button>
        <br />
        <button ref={domElement => (this.button3 = domElement)}>
          Button 3
        </button>
      </div>
    );
  }

  componentDidMount() {
    this.button3.focus();
  }
}

ReactDOM.render(<GreeterComponent />, document.getElementById("root"));

// DEMO:
// - create ref to title, apply jquery-fittext plugin: $(this.title).fitText(1.5)
