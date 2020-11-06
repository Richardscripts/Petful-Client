import React from 'react';

class Cats extends React.Component {
  render() {
    const cats = this.props.cats.first.data;
    const nextCat = (
      <div className="pet-container">
        Catter Name: {cats.name}
        <br />
        <img src={cats.imageURL} alt="A heartwarming, picturesque cat" />
        <br />
        Age: {cats.age}
        <br />
        Story: {cats.story}
        <br />
        Breed: {cats.breed}
        <br />
        Gender: {cats.gender}
        <br />
        Description: {cats.description}
        <br />
        <button onClick={() => this.props.handleCatAdopt()}>Adopt</button>
      </div>
    );
    return <>{nextCat}</>;
  }
}

export default Cats;
