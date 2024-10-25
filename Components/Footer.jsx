import React from 'react'
import './Footer.css';
import Vinyasa from './store/vinyasa.png';
import Facebook from './store/facebook.png';
import Instagram from './store/Instagram.png';
import Website from './store/website.png';
import NewsCard from './Elements/NewsCard';


export default function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="about">
                    <img src={Vinyasa} alt="" />
                    <p className='address'>Smart Tower, 1st Floor, Balmatta new Road, Jyothi, Mangalore - 575 001, Mangalore, India, Karnataka
                    </p>
                    <div className="socialMediaLogo">
                        <a href="https://www.facebook.com/vinyasagroup"><img src={Facebook} alt="facebook logo" /></a>
                        <a href="https://www.instagram.com/vinyasa_creation/"><img src={Instagram} alt="Instagram logo" /></a>
                        <a href="https://vinyasatech.com/"><img src={Website} alt="Website logo" /></a>
                    </div>
                </div>
                <div className="popularNews">
                    <p>Popular News</p>
                </div>
                <div className="copyright">
                    Copyrights &copy; 2024 Vinyasa. All Rights Reserved.
                </div>
            </div>

        </>
    )
}
