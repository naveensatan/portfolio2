import React from 'react';
import ReactMarkdown from 'react-markdown';

import ArticleContent from '../Components/Articles/ArticleContent';

const ArticleBody = ({match}) => {
    const name = match.params.name;
    const article = ArticleContent.find(article => article.name === name);

    return (
    <div className="article-body-container">
        <div className="article-body-title">
            <h1>{article.title}</h1>
        </div>
        <div className="article-body-content">
            <ReactMarkdown>
                {article.content}
            </ReactMarkdown>
        </div>
        <div className="article-body-date">
            <p>{article.date}</p>
        </div>
    </div>
)};

export default ArticleBody;