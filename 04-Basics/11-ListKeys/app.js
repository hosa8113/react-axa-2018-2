class AppComponent extends React.Component {
  state = {
    countries: [
      { id: "fr", name: "France" },
      { id: "de", name: "Germany" },
      { id: "it", name: "Italy" },
      { id: "id", name: "India" },
      { id: "in", name: "Indonesia" },
      { id: "ch", name: "Switzerland" },
      { id: "us", name: "USA" }
    ]
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>

        <button onClick={() => this.shuffle()}>Shuffle!</button>
        <br />
        <br />

        {this.state.countries.map(country => (
          <div>
            <button onClick={() => this.remove(country)}>-</button>
            {country.name}
            <input />
          </div>
        ))}
      </div>
    );
  }

  remove(country) {
    this.setState({
      countries: this.state.countries.filter(c => c !== country)
    });
  }

  shuffle() {
    this.setState({
      countries: _.shuffle(this.state.countries)
    });
  }
}

const app = <AppComponent title="Greetings" />;

ReactDOM.render(app, document.getElementById("root"));

// DEMO:
// - show error missing key
// - fix error with array index
// - enter values in inputs and remove entries or shuffle -> ouch!
// - fix with country id -> ok!
// - shuffle every second using componentDidMount -> show focus is lost without key
