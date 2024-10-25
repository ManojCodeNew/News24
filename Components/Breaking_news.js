import React from 'react';
import "./Breaking_news.css";

export default function Breaking_news() {
    return (
        <div className='Breaking_news-container'>
            <div className='Breaking_news-heading'>
                Breaking News</div>
            <div className='Breaking_news-content'>
            {/* eslint-disable-next-line */}
                <marquee direction="Left"> Another bomb threat: Bengaluru-bound Akasa Air flight declares emergency, returns to Delhi </marquee>
            </div>

        </div>
    )
}
