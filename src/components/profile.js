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
    <div className="profile">
        <h3>This is the profile</h3>
    </div>
  );
}

export default about;