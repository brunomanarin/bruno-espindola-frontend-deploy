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
          <p id="logoNavBar" ><img alt="" src="https://brunomanarin.github.io/api/slices/logo.png"></img></p>
          <span className="icon" onClick={this.props.menuClickHandler}>
            <img alt="" src="https://brunomanarin.github.io/api/slices/menu.png" />
          </span>
          <ul className="navbarright">
            <div id="navbar-menu">
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
