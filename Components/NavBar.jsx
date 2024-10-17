import React from 'react';
import "./NavBar.css";
import add from './store/add.jpg';
// import Header from './Header';
export default function NavBar() {
    return (
    <>
        <div className='NavBar-container '>
            <div className="NavBar-logo">
                <h1>NEWS<span>24</span></h1>
            </div>
            <div className="NavBar-avertisement ">
                <img src={add} alt="advertisement" />
            </div>
        </div>
    </>

    )
}
