import config from '../config';

const Api = {
  async getDogs() {
    let res = await fetch(`${config.API_ENDPOINT}/pets/dogs`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    });
    if (!res.ok) {
      return res.json().then((e) => Promise.reject(e));
    } else {
      return res.json();
    }
  },
};

export default Api;
