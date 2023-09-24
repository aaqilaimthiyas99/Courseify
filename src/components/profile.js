import "./profile.css";
import 'bootstrap/dist/css/bootstrap.min.css';  
import { Container,Row,Col } from 'react-bootstrap'; 
import Logo from "../assets/Logo.png"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import profileimg from "../assets/Mask group.png"
import course1 from "../assets/Learn Python.png"
import course2 from "../assets/Course2.png"
import course3 from "../assets/Course3.png"
import course4 from "../assets/Course4.png"
// import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faLinkedin } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope, faPhoneAlt,faBell} from '@fortawesome/free-solid-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'



function profile() {
  return (
    <div className="profile">


        <Container>
          <Row>
                <Col lg="1" id="hader_logo">
                    <img id="image" alt="img" src={Logo}></img>
                </Col>
                <Col lg="10" id="header">
                    <center>
                    <br/>
                    <br/>
                    <h5>Dianne Russell</h5>
                    </center>     
                </Col>
          </Row>
          <Row>
              <Col lg="6" id="profile_detail">
                <Form>
                  <Row id="form-lable">
                      <Col lg="4" id="lable">
                        <Form.Label>Profile Picture</Form.Label>
                      </Col>
                      <Col lg="8" id="Control">
                        <img id="image_1" alt="img" src={profileimg}></img>
                      </Col>
                  </Row>
                  <Row id="form-lable">
                      <Col lg="4" id="lable">
                        <Form.Label>Full Name</Form.Label>
                      </Col>
                      <Col lg="8" id="Control">
                        <Form.Control type="email" placeholder="Enter Full Name" />
                      </Col>
                  </Row>
                  <Row id="form-lable">
                      <Col lg="4" id="lable">
                        <Form.Label>Email</Form.Label>
                      </Col>
                      <Col lg="8" id="Control">
                        <Form.Control type="email" placeholder="Enter Email" />
                      </Col>
                  </Row>
                  <Row id="form-lable">
                      <Col lg="4" id="lable">
                        <Form.Label>Areas of Interest</Form.Label>
                      </Col>
                      <Col lg="8" id="Control">
                        <Form.Control type="email" placeholder="Enter Areas of Interest" />
                      </Col>
                  </Row>
                  <Row id="form-lable">
                      <Col lg="4" id="lable">
                        <Form.Label>Reviews</Form.Label>
                      </Col>
                      <Col lg="8" id="Control">
                        <Form.Control type="email" placeholder="Enter Reviews" />
                      </Col>
                  </Row>
                  
                </Form>
              </Col>

              <Col lg="6" id="courses">
                <h6>Courses Enrolled</h6>
                <br/>
                
                <Row>
                  <Col lg="6" id="cource-img">
                    <img id="image-course" alt="img" src={course1}></img>
                  </Col>
                  <Col lg="6" id="cource-img">
                    <img id="image-course" alt="img" src={course2}></img>
                  </Col>
                </Row>
                <Row>
                <Col lg="6" id="cource-img">
                    <img id="image-course" alt="img" src={course3}></img>
                  </Col>
                  <Col lg="6" id="cource-img">
                    <img id="image-course" alt="img" src={course4}></img>
                  </Col>
                </Row>
              </Col>
          </Row>
          <Row id="row-btn">
            <Button id="btn" type="submit">Save Changes</Button>
          </Row>
        </Container>
    </div>
  );
}

export default profile;