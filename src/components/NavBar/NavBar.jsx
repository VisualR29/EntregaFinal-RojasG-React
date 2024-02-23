import CartWidget from "./CartWidget";
import Buttons from "./Buttons";
import { NavLink, Link } from "react-router-dom";
import logo from "./../../img/logo.png"

const NavBar = () => {

    return (
        <nav className="navbar Navbar">
            <Link to='/'>
                <img src={logo} alt="Skilling Tec logo"/>
            </Link>
            <div className="Categories">
                <NavLink to={'/category/cursos'} className={({isActive})=>isActive ? 'ActiveOption' : 'Option'}><Buttons name='Cursos'/></NavLink>
                <NavLink to={'/category/certificado'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><Buttons name='Certificados' /></NavLink>
                <NavLink to={'/category/bootcamp'} className={({ isActive }) => isActive ? 'ActiveOption' : 'Option'}><Buttons name='Bootcamp' /></NavLink>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar;