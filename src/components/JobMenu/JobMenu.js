import React, { Component } from 'react';

class JobMenu extends Component {

  constructor (props) {
  super(props);

  this.state = {
    showDeveloper: false,
    showDesigner: false,
    showContact: false,
  };
}

  openDeveloper() {
    this.setState(
      {
        showDeveloper: this.state.showDeveloper ? false : true,
        showDesigner: false,
        showContact: false,
       }
    );
  }

  openDesigner() {
    this.setState(
      {
        showDeveloper: false,
        showDesigner: this.state.showDesigner ? false : true,
        showContact: false,
       }
    );
  }

  openData() {
    this.setState(
      {
        showDeveloper: false,
        showDesigner: false,
        showContact: this.state.showData ? false : true,
       }
    );
  }

  closeDeveloper() {
    this.setState(
      {
        showDeveloper: this.state.showDeveloper ? false : true,
        showDesigner: false,
        showContact: false,
       }
    );
  }

  render() {
    return (
      <div className="m-job-menu">
        <div className={`m-job-menu__contain-item`} onClick={this.openDeveloper.bind(this)}>
          <span className="item">Developer</span>
          <span className="item-more">See more</span>
        </div>
        <div className={`m-job-menu__contain-item -x2`} onClick={this.openDesigner.bind(this)}>
          <span className="item">Designer</span>
          <span className="item-more">See more</span>
        </div>
        <div className={`m-job-menu__contain-item -x3`} onClick={this.openData.bind(this)}>
          <span className="item">Contact</span>
          <span className="item-more">See more</span>
        </div>
        <div className={`m-job-menu__contain-content ${this.state.showDeveloper ? '-open' : ''}`}>
          <div className="close-button" onClick={this.closeDeveloper.bind(this)}>
            <span>x</span>
          </div>
          <ul className="list-options">
            <li className="-selected">Developer</li>
            <li>Designer</li>
            <li>Contact</li>
          </ul>
          <div className="content">
            <div className="project-info -robyt-contain">
              <h2 className="secondary-font">Robyt Framework<span className="bar">|</span></h2>
              <p className="secondary-font">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
              <a className="btn-see-more" target="_blank" href="https://github.com/robytframework/robytframework.github.io">see more</a>
            </div>
            <div className="project-info -map-game-contain">
              <h2 className="secondary-font">othermapgame<span className="bar">|</span></h2>
              <p className="secondary-font">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
              <a className="btn-see-more" target="_blank" href="https://github.com/othermapgame/othermapgame.github.io">see more</a>
            </div>
            <div className="project-info -lifefont-contain">
              <h2 className="secondary-font">lifefonts<span className="bar">|</span></h2>
              <p className="secondary-font">lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>
              <a className="btn-see-more" target="_blank" href="https://github.com/lifefonts/lifefonts.github.io">see more</a>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default JobMenu;
