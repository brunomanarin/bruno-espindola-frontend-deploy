import React, { Component } from 'react'

class ImageList extends Component {
  function(articleData) {
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
        image = <p alt="notFound">Sorry, the image requested wasn't found.</p>
    }
    return image
  }

  render() {
    return this.function(this.props.data)
  }
}

export default ImageList
