import React, { Component } from 'react'
import {connect} from 'react-redux'

// Componentes Importados
import HeadLineArticle from "../Components/article/headlineArticle"
import FeaturedArticle from "../Components/article/featuredArticle"
import DefaultArticle from "../Components/article/defaultArticle"
import "../Assets/css/Pages/homePage.css"

@connect((store) => {
  return{
    article: store.article,
    subject: store.subject
  };
})

class Homepage extends Component {
  render() {
    const {article, subject} = this.props;
        return (
          <div className="mainBody" id="mainBody">
            <div className="line">
              <HeadLineArticle  articleData ={article} articleId = '0' subjectData = {subject} subjectId = '0'/>
              <FeaturedArticle articleData ={article} articleId = '4' subjectData = {subject} subjectId = '2'/>
              <FeaturedArticle articleData ={article} articleId = '5' subjectData = {subject} subjectId = '3'/>
            </div>
            <div className="separator"></div>
            <div className="line">
              <DefaultArticle  articleData ={article} articleId = '1' subjectData = {subject} subjectId = '4'/>
              <DefaultArticle  articleData ={article} articleId = '2' subjectData = {subject} subjectId = '2'/>
              <DefaultArticle  articleData ={article} articleId = '3' subjectData = {subject} subjectId = '3'/>
            </div>
          </div>
        );
    }
  }
export default Homepage;
