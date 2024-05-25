import './Footer.css';
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaSquareXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
      <i><FaFacebook /></i>
      <i><IoLogoInstagram /></i>
      <i><FaSquareXTwitter/></i>
    </div>
  );
}

export default Footer;