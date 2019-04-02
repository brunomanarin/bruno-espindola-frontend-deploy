import React, { Component } from 'react';
import Author from '../lists/author'


class DefaultArticle extends Component {
  function (articleData, subjectData, color) {
    return (
      <div className="defaultArticleColumn" id="firstArticleSecondRow">
            <p className="categoryText" style= {color}>{subjectData}</p>
            <p className="smallerArticleTitles">{articleData.title}</p>
            <Author authorName = {articleData.authorName}/>
            <div className="articleParagraph">
                  <p>{articleData.description}</p>
            </div>             
        </div>
    );
  }
  render() {
    const {articleData, subjectData, articleId, subjectId} = this.props;
    const color  = {
      color: '#' + subjectData.color[subjectId]
    }
    return (
        this.function(articleData.articles[articleId], subjectData.subjects[subjectId], color)
    );
  }
}

export default DefaultArticle;
