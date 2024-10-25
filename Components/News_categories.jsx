import React, { useState } from 'react'
import './News_categories.css'
import SlideImgs from './store/SliderImg.json'
import ImageSlider from './ImageSlider'
import NewsData from './store/News.json'
// import NewsCard from './Elements/NewsCard'
import NewsCard from './Elements/NewsCard'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setNewsDetail } from './Redux/NewsDetailSlice'

export default function News_categories() {
  const [category, setCategory] = useState(null)
  const News_categories = [
    'ರಾಜ್ಯ',
    'ದೇಶ ವಿದೇಶ',
    'ನಮ್ಮ ಕರ್ನಾಟಕ',
    'ಕ್ರೀಡೆ',
    'ಆರ್ಥಿಕ್ಯ',
    'ಆರೋಗ್ಯ',
    'ಕಾನೂನುಮಾಹಿತಿ',
    'ಮನೋರಂಜನೆ',
    'ಶಿಕ್ಷಣ',
    'ಕೃಷಿ',
    'ಮಾರುಕಟ್ಟೆ'
  ]
  const News = NewsData.News


  return (
    <>
      <div className='News_catogaries-Container'>
        <div className='News_catogaries'>
          {News_categories.map((item, index) => {
            return (
              <p
                key={index}
                onClick={() => setCategory(item)}
                className={category === item ? 'clicked' : ''}
              >
                {item}
              </p>
            )
          })}
        </div>
      </div>
      {!category ?
        <div className='ImageSlider'>
          <ImageSlider SlideImages={SlideImgs} />
        </div>
        : 
        <NewsCard category={category}/>
      }

    </>
  )
}
