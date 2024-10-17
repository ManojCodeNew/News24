import React from 'react';
import NewsCategories from './News_categories';
import ImageSlider from './ImageSlider';
import NewsArea from './NewsArea';
import SlideImgs from './store/SliderImg.json';
import './Main.css';

export default function Main() {

  return (
    <div>
      <NewsCategories />
      <div className="ImageSlider">
        <ImageSlider SlideImages={SlideImgs} />
      </div>
      <NewsArea />
    </div>
  )
}
