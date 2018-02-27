const Title = props => <h1>{props.title}</h1>;

const Clock = props => {
  const displayTime = moment(props.time)
    .add(props.hourOffset, "h")
    .toString();

  return <h3>{displayTime}</h3>;
};

class AppComponent extends React.Component {
  countries = [
    { id: "fr", name: "France", offset: 0 },
    { id: "de", name: "Germany", offset: 0 },
    { id: "it", name: "Italy", offset: 0 },
    { id: "id", name: "India", offset: -5 },
    { id: "in", name: "Indonesia", offset: -7 },
    { id: "ch", name: "Switzerland", offset: 0 },
    { id: "us", name: "USA", offset: 8 }
  ];

  render() {
    const now = new Date();

    return (
      <div>
        <Title title={this.props.title} />

        {this.countries.map(country => country.name)}
      </div>
    );
  }
}

const app = <AppComponent title="Greetings" />;

ReactDOM.render(app, document.getElementById("root"));

// DEMO:
// - show plain JavaScript Array.map
// - add JSX to the mapping function, by wrapping in a <div>
// - show the key warning, fix it
// - add a clock component for each country
// - add a live filter for the countries
