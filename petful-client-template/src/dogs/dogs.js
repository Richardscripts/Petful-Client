import React from 'react';
import Api from '../helpers/api_helpers';

class Dogs extends React.Component {
  state = {
    dogs: [],
  };

  async componentDidMount() {
    let res = await Api.getDogs();
    this.setState({
      dogs: res,
    });
  }

  render() {
    console.log(this.state);
    return <></>;
  }
}

export default Dogs;
