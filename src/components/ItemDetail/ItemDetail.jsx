import ItemCount from "../ItemCount/ItemCount";
import './ItemDetail.css';

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
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
                <ItemCount initial={1} stock={stock} onAdd={(quabtity)=>console.log('Cantidad agregada ')}/>
            </footer>
        </article>
    )
}

export default ItemDetail