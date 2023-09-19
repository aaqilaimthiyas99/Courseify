import "./about.css";
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container,Row,Col } from 'react-bootstrap'; 
import Logo from "../assets/Logo.png"
import Bell from "../assets/Vector.png"
import profile from "../assets/Mask group.png"
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faPhoneAlt,faBell} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'



function about() {
  return (
    <div className="aboutus">
        <Container>
            <Row>
                <Col lg="1" id="hader_logo">
                    <img id="image" alt="img" src={Logo}></img>
                </Col>
                <Col lg="10" id="header">
                    <center>
                    <br/>
                    <br/>
                    <h5>About us</h5>
                    </center>
                    
                </Col>
                <Col lg="1" d="hader_profile">
                    <Row>
                        <Col lg="6" id="bell" >
                            <FontAwesomeIcon icon={faBell}/>  
                        </Col>
                        <Col lg="6">
                            <img id="image_1" alt="img" src={profile}></img>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <br/>
            <br/>
            <Row>
                <Col lg="7" >
                    <p>We are a group of 3rd-year undergraduates from the Department of Computing and Information Systems at the Faculty of Computing, Sabaragamuwa University of Sri Lanka. As part of our mini project, we have created this platform to provide daily updates on courses that are available for free for a limited time through various course providers. Our website categorizes these courses based on subjects, making it easier for users to find courses that align with their interests. Each course is linked to the organization's website where it is offered for free, allowing users to access the course directly. 
We are dedicated to continuously improving this platform and plan to introduce additional special features in the future. If you have any questions or encounter any issues, please feel free to reach out to us using the contact details provided below. Thank you for visiting our website, and we hope you find it valuable in your pursuit of knowledge.</p>
                    <Row className="social">
                        <Col className="social_media emai">
                            <h2>
                                <FontAwesomeIcon icon={faEnvelope}/>
                                
                            </h2>
                        </Col >
                        <Col className="social_media phone">
                            <h2>
                                <FontAwesomeIcon icon={faPhoneAlt} />
                            </h2>
                        </Col>
                        <Col className="social_media linkedin">
                            <h2>
                                <FontAwesomeIcon icon={faLinkedin} />
                               
                            </h2>
                        </Col>
                    </Row>
                </Col>
                <Col lg="5">
                    <Row>
                        <Col>
                            <div className="a-card">
                                <h2>10k+</h2>
                                <p>Total Coused</p>
                            </div>
                            
                        </Col>
                        <Col>
                            <div className="a-card">
                                <h2>500+</h2>
                                <p>Expect Tutors</p>
                            </div>
                           
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="a-card">
                                <h2>300k+</h2>
                                <p>Users</p>
                            </div>
                           
                        </Col>
                        <Col>
                            <div className="a-card">
                                <h2>50+</h2>
                                <p>Roadmaps</p>
                            </div>
                            
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>

      
    </div>
  );
}

export default about;