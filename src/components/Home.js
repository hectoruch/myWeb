import React, { Component } from 'react';
import Header from './Header';
import JobMenu from './JobMenu/JobMenu';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <JobMenu />
      </div>
    )
  };
}

export default Home;
