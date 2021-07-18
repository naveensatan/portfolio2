import React from 'react';
import ReactMarkdown from 'react-markdown';
import {Link} from 'react-router-dom';

import ArticleContent from '../Components/Articles/ArticleContent';
import HeaderArticle from '../Components/Header/Header-Article-Body';

const ArticleBody = ({match}) => {
    const name = match.params.name;
    const article = ArticleContent.find(article => article.name === name);
    const otherArticles = ArticleContent.filter(article => article.name !== name);

    return (
        <>
            <HeaderArticle />
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
                <div className="article-body-other">
                    <h3>Other Articles</h3>
                    <ul>
                        {otherArticles.map((otherArticle) => (
                            <li>
                                <Link to = {`/article/${otherArticle.name}`}>{otherArticle.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
)};

export default ArticleBody;