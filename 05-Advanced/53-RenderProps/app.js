class WrapperComponent extends React.Component {
  render() {
    return (
      <div>
        <hr/>
        <div className="container">
          {this.props.render()}
        </div>
        <hr/>
      </div>
    )
  }
}

class Content extends React.Component{
    render (){
      return (
        <div>Test!</div>
      )
    }
}

class App extends React.Component {
  render() {
    return (
      <WrapperComponent render={() => {
        return <Content/>
      }}/>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));

