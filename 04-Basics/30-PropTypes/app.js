const Title = props => <h1>{props.title}</h1>;
Title.propTypes = { title: PropTypes.string.isRequired };
Title.defaultProps = { title: "Hello World" };

const Clock = props => {
  const displayTime = moment(props.time)
    .add(props.hourOffset, "h")
    .toString();

  return <h3>{displayTime}</h3>;
};
Clock.propTypes = {
  time: PropTypes.instanceOf(Date).isRequired,
  hourOffset: PropTypes.number,
  onClick: PropTypes.func
};
Clock.defaultProps = { hourOffset: 0 };

class AppComponent extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired
  };

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

        {this.countries.map(country => (
          <div key={country.id}>{country.name}</div>
        ))}
      </div>
    );
  }
}

const app = <AppComponent title="Greetings" />;

ReactDOM.render(app, document.getElementById("root"));

// DEMO:
// - Don't pass title prop to AppComponent
// - Pass number, undefined or null as title to AppComponent
// - Add the clock component without props
// - Show: https://www.npmjs.com/package/prop-types
