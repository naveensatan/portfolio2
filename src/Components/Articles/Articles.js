import React from 'react';

import ArticleCard from './ArticleCard';
import ArticleContent from './ArticleContent';

const Articles = () => (
    <>
        <div id="articles"></div>
        <div>
                <h2 className="section-title">Articles</h2>
        </div>
        <div className="article-card-section">
            <ArticleCard articles={ArticleContent}/>
        </div>
    </>
);

export default Articles