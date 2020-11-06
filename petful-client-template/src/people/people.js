import React from 'react';
import ApiHelpers from '../helpers/api_helpers';

class People extends React.Component {
  state = {
    people: [],
    addingName: false,
    addedName: false,
  };

  handleAddName = () => {
    this.setState({ addingName: !this.state.addingName });
  };

  async handleSubmitName(e) {
    e.preventDefault();
    const { person } = e.target;
    let res = await ApiHelpers.addPerson(person.value);
    this.setState({
      people: [...this.state.people, res.data],
      addingName: false,
      addedName: true,
    });
  }

  componentDidUpdate() {
    if (this.props.personDeleted === true) {
      this.getPeople();
      this.props.handleUpdatePeopleDeleted();
    }
  }

  async getPeople() {
    let res = await ApiHelpers.getPeople();
    this.setState({
      people: this.populatePeopleList(res),
    });
  }

  async componentDidMount() {
    this.getPeople();
  }

  populatePeopleList = function (res) {
    const peopleChain = res;
    let arr = [];
    while (peopleChain.first) {
      arr.push(peopleChain.first.data);
      peopleChain.first = peopleChain.first.next || null;
    }
    return arr;
  };

  render() {
    const people = this.state.people.map((person, idx) => {
      return (
        <span key={idx}>
          {person} <br />
        </span>
      );
    });

    return (
      <div className="people-container">
        {people}
        {!this.state.addedName && (
          <>
            <button type="button" onClick={() => this.handleAddName()}>
              Add Name to List
            </button>
            <br />
          </>
        )}
        {this.state.addingName && (
          <>
            <form onSubmit={(e) => this.handleSubmitName(e)} action="#">
              <label>Name:</label>
              <input id="person"></input>
              <button type="submit">Submit</button>
            </form>
          </>
        )}
      </div>
    );
  }
}

export default People;
