import { useState } from "react";
import './ItemCount.css'

const ItemCount = ({ stock, initial, onAdd }) => {
    const [quantity, setQuantity] = useState(initial);

    const increment = () => {
        if (quantity < stock) {
            setQuantity(quantity + 1);
        }
    }

    const decrement = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div className="Counter">
            <div className="Controls">
                <button className="Button button is-primary is-responsive" onClick={decrement} disabled={quantity <= 1}>-</button>
                <h4 className="Number ">{quantity}</h4>
                <button className="Button button is-primary is-responsive" onClick={increment} disabled={quantity >= stock}>+</button>
            </div>
            <div>
                <button className="AddToCartButton" onClick={() => onAdd(quantity)} disabled={stock === 0}>
                    {stock === 0 ? "Sin cupo" : "Agregar al carrito"}
                </button>
            </div>
        </div>
    )
}

export default ItemCount;