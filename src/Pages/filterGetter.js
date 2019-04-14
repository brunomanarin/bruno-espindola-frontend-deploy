import React, { Component } from "react";
import { connect } from "react-redux";

import DefaultArticle from "../Components/article/defaultArticle";
import "../Assets/css/Pages/filter.css";

@connect(store => {
  return {
    article: store.article,
    subject: store.subject
  };
})
class Filter extends Component {
  filterGenerator(subjectId) {
    const { article, subject } = this.props;
    const articleLorem = (
      <DefaultArticle
        articleData={article}
        articleId="6"
        subjectData={subject}
        subjectId={subjectId.toString()}
      />
    );
    const articleDisplay = [];
    for (let i = 0; i < Math.floor(Math.random() * 10)+1; i++) {
      articleDisplay[i] = articleLorem;
    }
    return <div className="mainBody__line">{articleDisplay}</div>;
  }
  backToMenu() {
    this.props.filter(null);
  }
  render() {
    return (
      <div className="mainBody">
        <div className="mainBody__filterBody">
          <div className="mainBody__line" id="mainBody__filterTitle" />
          {this.filterGenerator(this.props.subjectId)}
          <div className="mainBody__line" id="mainBody__filterTitle" />
          <div>
            <button
              className="mainBody__filterButton"
              onClick={this.backToMenu.bind(this)}
            >
              {" "}
              Back to Menu{" "}
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Filter;
