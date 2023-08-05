import React from 'react'
import '../styles/HomeCourse.css'
import Logo from '../core/logo/logo'
import Notification from '../core/notification/notification'
import Profile from '../core/profile/profile'
import SearchBar from '../core/searchBar/searchBar'
import {FaSearch} from "react-icons/fa"

export default function HomeCourse() {
  return (
    <>
    <div className="homecourseHeader">
        <div className="hcheaderleft">
            <div className="hclogo">
                <Logo/>
            </div>
        </div>
        <div className="hcheadercenter">
            <div className="hctitile">

            </div>
            <div className="hcsearchbar">
                <SearchBar/>
            </div>
        </div>
        <div className="hcheaderright">
            <div className="hcnotification">
                <Notification/>
            </div>
            <div className="hcprofile">
                <Profile/>
            </div>
        </div>
    </div>
    <div className="longsearchbar">
        <FaSearch id='serachIcon2'/>
        <input type='search' placeholder='Search for Anything' className='SearchBox2-main'/>
    </div>
    <div className="hclistofcourses">
        <div className="hcline1">
            <div className="firstcourse">
                <div className="boxc1">
                    <div className="vector1">
                        <img src="/assets/Vector1.jpg" alt="" className="c1" />
                    </div>
                </div>
                <div className="ctext1">
                    <h1 className='coursetext1'> Design & Development </h1>
                    <p className='subtext1'> 250+ courses available </p>
                </div>
            </div>
            <div className="secondcourse">
                <div className="boxc2">
                    <div className="vector2">
                        <img src="/assets/Vector2.jpg" alt="" className="c2" />
                    </div>
                </div>
                <div className="ctext2">
                    <h1 className='coursetext2'> Business & Consulting </h1>
                    <p className='subtext2'> 170+ courses available </p>
                </div>
            </div>
            <div className="thirdcourse">
                <div className="boxc3">
                    <div className="vector3">
                        <img src="/assets/Vector3.jpg" alt="" className="c3" />
                    </div>
                </div>
                <div className="ctext3">
                    <h1 className='coursetext3'> Marketing & Communication </h1>
                    <p className='subtext3'> 300+ courses available </p>
                </div>
            </div>
        </div>
        <div className="hcline2">
            <div className="fourthcourse">
                <div className="boxc4">
                    <div className="vector4">
                        <img src="/assets/Vector4.jpg" alt="" className="c4" />
                    </div>
                </div>
                <div className="ctext4">
                    <h1 className='coursetext4'> Technology & Programming </h1>
                    <p className='subtext4'> 400+ courses available </p>
                </div>
            </div>
            <div className="fifthcourse">
                <div className="boxc5">
                    <div className="vector5">
                        <img src="/assets/Vector5.jpg" alt="" className="c5" />
                    </div>
                </div>
                <div className="ctext5">
                    <h1 className='coursetext5'> Finance Management </h1>
                    <p className='subtext5'> 300+ courses available </p>
                </div>
            </div>
            <div className="sixthcourse">
                <div className="boxc6">
                    <div className="vector6">
                        <img src="/assets/Vector6.jpg" alt="" className="c6" />
                    </div>
                </div>
                <div className="ctext6">
                    <h1 className='coursetext6'> Health & Wellness </h1>
                    <p className='subtext6'> 300+ courses available </p>
                </div>
            </div>
        </div>
        <div className="hcline3">
        <div className="seventhcourse">
                <div className="boxc7">
                    <div className="vector7">
                        <img src="/assets/Vector7.jpg" alt="" className="c7" />
                    </div>
                </div>
                <div className="ctext7">
                    <h1 className='coursetext7'> Digital Marketing </h1>
                    <p className='subtext7'> 150+ courses available </p>
                </div>
            </div>
            <div className="eighthcourse">
                <div className="boxc8">
                    <div className="vector8">
                        <img src="/assets/Vector8.jpg" alt="" className="c8" />
                    </div>
                </div>
                <div className="ctext8">
                    <h1 className='coursetext8'> Science & Engineering </h1>
                    <p className='subtext8'> 350+ courses available </p>
                </div>
            </div>
            <div className="ninthcourse">
                <div className="boxc9">
                    <div className="vector9">
                        <img src="/assets/Vector9.jpg" alt="" className="c9" />
                    </div>
                </div>
                <div className="ctext9">
                    <h1 className='coursetext9'> Self Development</h1>
                    <p className='subtext9'> 50+ courses available </p>
                </div>
            </div>

        </div>
    </div>
    

    </>
  )
}
