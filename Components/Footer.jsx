import React from 'react'
import './Footer.css';
import Vinyasa from './store/vinyasa.png';
import Facebook from './store/facebook.png';
import Instagram from './store/Instagram.png';
import Website from './store/website.png';
import NewsCard from './Elements/NewsCard';
import FooterNews from './Elements/FooterNews';
import { NavLink } from 'react-router-dom';

export default function Footer() {
    return (
        <>
            <div className="footer-container">
                <div className="footer-sections">
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
                        <h3>Popular News</h3>
                        <FooterNews/>
                    </div>

                    <div className="categories">
                        <h3>Categories</h3>
                        <div className="items">
                            <p>ರಾಜ್ಯ</p>
                            <p>ದೇಶ ವಿದೇಶ</p>
                            <p>ನಮ್ಮ ಕರ್ನಾಟಕ</p>
                            <p>ಕ್ರೀಡೆ</p>
                            <p>ಆರ್ಥಿಕ್ಯ</p>
                            <a href="http://localhost:3001/"><p>Admin Panel</p></a>

                        </div>
                    </div>
                </div>

                <div className="copyright">
                    Copyrights &copy; 2024 Vinyasa. All Rights Reserved.
                </div>
            </div>

        </>
    )
}
