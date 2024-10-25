import React from 'react';
import NewsCategories from './News_categories';
import NewsArea from './NewsArea';
import Breaking_news from './Breaking_news';
import Footer from './Footer';
import './Main.css';


export default function Main() {

  return (
    <div>
      <Breaking_news/>
      <NewsCategories />
      <NewsArea />
      <Footer/>
    </div>
  )
}
