import React from 'react';
import "./NavBar.css";
import add from './store/add.jpg';
import { useNavigate } from 'react-router-dom';
// import Header from './Header';
export default function NavBar() {
    const navigate=useNavigate();
    return (
    <>
        <div className='NavBar-container'>
            <div className="NavBar-logo" onClick={()=>navigate('/')}>
                <h1>NEWS<span>24</span></h1>
            </div>
            <div className="NavBar-avertisement">
                <img src={add} alt="advertisement" />
            </div>
        </div>
    </>

    )
}
