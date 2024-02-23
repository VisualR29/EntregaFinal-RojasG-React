import './ItemListContainer.css'
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
        <div className='listcontainer'>
            <h1>{greeting}</h1>
            <ItemList products={products} />
        </div>
)
}


export default ItemListContainer;