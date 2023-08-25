import React from 'react';
import '../styles/HomeSignin.css';
import Notification from '../core/notification/notification';
import Profile from '../core/profile/profile';
import Logo from '../core/logo/logo';
import { Navbar } from '../core/navbar/navbar';

export const HomeSignin = () => {
  return (
    <>
    <div className="homesigninheader">
        <div className="signinheaderleft">
            <div className="homelogo"> 
                <Logo/>
            </div>
        </div> 
        <div className="signinheadercenter">
            
            <Navbar/>
        </div>
        <div className="signinheaderright">
            <div className="notificationside">
                <Notification/>
            </div>
            <div className="profileside">
                <Profile/>
            </div>
        </div>
    </div>
    <div className="homesignincenter">
        <div className="signincenterleft">
            <h1 className="signintitle"> Unlocking <span className='title-change-color'>exceptional education is now a</span> breeze!</h1>
            <p className="signinmainText">Stay connected with a single platform for daily updates on free, time-limited courses offered by various websites. Unlock a world of learning opportunities!</p>
            <button className="signingetStratedBtn">Get Started</button>
            <button className="signingetFreeTrialBtn">Get Free Trial</button>
        </div>
        <div className="signincenterright">
            <img src="/assets/mainImage.jpg" alt="" className="signinmainImg"/>
        </div>
    </div>
    <div className="homesigninfooter">
        <div className='signincontainer'>
            <div className="signingroup1">
                <div className='signinbox1'>
                    <img src = "assets/Group1.jpg" alt='' className='signingroup1img'/>
                    <h1 className='signinnum1'> 10k+ </h1>
                    <p className='signindef1'> TOTAL COURSES </p>
                </div>
            </div>
            <div className="signingroup2">
                <div className="signinbox2">
                    <img src = "assets/Group2.jpg" alt='' className='signingroup2img'/>
                    <h1 className='signinnum2'> 500+ </h1>
                    <p className='signindef2'> EXPERT TUTORS </p>
                </div>
            </div>
            <div className="signingroup3">
                <div className="signinbox3">
                    <img src = "assets/Group3.jpg" alt='' className='signingroup3img'/>
                    <h1 className='signinnum3'> 300k+ </h1>
                    <p className='signindef3'> USERS </p>
                </div> 
            </div>
        </div>
    </div>
    </>
  )
}