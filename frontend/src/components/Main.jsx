import React from 'react'
import "../styles/Main.css"

export default function Main() {
  return (
    <>
        
    <div className="mainHeader">
        <div className="mainHeaderLeft">
            <img src="/assets/logo.png" alt="" className="logo" />
        </div>
        <div className="mainHeaderRight">
            <button className="signinBtn">Sign In</button>
            <button className="registerBtn">Register</button>
        </div>
    </div>
    <div className="mainCenter">
        <div className="mainCenterLeft">
            <h1 className="title">Unlocking exceptional education is now a breeze!</h1>
            <p className="mainText">Stay connected with a single platform for daily updates on free, time-limited courses offered by various websites. Unlock a world of learning opportunities!</p>
            <button className="getFreeTrialBtn">Get Free Trial</button>
        </div>
        <div className="mainCenterRight">
            <img src="/assets/mainImage.jpg" alt="" className="mainImg" />
        </div>
    </div>
    <div className="mainFooter"></div>
    
    </>
  )
}
