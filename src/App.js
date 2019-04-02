import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Provider } from "react-redux";
import store from './store.js'
import MobileMenu from './Components/pages/mobileMenu';

// Componentes importados:
import Header from './Components/headerComponent/header';
import Homepage from './Components/pages/homePage';
import {fetchArticles} from './actions/articleActions';
import PreLoader from './Components/pages/preload.js';
import Filter from './Components/pages/filter';

//Assets importados:
import './Assets/css/style.css';
import { fetchSubjects } from './actions/subjectActions';

@connect((store) => {
  return{
    subjects: store.subject.subjects,
    subjectsFetched: store.subject.fetched,
    article: store.article.articles,
    articleFetched: store.article.fetched

  };
})

class App extends Component {

  componentWillMount(){
    this.props.dispatch(fetchArticles())
    this.props.dispatch(fetchSubjects())
  }
  state ={
    menuOpen: false,
    subjectFilter: null
  };
  menuClickHandler = () => {
    this.setState((prevState) => {
      return {menuOpen: !prevState.menuOpen};
    });
  };
  filterClickHandler(subjectId) {
      this.setState({
          subjectFilter: subjectId
      });
  };

  render() {
    let mobileMenu;
    let preLoader ;
    let homePage = <Homepage />;
    let filter ;

    if(!this.props.subjectsFetched && !this.props.article.fetched){ 
      preLoader = <PreLoader />;
      homePage = null;
    }
    if(this.state.menuOpen){
      mobileMenu = <MobileMenu 
                    filter = {this.filterClickHandler.bind(this)}
                    menuClickHandler = {this.menuClickHandler}
                  />;
      homePage = null;
      filter = null;
    }
    if(this.state.subjectFilter !== null){
      filter = <Filter 
        subjectId = {this.state.subjectFilter}
        article = {this.props.article}
        subject = {this.props.subjects}
        filter = {this.filterClickHandler.bind(this)}
        />;
      homePage = null;
    }
    return (
      <div>
        <Provider store={store}>
        <Header 
          menuClickHandler = {this.menuClickHandler}
          filter = {this.filterClickHandler.bind(this)}
          />
          {mobileMenu}
          {filter}
          {preLoader}
          {homePage}
        </Provider>
      </div>
    );
  }
}

export default App;
