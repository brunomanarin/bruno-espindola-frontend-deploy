import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Author from '../misc./author'
import '../../Assets/css/Components/articles.css'

function defaultProp(articleData, subjectData, color) {
  return (
    <div className="mainBody__defaultArticleColumn">
      <p className="mainBody__categoryText" style={color}>
        {subjectData}
      </p>
      <p className="mainBody__smallerArticleTitles">{articleData.title}</p>
      <Author authorName={articleData.authorName} />
      <div className="mainBody__articleParagraph">
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
  articleData: PropTypes.object,
  subjectData: PropTypes.object,
  articleId: PropTypes.string,
  subjectId: PropTypes.string,
}
DefaultArticle.defaultProps = {
  articleData: '',
  subjectData: '',
  articleId: '0',
  subjectId: '0',
}

export default DefaultArticle
