import React, { Component } from 'react'
import {connect} from 'react-redux'

import DefaultArticle from "../Components/article/defaultArticle"
import "../Assets/css/Pages/filter.css"

@connect((store) => {
    return{
      article: store.article,
      subject: store.subject
    };
  })
  
class Filter extends Component {
    function (subjectId) {
        const {article, subject} = this.props;
        switch(subjectId){
            case 0:{
                return(
                    <div className="line">
                        <DefaultArticle  articleData ={article} articleId = '0' subjectData = {subject} subjectId = '0'/>
                        <DefaultArticle  articleData ={article} articleId = '6' subjectData = {subject} subjectId = '0'/>
                        <DefaultArticle  articleData ={article} articleId = '6' subjectData = {subject} subjectId = '0'/>
                        <DefaultArticle  articleData ={article} articleId = '6' subjectData = {subject} subjectId = '0'/>
                    </div>
                );
            }
            case 1:{
                return(
                    <div className="line">
                        <DefaultArticle  articleData ={article} articleId = '6' subjectData = {subject} subjectId = '1'/>
                        <DefaultArticle  articleData ={article} articleId = '6' subjectData = {subject} subjectId = '1'/>
                        <DefaultArticle  articleData ={article} articleId = '6' subjectData = {subject} subjectId = '1'/>
                    </div>
                );
            }
            case 2:{
                return(
                    <div className="line">
                        <DefaultArticle  articleData ={article} articleId = '3' subjectData = {subject} subjectId = '2'/>
                        <DefaultArticle  articleData ={article} articleId = '5' subjectData = {subject} subjectId = '2'/>
                        <DefaultArticle  articleData ={article} articleId = '6' subjectData = {subject} subjectId = '2'/>
                        <DefaultArticle  articleData ={article} articleId = '6' subjectData = {subject} subjectId = '2'/>
                    </div>
                );
            }
            case 3:{
                return(
                    <div className="line">
                        <DefaultArticle  articleData ={article} articleId = '2' subjectData = {subject} subjectId = '3'/>
                        <DefaultArticle  articleData ={article} articleId = '5' subjectData = {subject} subjectId = '3'/>
                        <DefaultArticle  articleData ={article} articleId = '6' subjectData = {subject} subjectId = '3'/>
                        <DefaultArticle  articleData ={article} articleId = '6' subjectData = {subject} subjectId = '3'/>
                    </div>
                );
            }
            case 4:{
                return(
                    <div className="line">
                        <DefaultArticle  articleData ={article} articleId = '1' subjectData = {subject} subjectId = '4'/>
                        <DefaultArticle  articleData ={article} articleId = '6' subjectData = {subject} subjectId = '4'/>
                        <DefaultArticle  articleData ={article} articleId = '6' subjectData = {subject} subjectId = '4'/>
                        <DefaultArticle  articleData ={article} articleId = '6' subjectData = {subject} subjectId = '4'/>
                    </div>
                );
            }
            default: {
                return(
                    <div className="line">
                        your search didn't match any criteria
                    </div>    
                );
            }

        }
        
    }

    backToMenu(){
        this.props.filter(null);
    }

  render() {
    return (
        <div className = "mainBody">
            <div className= "filterBody">
                <div className= "line" id = "filterTitle">
                </div>
                {this.function(this.props.subjectId)}
                <div className= "line" id = "filterTitle">
                </div>
                <div>
                    <button className = "filterButton" onClick = {this.backToMenu.bind(this)}> Back to Menu </button>
                </div>
            </div>
        </div>
    );
  }
}

export default Filter;
