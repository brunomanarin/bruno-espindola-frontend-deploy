import React, { Component } from "react";
import { connect } from "react-redux";
import { Provider } from "react-redux";
import store from "./store.js";

// Componentes importados:
import Header from "./Components/header";
import Homepage from "./Pages/homePage";
import PreLoader from "./Pages/loadingScreen";
import Filter from "./Pages/filterGetter";
import ErrorHandler from "./Pages/errorHandler.js";
import MobileMenu from "./Pages/mobileMenu";

//Assets importados:
import "./Assets/css/Animations/animations.css";

@connect(store => {
  return {
    subjects: store.subject.subjects,
    subjectsFetched: store.subject.fetched,
    subjectError: store.subject.errorOcurred,
    article: store.article.articles,
    articleFetched: store.article.fetched,
    articleError: store.article.errorOcurred
  };
})
class App extends Component {
  state = {
    menuOpen: false,
    subjectFilter: null
  };
  menuClickHandler = () => {
    this.setState(prevState => {
      return { menuOpen: !prevState.menuOpen };
    });
  };
  filterClickHandler(subjectId) {
    this.setState({
      subjectFilter: subjectId
    });
  }
  render() {
    let mobileMenu;
    let preLoader;
    let errorHandler;
    let homePage = <Homepage />;
    let filter;
    if (!this.props.subjectsFetched && !this.props.article.fetched) {
      preLoader = <PreLoader />;
      homePage = null;
    }
    if (this.props.articleError && this.props.subjectError) {
      errorHandler = <ErrorHandler />;
      preLoader = null;
    }
    if (this.state.menuOpen) {
      mobileMenu = (
        <MobileMenu
          filter={this.filterClickHandler.bind(this)}
          menuClickHandler={this.menuClickHandler}
        />
      );
      homePage = null;
      filter = null;
    }
    if (this.state.subjectFilter !== null) {
      filter = (
        <Filter
          subjectId={this.state.subjectFilter}
          article={this.props.article}
          subject={this.props.subjects}
          filter={this.filterClickHandler.bind(this)}
        />
      );
      homePage = null;
    }
    return (
      <div>
        <Provider store={store}>
          <Header
            menuClickHandler={this.menuClickHandler}
            filter={this.filterClickHandler.bind(this)}
          />
          {errorHandler}
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
