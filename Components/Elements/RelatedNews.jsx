import React from 'react';
import './RelatedNews.css';

export default function NewsCard({Imgsrc,content,index}) {
    return (
        <div>
            <div className='NewsCard-container'>
                <div className='news-Img'>
                    <img 
                    src={Imgsrc} alt={index} 
                    />
                </div>
                <div className='news-content'>
                    <p>{content}...</p>
                </div>
                <div className='newsPostedDate'>10/01/2024</div>
            </div>
        </div>
    )
}
