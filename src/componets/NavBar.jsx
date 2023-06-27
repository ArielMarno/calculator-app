import icon from "../assets/img/icon.png";
export const NavBar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Calculator App <img src={icon}/></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Inicio</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#agecalculator">Edad</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#porciento">Porcentaje</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#footer">Contacto</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
