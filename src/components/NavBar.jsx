import CartWidget from "./CartWidget";
import logo from "./../img/logo.png"

function NavBar() {

    return (
        <nav className="navbar Navbar">
            <div className="navbar-brand logo">
                <img src={logo} alt="Skilling Tec logo"/>
            </div>
            <div className="navbar-menu">
                <ul className="navbar-start">
                    <li className="navbar-item"><button>Cursos</button></li>
                    <li className="navbar-item"><button>Certificados</button></li>
                    <li className="navbar-item"><button>Bootcamp</button></li>
                </ul>
                <div className="navbar-end">
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;