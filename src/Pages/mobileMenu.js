import React, { Component } from 'react';
import {connect} from 'react-redux';

@connect((store) => {
    return{
      subjects: store.subject.subjects,
      article: store.article
    };
  })

class MobileMenu extends Component { 
    render() {
        return (
            <div className = "mobileMenu">
              <p alt="" onClick = {this.filterPolitics.bind(this)}>{this.props.subjects[0]}</p>
              <p alt="" onClick = {this.filterBusiness.bind(this)}>{this.props.subjects[1]}</p>
              <p alt="" onClick = {this.filterScience.bind(this)}>{this.props.subjects[2]}</p>
              <p alt="" onClick = {this.filterTech.bind(this)}>{this.props.subjects[3]}</p>
              <p alt="" onClick = {this.filterSports.bind(this)}>{this.props.subjects[4]}</p>
            </div>
        );
    }
    filterPolitics(){
      this.props.filter(0);
      this.props.menuClickHandler();
    }
    filterBusiness(){
      this.props.filter(1);
      this.props.menuClickHandler();
    } 
    filterScience(){
      this.props.filter(2);
      this.props.menuClickHandler();
    } 
    filterTech(){
      this.props.filter(3);
      this.props.menuClickHandler();
    } 
    filterSports(){
      this.props.filter(4);
      this.props.menuClickHandler();
    } 
}
export default MobileMenu;
