import CartWidget from "./CartWidget";
import Buttons from "./Buttons";
import logo from "./../../img/logo.png"

function NavBar() {

    return (
        <nav className="navbar Navbar">
            <div className="navbar-brand logo">
                <img src={logo} alt="Skilling Tec logo"/>
            </div>
            <div className="navbar-menu">
                <ul className="navbar-start">
                    <Buttons name={"Cursos"}/>
                    <Buttons name={"Certificados"}/>
                    <Buttons name={"Bootcamp"}/>
                </ul>
                <div className="navbar-end">
                    <CartWidget />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;