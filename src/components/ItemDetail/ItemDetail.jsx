import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {

    const [quantityAdded, setQuantityAdded] = useState(0);

    const { addItem } = useContext(CartContext);

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity);

        const item = {
            id, name, price
        }

        addItem(item, quantity);
    }

    return (
        <article className="CardItemDetail">
            <header className="HeaderDetail">
                <h2 className="ItemHeaderDetail">
                    {name}
                </h2>
            </header>
            <picture className="ImageContainerDetail">
                <img src={ img } alt={name} className="ItemImgDetail"/>
            </picture>
            <section className="DescriptionSectionDetail">
                <p className="InfoDetail">
                    <b>Categoria:</b> {category}
                </p>
                <p className="InfoDetail">
                    <b>Descripcion:</b> {description}
                </p>
                <p className="InfoDetail">
                    <b>Precio:</b> ${price}
                </p>
            </section>
            <footer className="ItemFooterDetail">
                {
                    quantityAdded > 0 ? (
                        <Link to='/cart' className='Option'> Terminar compar </Link>
                    ) : (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail