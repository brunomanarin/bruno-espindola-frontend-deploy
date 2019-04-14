import React, { Component } from "react";
import PropTypes from "prop-types";

function imageGetter(articleData) {
  if (articleData === "4") {
    return "https://brunomanarin.github.io/api/slices/author.jpg";
  }
  return `https://brunomanarin.github.io/api/slices/news_0${articleData}.jpg`;
}
function articleGetter(articleData) {
  return <img className="" alt="" src={imageGetter(articleData)} />;
}

class ImageList extends Component {
  render() {
    const { data } = this.props;
    return articleGetter(data);
  }
}

ImageList.propTypes = {
  data: PropTypes.string
};
ImageList.defaultProps = {
  data: ""
};

export default ImageList;
