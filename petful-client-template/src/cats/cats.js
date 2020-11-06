import React from 'react';
import Api from '../helpers/api_helpers';

class Cats extends React.Component {
  state = {
    cats: [],
  };

  async componentDidMount() {
    let res = await Api.getCats();
    this.setState({
      cats: res,
    });
  }

  render() {
    console.log(this.state);
    return <></>;
  }
}

export default Cats;
