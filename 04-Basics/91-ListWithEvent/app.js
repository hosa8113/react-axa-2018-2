const Title = props => <h1>{props.title}</h1>;

const Clock = props => {
  const displayTime = moment(props.time)
    .add(props.hourOffset, "h")
    .toString();
  return <h3>{displayTime}</h3>;
};

class AppComponent extends React.Component {
  state = {
    time: new Date()
  };

  render() {
    return (
      <div>
        <Title title={this.props.title} />
        <div>
          <button onClick={() => this.refreshTime()}>Refresh</button>
        </div>
        <br />
        {this.props.countries.map(country => (
          <div key={country.id}>
            Time in {country.name}:{" "}
            <Clock time={this.state.time} hourOffset={country.offset} />
          </div>
        ))}
      </div>
    );
  }

  refreshTime() {
    this.setState({ time: new Date() });
  }
}

const app = <AppComponent title="Greetings" countries={getCountries()} />;

ReactDOM.render(app, document.getElementById("root"));

function getCountries() {
  return [
    { id: "fr", name: "France", offset: 0 },
    { id: "de", name: "Germany", offset: 0 },
    { id: "it", name: "Italy", offset: 0 },
    { id: "id", name: "India", offset: -5 },
    { id: "in", name: "Indonesia", offset: -7 },
    { id: "ch", name: "Switzerland", offset: 0 },
    { id: "us", name: "USA", offset: 8 }
  ];
}
