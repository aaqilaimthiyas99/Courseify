import React from 'react'
import '../styles/PopularCourses.css'
import Logo from '../core/logo/logo'
import Notification from '../core/notification/notification'
import Profile from '../core/profile/profile'

export const PopularCourses = () => {
  return (
    <>
        <div className="pcheader">
            <div className="pcheaderleft">
                <div className="pclogo">
                    <Logo/>
                </div>
            </div>
            <div className="pcheadercenter">
                <div className="pctitle">
                    <h1 className="pctext"> Popular Courses for You </h1>
                </div>
                <button className="allcategorybtn"> All Category </button>
            </div>
            <div className="pcheaderright">
                <div className="pcnotification">
                    <Notification/>
                </div>
                <div className="pcprofile">
                    <Profile/>
                </div>
            </div>
        </div>
        <div className="pclongtext">
            <p className="pclngtxt"> Experience a daily adventure of discovering time-limited, free courses offered by a multitude of websites. Stay ahead of the learning curve! </p>
        </div>
        <div className="coursecontainer">
            <div className="pcline1">
                <div className="pccrse1">
                    <div className="pc1outerbox">
                        <div className="pcimg">
                            <img src = "assets/pcimg1.png" alt = "" className='crse1img'/>
                        </div>
                            <h1 className="crse1desc"> Learn Python Programming in 7 Days </h1>
                        <div className="crse1descbox">
                            <div className="crsehighlight"> 
                                <p className="crse1highlight"> Programming </p>
                            </div>
                            <div className="pc1views">
                                <img src='assets/pcicon.png' alt = ""  className='pcicon'/>
                                <p className="crse1txt"> 400k+ </p>
                            </div>
                            <div className="pc1rating">
                                <img src="assets/pcvector.png" alt="" className="pc1star" />
                                <p className="pc1ratingcount"> 4.8 </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pcline2">

            </div>
            <div className="pcline3">

            </div>
        </div>
    </>
  )
}
