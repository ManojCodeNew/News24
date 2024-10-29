
import React from 'react';
import './Breaking_news.css';

const BreakingNews = () => {
  return (
    <div className="breaking-news-banner">
      <div className="breaking-news-text"><span>Breaking News</span></div>
      <marquee className="breaking-news-content" direction='left'>
        Dubai-bound Akasa Air flight declares emergency, returns to Delhi
      </marquee>
    </div>
  );
};

export default BreakingNews;
