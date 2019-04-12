import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Author from '../misc./author'
import ImageList from '../misc./imageGetter'
import '../../Assets/css/Components/articles.css'

function articleProp(articleData, subjectData, color) {
  return (
    <div className="featuredArticleColumn" id="smallerArticle">
      <p className="categoryText" alt="" style={color}>
        {subjectData}
      </p>
      <div className="articleImageWrapper2">
        <ImageList data={articleData.thumbnail} />
        <div className="readMoreText2">
          <span>Read more</span>
        </div>
      </div>
      <div className="smallerArticleTitles">
        <p>{articleData.title}</p>
      </div>
      <Author authorName={articleData.authorName} />
      <div className="articleParagraph">
        <p>{articleData.description}</p>
      </div>
    </div>
  )
}

class FeaturedArticle extends Component {
  render() {
    const { articleData, subjectData, articleId, subjectId } = this.props
    const color = {
      color: `#${subjectData.color[subjectId]}`,
    }
    return articleProp(articleData.articles[articleId], subjectData.subjects[subjectId], color)
  }
}

FeaturedArticle.propTypes = {
  articleData: PropTypes.object,
  subjectData: PropTypes.object,
  articleId: PropTypes.string,
  subjectId: PropTypes.string,
}
FeaturedArticle.defaultProps = {
  articleData: '',
  subjectData: '',
  articleId: '0',
  subjectId: '0',
}

export default FeaturedArticle
