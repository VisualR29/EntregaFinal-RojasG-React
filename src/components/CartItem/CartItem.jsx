import './CartItem.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"

const CartItem = ({ id, name, quantity, price }) => {
    const { removeItem } = useContext(CartContext);

    return (
        <div className="cartItem">
            <h2>{name}</h2>
            <p>cantidad: {quantity}</p>
            <p>subtotal: {quantity * price}</p>
            <button onClick={() => removeItem(id)}> Eliminar</button>
            
        </div>
    )
}

export default CartItem;