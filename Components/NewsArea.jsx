import React from 'react'
import './NewsArea.css';
import NewsData from './store/News.json';
// import NewsCard from './Elements/NewsCard';
import NewsCard from './Elements/NewsCard';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNewsDetail } from './Redux/NewsDetailSlice'

export default function News() {
  console.log(NewsData);
  
  // const News = NewsData.News;
  // const dispatch = useDispatch();
  return (
    <div className='NewsArea'>
      <div className="Trending-Heading">
        <h2>Trending News</h2>
      </div>


      <div className="Newscards-container">
        <NewsCard category="trending" />


      </div>
    </div>
  )
}
