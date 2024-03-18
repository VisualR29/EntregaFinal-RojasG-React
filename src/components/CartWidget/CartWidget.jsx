import "./CartWidget.css"
import { FaCartArrowDown } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalQuantity } = useContext(CartContext);

    return (
        <Link to='/cart' className="CartWidget" style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
            <div className="ContenedorCarrito">
                <FaCartArrowDown className="ImagenCarrito" />
                <span className="CantidadCarrito">
                {totalQuantity}
                </span>
            </div>
        </Link>
    )
}


export default CartWidget;