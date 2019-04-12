import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Author from '../misc./author'
import '../../Assets/css/Components/articles.css'

function defaultProp(articleData, subjectData, color) {
  return (
    <div className="defaultArticleColumn" id="firstArticleSecondRow">
      <p className="categoryText" style={color}>
        {subjectData}
      </p>
      <p className="smallerArticleTitles">{articleData.title}</p>
      <Author authorName={articleData.authorName} />
      <div className="articleParagraph">
        <p>{articleData.description}</p>
      </div>
    </div>
  )
}

class DefaultArticle extends Component {
  render() {
    const { articleData, subjectData, articleId, subjectId } = this.props
    const color = {
      color: `#${subjectData.color[subjectId]}`,
    }
    return defaultProp(articleData.articles[articleId], subjectData.subjects[subjectId], color)
  }
}

DefaultArticle.propTypes = {
  articleData: PropTypes.string,
  subjectData: PropTypes.string,
  articleId: PropTypes.number,
  subjectId: PropTypes.number,
}
DefaultArticle.defaultProps = {
  articleData: '',
  subjectData: '',
  articleId: '0',
  subjectId: '0',
}

export default DefaultArticle
