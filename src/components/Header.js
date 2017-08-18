import React, { Component } from 'react';
import ReactFitText from 'react-fittext';

class Home extends Component {
  render() {
    return (
      <div className="m-header">
        <ReactFitText compressor={1.2}>
          <h1><div className="box">héctor arce</div><span> | keep it simple and the content will shine through.</span></h1>
        </ReactFitText>
      </div>
    )
  };
}

export default Home;
