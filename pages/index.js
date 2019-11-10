import Posts from './posts';
import React, { Component } from 'react';
import Data from '../public/data/data.json';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: 10
    };
    // const DATA = {}
  }

  render() {
    return (
      <div>
        <Posts data={Data.data}>
        </Posts>
      </div>
    );
  }
}

export default Index;