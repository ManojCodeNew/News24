import React from 'react'
import './Header.css';
export default function Header() {
    const TodayDateAndTime=new Date();
    
  return (
    <div className='DateTime'>
      {TodayDateAndTime.toString()}
    </div>
  )
}
