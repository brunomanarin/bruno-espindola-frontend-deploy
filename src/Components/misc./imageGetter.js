import React, { Component } from 'react'
import PropTypes from 'prop-types'

function articleGetter(articleData) {
  let image
  switch (articleData) {
    case '1':
      image = <img className="" alt="" src="http://localhost:3001/slices/news_01.jpg" />
      break
    case '2':
      image = <img className="" alt="" src="http://localhost:3001/slices/news_02.jpg" />
      break
    case '3':
      image = <img className="" alt="" src="http://localhost:3001/slices/news_03.jpg" />
      break
    case '4':
      image = <img className="" alt="" src="http://localhost:3001/slices/author.jpg" />
      break
    default:
      image = <p alt="notFound">Sorry, the image requested was not found.</p>
  }
  return image
}

class ImageList extends Component {
  render() {
    const { data } = this.props
    return articleGetter(data)
  }
}

ImageList.propTypes = {
  data: PropTypes.string,
}
ImageList.defaultProps = {
  data: '',
}

export default ImageList
