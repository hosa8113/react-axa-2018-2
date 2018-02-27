class AppComponent extends React.Component {
  state = {
    isGoing: true,
    numberOfGuests: 2
  };

  render() {
    return (
      <form onSubmit={e => this.submitForm(e)}>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={e => this.handleInputChange(e)}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={e => this.handleInputChange(e)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  submitForm(e) {
    e.preventDefault();

    console.log(this.state);
  }
}

const app = <AppComponent />;

ReactDOM.render(app, document.getElementById("root"));
