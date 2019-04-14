import React, { Component } from "react";
import PropTypes from "prop-types";

import Author from "./author";
import ImageList from "./imageGetter";
import "../../Assets/css/Components/articles.css";

function articleProp(articleData, subjectData, color) {
  return (
    <div className="mainBody__featuredArticleColumn">
      <p className="mainBody__categoryText" alt="" style={color}>
        {subjectData}
      </p>
      <div className="mainBody__articleImageWrapper2">
        <ImageList data={articleData.thumbnail} />
        <div className="mainBody__readMoreText2">
          <span>Read more</span>
        </div>
      </div>
      <div className="mainBody__smallerArticleTitles">
        <p>{articleData.title}</p>
      </div>
      <Author authorName={articleData.authorName} />
      <div className="mainBody__articleParagraph">
        <p>{articleData.description}</p>
      </div>
    </div>
  );
}

class FeaturedArticle extends Component {
  render() {
    const { articleData, subjectData, articleId, subjectId } = this.props;
    const color = {
      color: `#${subjectData.color[subjectId]}`
    };
    return articleProp(
      articleData.articles[articleId],
      subjectData.subjects[subjectId],
      color
    );
  }
}

FeaturedArticle.propTypes = {
  articleData: PropTypes.object,
  subjectData: PropTypes.object,
  articleId: PropTypes.string,
  subjectId: PropTypes.string
};
FeaturedArticle.defaultProps = {
  articleData: "",
  subjectData: "",
  articleId: "0",
  subjectId: "0"
};

export default FeaturedArticle;
