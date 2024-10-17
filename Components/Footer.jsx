import React from 'react'
import './Footer.css';
import Vinyasa from './store/vinyasa.png';
import Facebook from './store/facebook.png';
import Instagram from './store/Instagram.png';
import Website from './store/website.png';


export default function Footer() {
    return (
        <div className='Footer-container'>
            <div className="Footer-about">
                <img src={Vinyasa} alt="Vinyasa Logo" />
                <div className="Footer-address">
                1st floor, Smart Tower, New Balmatta Rd, Jyothi Circle, Mangaluru, Karnataka 575001
                </div>
            <div className="social_media-icons">
            <img src={Facebook} alt="facebook" className='facebook-icon' />
            <img src={Instagram} alt="Instagram" className='Instagram-icon' />
            <img src={Website} alt="Website" className='Website-icon' />

            </div>
            </div>

        </div>
    )
}
