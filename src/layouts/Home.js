import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import BottomScrollListener from 'react-bottom-scroll-listener';

import data from '../assets/me.json';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataMe: data
    };
  }

  updateContent = () => {
    this.setState({
      dataMe: this.state.dataMe.concat(data)
    });
  }

  buildLinks = () => {
    const list = this.state.dataMe.map(function (content, index) {
      return (
        <a
          href={content.link}
          target="_blank"
          className="text -primary-font -font-xxl -black -bold links"
          >{content.name}{' '}
        </a>
      );
    });
    return list;
  }

  render() {
    return (
      <div className="home">
        <BottomScrollListener debounce={0} offset={100} onBottom={() => this.updateContent()} />
        {this.buildLinks()}
        <h1 className="text -primary-font -black -bold title">héctor arce de las heras | <a href="http://www.carniceria.org/" target="_blank">carnicería (cto)</a> | <a href="https://www.openbank.es/" target="_blank">openBank (react front end)</a></h1>
      </div>
    );
  }
}

Home.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Home;
