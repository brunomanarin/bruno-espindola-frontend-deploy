import React, { Component } from 'react';


import Author from '../lists/author';

import ImageList from '../lists/imagelist';



class FeaturedArticle extends Component {
  function (articleData, subjectData,color) {
    return(
      <div className="featuredArticleColumn" id="smallerArticle">
          <p className="categoryText" alt="" style={color}>{subjectData}</p>
          <div className = "articleImageWrapper2">
            <ImageList data={articleData.thumbnail}/>
            <div className="readMoreText2">
                <span>Read more</span>
              </div>
          </div>
          <div className="smallerArticleTitles">
            <p>{articleData.title}</p>
          </div>
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

export default FeaturedArticle;
