import React from 'react';

class Dogs extends React.Component {
  render() {
    const dogs = this.props.dogs.first.data;
    const nextPup = (
      <div className="pet-container">
        Pupper Name: {dogs.name}
        <br />
        <img src={dogs.imageURL} alt="A heartwarming, picturesque dog" />
        <br />
        Age: {dogs.age}
        <br />
        Story: {dogs.story}
        <br />
        Breed: {dogs.breed}
        <br />
        Gender: {dogs.gender}
        <br />
        Description: {dogs.description}
        <br />
        <button type="button" onClick={(e) => this.props.handleDogAdopt(e)}>
          Adopt
        </button>
      </div>
    );
    return <>{nextPup}</>;
  }
}

export default Dogs;
