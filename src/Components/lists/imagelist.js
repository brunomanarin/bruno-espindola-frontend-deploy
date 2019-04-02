import React, { Component } from 'react';




class ImageList extends Component {
    function (articleData) {
        let image;
        switch(articleData){
            case '1':
                image = <img className="" alt="" src="https://brunomanarin.github.io/api/slices/news_01.jpg"></img>
                break;
            case '2':
                image = <img className="" alt="" src="https://brunomanarin.github.io/api/slices/news_02.jpg"></img>
                break;
            case '3':
                image =<img className="" alt="" src="https://brunomanarin.github.io/api/slices/news_03.jpg"></img>
                break;
            case '4':
                image =<img className="" alt="" src="https://brunomanarin.github.io/api/slices/author.jpg"></img>
                break;
            default:
                image = <p alt='notFound'>Sorry, the image requested wasn't found.</p>
        }
        return(
            image
        );
        

    }
    render(){
        return(
            this.function(this.props.data)
        );
    }
}

export default ImageList;