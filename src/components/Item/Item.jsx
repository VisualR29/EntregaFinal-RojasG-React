import './Item.css'
import Buttons from '../NavBar/Buttons';
import { Link } from 'react-router-dom';

const Item = ({ id, name, img, price, stock }) => {
    return (
        <article className="CardItem">
            <header className="Header">
                <h2 className="ItemHeader">
                    {name}
                </h2>
            </header>
            <section>
                <div className='picture'>
                    <img src={img} alt={name} className="ItemImg" />
                </div>
            </section>
            <section>
                <p className="Info">
                    Precio: ${price}
                </p>
                <p className="Info">
                    Stock disponible: {stock}
                </p>
            </section>
            <footer className='DetailsSection'>
                <Link to={`/item/${id}`} className="DetailsButton"><Buttons className="is-three-fifths" name='Ver detalle'/></Link>
            </footer>
        </article>
    )
}


export default Item;