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
            <h1 className="title"> Unlocking <span className='title-color-change'>exceptional education is now a</span> breeze!</h1>
            <p className="mainText">Stay connected with a single platform for daily updates on free, time-limited courses offered by various websites. Unlock a world of learning opportunities!</p>
            <button className="getFreeTrialBtn">Get Free Trial</button>
        </div>
        <div className="mainCenterRight">
            <img src="/assets/mainImage.jpg" alt="" className="mainImg" />
        </div>
    </div>
    <div className="mainFooter">
        <div className='container'>
            <div className="group1">
                <div className='box1'>
                    <img src = "assets/Group1.jpg" alt='' className='group1img'/>
                    <h1 className='num1'> 10k+ </h1>
                    <p className='def1'> TOTAL COURSES </p>
                </div>
            </div>
            <div className="group2">
                <div className="box2">
                    <img src = "assets/Group2.jpg" alt='' className='group2img'/>
                    <h1 className='num2'> 500+ </h1>
                    <p className='def2'> EXPERT TUTORS </p>
                </div>
            </div>
            <div className="group3">
                <div className="box3">
                    <img src = "assets/Group3.jpg" alt='' className='group3img'/>
                    <h1 className='num3'> 300k+ </h1>
                    <p className='def3'> USERS </p>
                </div> 
            </div>
        </div>
    </div>
    </>
  )
}
