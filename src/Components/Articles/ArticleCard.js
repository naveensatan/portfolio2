import React from 'react';
import {Link} from 'react-router-dom';

// import ArticlePic from './closeup-diverse-people-joining-their-hands.jpg';

const ArticleCard = ({ articles }) => (
    <>
    {articles.map((article, key)=>(
        <div className="card-body-container" key={key}>
            <div className="card-body">
                <div className="card-body-img">
                    <img src={article.img} alt="card-img"></img>
                </div>
                <div className="card-body-title">
                    <h1>{article.title}</h1>
                </div>
                <div className="card-body-content">
                    <p>{article.content.substring(0, 100)}...</p>
                </div>
                <Link to={`/article/${article.name}`}>
                    <div className ="card-body-button">
                        <p to ={`/article/${article.name}`}>Read</p>
                    </div>
                </Link>
            </div>
        </div>
    ))}
    </>
);

export default ArticleCard