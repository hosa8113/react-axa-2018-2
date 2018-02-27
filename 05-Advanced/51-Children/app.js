class WrapperComponent extends React.Component {
  render() {
    return (
      <div className="container">
        <hr/>
        {this.props.children}
        <hr/>
      </div>
    )
  }
}


class App extends React.Component {
  render() {
    return (
      <WrapperComponent>
        Test!
      </WrapperComponent>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));

