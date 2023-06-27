import linkedin from "../assets/img/social/linkedin_.png";
import github from  "../assets/img/social/github_.png";
import outlook from "../assets/img/social/outlook_.png";
import icon from "../assets/img/icon.png";

const Footer = () => {
  return (
    <div className="footer" id="footer">
        <a class="navbar-brand" href="#">Calculator App <img src={icon}/></a>
        <div className="social">
          <a href="https://www.linkedin.com/in/ariel-alejandro-marchesano-97729b26b/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin icon"/></a>
          <a href="https://github.com/ArielMarno?tab=repositories" target="_blank" rel="noopener noreferrer"><img src={github} alt="github icon"/></a>
          <a href="mailto: arielmarno@outlook.com"><img src={outlook} alt="outlook icon"/></a>
        </div>
        <div className="developer">
          <p>Design and develop by <span className="name">Ariel Marno</span>.</p>
        </div>
    </div>
  )
}

export default Footer;