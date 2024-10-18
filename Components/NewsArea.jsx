import React from 'react'
import './NewsArea.css';
import NewsData from './store/News.json';
import NewsCard from './Elements/NewsCard';
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
            <NewsCard Imgsrc={newsItem.src} content={newsItem.content} index={index}/>
          )
        })}

      </div>
    </div>
  )
}
