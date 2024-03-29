import './Cart.css';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from '../CartItem/CartItem';
import { Link } from "react-router-dom";

const Cart = () => {
    const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

    if (totalQuantity === 0) {
        return (
            <div className='noItems'>
                <h1>No hay items en el carrito</h1>
                <Link to='/' className='BotonCheck'>Productos</Link>
            </div>
        )
    }

    return (
        <div className='cartContainer'>
            {cart.map(p => <CartItem key={p.id}{...p} />)}
            <h3>Total: ${total}</h3>
            <div className='botonesContainer'>
                <button onClick={() => clearCart()} className="BotonCheck">Limpiar carrito</button>
                <Link to='/checkout' className="BotonCheck">Checkout</Link>
            </div>
        </div>
    )
}



export default Cart;