import { useState, useEffect } from 'react';
import { getProducts, getProductsByCategory } from '../../asyncMock';
import ItemList from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);

    const { categoryId } = useParams();

    useEffect(() => {
        const assyncFunc = categoryId ? getProductsByCategory : getProducts;

        assyncFunc(categoryId)
            .then(response => {
            setProducts(response)
            })
            .catch(error => {
                console.error(error);
        })
    }, [categoryId])

    return (
        <div>
            <h1>{greeting}</h1>
            <ItemList products={products}/>
        </div>
)
}


export default ItemListContainer;

// function ItemListContainer() {
//     return <>
//         <section className="Hero">
//             <h2>Skilling Tec</h2>
//             <h3>El lugar donde las metas triunfan</h3>
//         </section>
//         <section className="Columns Itemlist">
//         </section>;
//     </>
// }




/* <ProfileCard titulo={"Finanzas"} descripcion={"Certificado: 12 semanas"} precio={7200} img={finanzas} className="Column" />
<ProfileCard titulo={"Excel"} descripcion={"Ruta"} precio={15000} img={excel} className="Column" />
<ProfileCard titulo={"Ventas"} descripcion={"Certificado"} precio={6800} img={ventas} className="Column" /> */