import React from 'react';
import Header from '../header/header';
import Dogs from '../dogs/dogs';
import Cats from '../cats/cats';

import './root.css';

function Root() {
  return (
    <>
      <Header />
      <hr />
      <Dogs />
      <Cats />
    </>
  );
}

export default Root;
