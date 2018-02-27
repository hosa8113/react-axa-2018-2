function withBackground(Component){
  return (props) => (
    <div className="container">
      <hr/>
        <Component/>
      <hr/>
    </div>
  )
}

class Content extends React.Component{
  render (){
    return (
      <div>Test!</div>
    )
  }
}
const WrapperComponent = withBackground(Content);


class App extends React.Component {
  render() {
    return (
      <WrapperComponent/>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));

