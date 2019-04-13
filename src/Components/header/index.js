import React, { Component } from 'react'
import { connect } from 'react-redux'
import  '../../Assets/css/Components/header.css'



@connect((store) => {
  return {
    subjects: store.subject.subjects,
    article: store.article
  };
})

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="header" id="header">
          <p id="header__logoNavBar" ><img alt="" src="http://localhost:3001/slices/logo.png"></img></p>
          <span className="header__icon" onClick={this.props.menuClickHandler}>
            <img alt="" src="http://localhost:3001/slices/menu.png" />
          </span>
          <ul className="header__navbarright">
            <div id="header__navbar-menu">
              <p alt="" onClick={this.filterPolitics.bind(this)}>{this.props.subjects[0]}</p>
              <p alt="" onClick={this.filterBusiness.bind(this)}>{this.props.subjects[1]}</p>
              <p alt="" onClick={this.filterScience.bind(this)}>{this.props.subjects[2]}</p>
              <p alt="" onClick={this.filterTech.bind(this)}>{this.props.subjects[3]}</p>
              <p alt="" onClick={this.filterSports.bind(this)}>{this.props.subjects[4]}</p>
            </div>
          </ul>
        </nav>
      </header>
    );
  }
  filterPolitics() {
    this.props.filter(0);
  }
  filterBusiness() {
    this.props.filter(1);
  }
  filterScience() {
    this.props.filter(2);
  }
  filterTech() {
    this.props.filter(3);
  }
  filterSports() {
    this.props.filter(4);
  }
}

export default Header;
