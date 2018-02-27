class AppComponent extends React.Component {
  render() {
    return (
      <form onSubmit={e => this.submitForm(e)}>
        <label>
          Is going:
          <input
            name="isGoing"
            ref={elem => (this.isGoing = elem)}
            type="checkbox"
            defaultChecked={this.props.initialIsGoing}
          />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            ref={elem => (this.numberOfGuests = elem)}
            type="number"
            defaultValue={this.props.initialNumberOfGuests}
            onChange={e => this.numberChanged(e)}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }

  submitForm(e) {
    e.preventDefault();

    // using DOM-API to get the value
    console.log(e.target.elements.isGoing.checked);
    console.log(e.target.elements.numberOfGuests.value);

    // using refs to get the value
    console.log(this.isGoing.checked);
    console.log(this.numberOfGuests.value);
  }
}

const app = <AppComponent initialNumberOfGuests={42} initialIsGoing={true} />;

ReactDOM.render(app, document.getElementById("root"));

// DEMO:
// - show the effect of preventDefault()
// - explain setting the initial value, i.e. error when setting the value
// - add a change handler to an input
// - add validation to component state and update in change handler
// - manage the form state with component state
// - implement a generic change handler
