import Posts from './posts';
import React, { Component } from 'react';
import Data from '../public/data/data.json';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: 10
    };
  }

  render() {
    
  const DATA = Data.data 
console.log('data', DATA)
    return (
      <div>
        <Posts {...DATA}>
        </Posts>
      </div>
    );
  }
}

export default Index;