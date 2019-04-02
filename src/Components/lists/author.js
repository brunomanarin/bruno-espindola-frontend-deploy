import React, { Component } from 'react';



class Author extends Component {
  render() {
    const authorName = this.props.authorName;
    return (
        <div>
            <img className="authorAvatar" alt ="" src="https://brunomanarin.github.io/api/slices/author.jpg"></img>
            <p className="authorName">by {authorName}</p>
        </div>
    );  
  }
}

export default Author;
