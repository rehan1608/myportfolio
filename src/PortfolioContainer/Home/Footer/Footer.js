import React from 'react'
import './Footer.css'
import homeFooter from "../../../assets/Home/shape-bg.png"
export default function Footer(){
    return (
        <div className='footer-container'>
            <div className='footer-parent'>
                <img src={homeFooter} alt='No internet connection'/>
            </div>
        </div>
    );
}