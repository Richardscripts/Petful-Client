import React from 'react';
import Header from '../header/header';
import Dogs from '../dogs/dogs';
import Cats from '../cats/cats';
import People from '../people/people';
import ApiHelpers from '../helpers/api_helpers';

import './root.css';

class Root extends React.Component {
  state = {
    dogs: { first: { data: {}, next: {} } },
    cats: { first: { data: {}, next: {} } },
    dog_adopt: false,
    cat_adopt: false,
    personDeleted: false,
  };

  handleDogAdopt = (e) => {
    this.setState({ dog_adopt: true });
  };

  handleCatAdopt = () => {
    this.setState({ cat_adopt: true });
  };

  handleUpdatePeopleDeleted = () => {
    this.setState({ personDeleted: !this.state.personDeleted });
  };

  async handleAdoptSubmit() {
    if (this.state.cat_adopt === true) {
      await ApiHelpers.deleteCat();
      this.setState({ cat_adopt: false });
      this.getCats();
    }
    if (this.state.dog_adopt === true) {
      await ApiHelpers.deleteDog();
      this.setState({ dog_adopt: false });
      this.getDogs();
    }
    ApiHelpers.deletePerson();
    this.handleUpdatePeopleDeleted();
  }

  async getDogs() {
    let res = await ApiHelpers.getDogs();
    this.setState({
      dogs: res,
    });
  }

  async getCats() {
    let res = await ApiHelpers.getCats();
    this.setState({
      cats: res,
    });
  }

  componentDidMount() {
    this.getDogs();
    this.getCats();
  }

  render() {
    return (
      <>
        <Header />
        <hr />
        <main>
          <div className="pets-section">
            <People
              personDeleted={this.state.personDeleted}
              handleUpdatePeopleDeleted={this.handleUpdatePeopleDeleted}
            />
            <section>
              <Dogs
                handleDogAdopt={this.handleDogAdopt}
                dogs={this.state.dogs}
              />
              <Cats
                handleCatAdopt={this.handleCatAdopt}
                cats={this.state.cats}
              />
            </section>
            <br />
          </div>
          <div className="button-wrapper">
            <button
              disabled={!this.state.dog_adopt && !this.state.cat_adopt}
              onClick={() => this.handleAdoptSubmit()}
            >
              Ready to Adopt
            </button>
          </div>
        </main>
      </>
    );
  }
}

export default Root;
