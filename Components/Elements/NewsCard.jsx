import React from 'react'
import './NewsCard.css'
import NewsData from '../store/News.json';
import { useDispatch } from 'react-redux';
import { setNewsDetail } from '../Redux/NewsDetailSlice';
import { NavLink } from 'react-router-dom';
export default function NewsCard({ category }) {
    const NewsContainer = NewsData.News.filter(item => item.gener === category);
    const FirstNews = NewsContainer[0];

    const dispatch = useDispatch();

    return (
        <div>
            {category && (
                <div class="newsCard-contaner">
                    <NavLink to='/NewsDetails' className="card1"
                        // Stote clicked News detail on redux store
                        onClick={() => {
                            dispatch(setNewsDetail({ newsId: 0 }))
                        }}>
                        <div >
                            <img src={FirstNews.src} alt="" />
                            <div className="content-container-large">
                                <p className="category-large">{FirstNews.gener}</p>
                                <p className="headline-large">{FirstNews.content.slice(0, 40)}...</p>
                                <p className="date-large">10/01/2003</p>
                            </div>
                        </div>
                    </NavLink>
                    {NewsContainer.length > 1 && (
                        NewsContainer.slice(1).map((item, index) => {
                            return (
                                <NavLink to='/NewsDetails' className="NavigationLink"
                                // Stote clicked News detail on redux store
                                onClick={() => {
                                    dispatch(setNewsDetail({ newsId: index+1 }))
                                }}>
                            <div className="card2" key={index}>
                                <img src={item.src} alt="" />
                                <div className="content-container">
                                    <p className="category">{item.gener}</p>
                                    <p className="headline">{item.content.slice(0, 45)}...</p>
                                    <p className="date">10/01/2004</p>
                                </div>
                            </div>
                            </NavLink>
                            )
                        })

                    )
                    }




                </div>
            )
            }

        </div >
    )
}
