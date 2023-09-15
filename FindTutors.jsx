import Logo from "../core/logo/logo";
import Notification from "../core/notification/notification";
import Profile from "../core/profile/profile";
import SearchBar from "../core/searchBar/searchBar";
import "../styles/FindTutors.css";
// import { HomeCourse } from './HomeCourse'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { JoinAsTutor } from "./JoinAsTutor";

export const FindTutors = () => {
  


  return (
    <>
      <div className="h1">
        <div className="findTutorsHeader">
          <div className="ftheaderleft">
            <div className="ftlogo">
              <Logo />
            </div>
          </div>
          <div className="ftheadercenter">
            <div className="fttitle">
              <h1 className="text1"> Find the Right Tutors for You </h1>
            </div>
            <div className="ftsearchbar">
              <SearchBar />
            </div>
          </div>
          <div className="ftheaderright">
            <div className="ftnotification">
              <Notification />
            </div>
            <div className="ftprofile">
              <Profile />
            </div>
          </div>
        </div>

        <div class="imageArea">
          <div className="group1">
            <div className="box1">
              <img src="/assets/ftimg1.png" alt="" className="image1" />
              <div className="imgtxt1">Malala Yousafzai</div>
              
              <div className="mixed">
                <div className="imgtxt2">Expert in Sociology </div>
                <img src="/assets/pcvector.png" alt="" className="pcvector" />
                <div className="imgtxt3">$8 </div>
              </div>
            </div>
          </div>

          <div className="group2">
            <div className="box2">
              <img src="/assets/ftimg2.png" alt="" className="image2" />
              <div className="imgtxt1">Jonathan Doe </div>
              <div className="mixed">
                <div className="imgtxt2">Expert in Sociology </div>
                <img src="/assets/pcvector.png" alt="" className="pcvector" />
                <div className="imgtxt3">$8 </div>
              </div>
            </div>
          </div>
          <div className="group3">
            <div className="box3">
              <img src="/assets/ftimg3.png" alt="" className="image3" />
              <div className="imgtxt1"> Katherine Johnson</div>
              <div className="mixed">
                <div className="imgtxt2">Expert in Sociology </div>
                <img src="/assets/pcvector.png" alt="" className="pcvector" />
                <div className="imgtxt3">$8 </div>
              </div>
            </div>
          </div>
        </div>

        {/* function Homepage() {
    // const history = useHistory();
  
    const coursesPage =()=> {
        Homepage.push("/HomeCourse")
    }
    
     return( */}

        <div className="buttonClass">
          <button className="button1">View More</button>
        </div>

        {/* ) */}
        <div className="footer">
          <img src="/assets/hand.png" alt="" className="image4" />

          <div className="txt1">Become a Tutor Today</div>
          <div className="txt2">
            Embark on an educational journey with <br />
            Courseify Tutors Marketplace.
          </div>
          <Link to={'/joinastutor'}>
            <div>
              <button className="button2">Get Started</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default FindTutors;
