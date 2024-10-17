import React from 'react'
import './NewsArea.css';
import NewsData from './store/News.json';
export default function News() {
  const News = NewsData.News;
  return (
    <div className='NewsArea'>
      <div className="Trending-Heading">
        <h2>Trending News</h2>
      </div>

      <div className="Newscards-container">
        {News.map((newsItem, index) => {
          return(
          <div className='NewsCards'>
            <div className="News-Image">
              <img 
              src={newsItem.src} 
              alt={`news image ${index}`}
              className='NewsImage' />
            </div>
            <div className='News-Content'>
              {newsItem.content}
            </div>
          </div>
          )
        })}

      </div>
    </div>
  )
}
