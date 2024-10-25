import React, { useEffect } from 'react'
import './NewsDetail.css';
import NewsData from './store/News.json';
import { useSelector } from 'react-redux';
import NewsCard from './Elements/NewsCard';
import { useNavigate, NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setNewsDetail } from './Redux/NewsDetailSlice'


export default function NewsDetail() {
    const newsId = useSelector((state) => state.news.newsId);
    // const navigate = useNavigate();
    // newsId===null?navigate("/"):alert("hai");
    const ClickedNews = NewsData.News[newsId] ;
    const dispatch = useDispatch();

    return (
        <>

            <div className='NewsDetail-container' id='NewsDetailsContainer'>
                <div className="NewsDetail-mainContent">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorum consequatur aliquid laudantium deleniti iusto numquam ab sequi suscipit unde voluptates, id quaerat quia possimus voluptas repellat fugiat impedit ut!</h2>
                    <div className="newsUploaded-Details">
                        <p>{ClickedNews.gener}</p>
                        <p>Date and Time</p>
                    </div>
                </div>
                <div className="NewsImg">
                    <img src={ClickedNews.src} alt=" news image " />
                </div>

                <div className="NewsDetail-subContent">
                    <p>{ClickedNews.content}
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. At consequatur reprehenderit eius id iste ad temporibus perspiciatis. Nostrum tempore beatae, eos, ad quia molestias reiciendis praesentium deleniti repellat, non architecto?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam dolorem repellat unde earum! Tempora, cumque! Hic tempore cupiditate sit rem a, quis quod temporibus architecto qui quasi voluptas optio consequatur?
                        Illum explicabo harum error quasi commodi consequatur sapiente aliquid eaque deleniti consequuntur laudantium voluptatem sunt quos beatae, facilis praesentium corrupti repellat amet magni aperiam ipsa rerum delectus nihil. Quas, ipsa.
                        Ea nisi odit esse numquam tempora quasi optio, maxime consequuntur? In numquam velit quas incidunt recusandae illo necessitatibus, quisquam aliquam? Saepe ad dicta quod. Pariatur harum ducimus cum consectetur at?
                        Earum aperiam dolor delectus, facere adipisci eveniet sunt eligendi voluptatem libero id quisquam nobis soluta explicabo ad, similique nisi fugiat perspiciatis ullam! Natus, nulla! In cupiditate quaerat fuga similique obcaecati?
                        Eum harum quam expedita iste at nulla illo repellendus alias a placeat nam rem est, magni beatae eius laboriosam architecto ab incidunt temporibus quidem unde, nostrum ducimus minus quasi. Iure.
                    </p>
                </div>


            </div>
            <div className="relatedNews-container">
                <p className='relatedNews-title'>Related News</p>
                <div className="relatedNews">
                    {
                        NewsData.News.map((item, index) => {
                            if (ClickedNews.gener === item.gener && item != ClickedNews) {


                                return (

                                    <NavLink to='/NewsDetails' className='NavigationLink'  // Stote clicked News detail on redux store
                                        onClick={() => {
                                            dispatch(setNewsDetail({ newsId: index }));
                                            window.location.href = "#NewsDetailsContainer";
                                        }
                                        }> 
                                        {/* <NewsCard Imgsrc={item.src} content={item.content} index={index} /> */}
                                        </NavLink>


                                )
                            } else {
                                return null;
                            }
                        })
                    }
                </div>
            </div>
        </>
    )
}
