import "./Footerstyles.css";
import { FaInstagram,FaFacebookSquare ,FaTiktok,FaYoutube} from "react-icons/fa";

const FooterSection = () => {
  return (
    <div className="footer_main">
      <div className="footer_content">
        <div className="footer_content_usefullinks">
          <h2>Useful Links</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">Consulation</a>
            </li>
            <li>
              <a href="#">About US</a>
            </li>
            <li></li>
          </ul>
        </div>
        <div className="footer_content_contact">
          <h2>Contact Us</h2>
          <p>Chabhil Chowk</p>

          <p> Kathmandu ,Nepal </p>
          <p>CAPhone: +977 98xxxxxx </p>
          <p> Email: shreedentalcare@gmail.com </p>
          <p> Web: www.shreedentalandcare.com</p>
        </div>
        <div className="footer_content_socialmedia">
           <h2>Follow us On</h2>
           <ul>
            <li><a href=""><FaFacebookSquare color="white" size={20}/></a></li>
            <li><a href=""><FaInstagram color="white" size={20}/></a></li>
            <li><a href=""><FaTiktok color="white" size={20}/></a></li>
            <li><a href=""><FaYoutube color="white" size={20}/></a></li>
           </ul>
        </div>
      </div>
      <div className="footer_copyright">
        <p>
          Copyright &copy; 2023 Shree Dental Care Pvt Ltd . All Right Reserved |
          Design by Thecipherbit
        </p>
      </div>
    </div>
  );
};

export default FooterSection;
