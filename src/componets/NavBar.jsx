import '../Estilos/NavBar.css';
import icon from "../assets/anteojos.png";
const NavBar = () => {
    return (
        <div>
            <nav>
                <div className="logo">
                    <a href=""><img src={icon}/></a>
                    <h1>Calculando</h1>
                </div>
                <div className="links">
                    <a href="#edad">EDAD</a>
                    <a href="#porcentaje">PORCENTAJE</a>
                    <a href="#contacto">CONTACTO</a>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;