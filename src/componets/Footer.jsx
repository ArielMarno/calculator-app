import '../Estilos/Footer.css';
import icon from "../assets/anteojos.png";
import linkedin from "../assets/iconos/linkedin.png";
import github from "../assets/iconos/github.png";
import outlook from "../assets/iconos/email.png";

const Footer = () => {
  return (
    <div>
      <footer id='contacto'>
        <div className='logo-footer'>
        <a href=""><img src={icon}/></a>
        <h2>Calculando</h2>
        </div>
          <div className="social">
            <a href="https://www.linkedin.com/in/ariel-alejandro-marchesano-97729b26b/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="linkedin icon"/></a>
            <a href="https://github.com/ArielMarno?tab=repositories" target="_blank" rel="noopener noreferrer"><img src={github} alt="github icon"/></a>
            <a href="mailto: arielmarno@outlook.com"><img src={outlook} alt="outlook icon"/></a>
          </div>
          <div className="developer">
            <p>Diseño y desarrollo por <span className="name">Ariel Marchesano</span>.</p>
          </div>
      </footer>
    </div>
  )
}

export default Footer;