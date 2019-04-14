import React, { Component } from "react";
import PropTypes from "prop-types";

import ImageList from "./imageGetter";
import "../../Assets/css/Components/articles.css";

function headLineProp(articleData, subjectData, color) {
  return (
    <div className="mainBody__headArticleColumn">
      <p className="mainBody__categoryText" alt="" style={color}>
        {subjectData}
      </p>
      <div className="mainBody__articleImageWrapper">
        <ImageList data={articleData.thumbnail} />
        <div className="mainBody__readMoreText">
          <span>Read more</span>
        </div>
      </div>
      <h2 className="mainBody__articleDescription">{articleData.title}</h2>
      <div>
        <img
          className="mainBody__authorAvatarBig"
          alt=""
          src="https://brunomanarin.github.io/api/slices/author.jpg"
        />
        <p className="mainBody__authorNameBig">{articleData.authorName}</p>
      </div>
    </div>
  );
}

class HeadLineArticle extends Component {
  render() {
    const { articleData, subjectData, articleId, subjectId } = this.props;
    const color = {
      color: `#${subjectData.color[subjectId]}`
    };
    return headLineProp(
      articleData.articles[articleId],
      subjectData.subjects[subjectId],
      color
    );
  }
}

HeadLineArticle.propTypes = {
  articleData: PropTypes.object,
  subjectData: PropTypes.object,
  articleId: PropTypes.string,
  subjectId: PropTypes.string
};
HeadLineArticle.defaultProps = {
  articleData: "",
  subjectData: "",
  articleId: "0",
  subjectId: "0"
};

export default HeadLineArticle;
