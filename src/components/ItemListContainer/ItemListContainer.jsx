import './ItemListContainer.css'
import { useState, useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import { useParams, Navigate } from 'react-router-dom';


import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../config/firebase';

const ItemListContainer = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const { categoryId } = useParams();

    useEffect(() => {
        setLoading(true)

        const collectionRef = categoryId ? query(collection(db, 'Items'), where('category', '==', categoryId)) : collection(db, 'Items')

        getDocs(collectionRef)
            .then(response => {
                const productsAdapted = response.docs.map(doc => {
                    const data = doc.data()
                    return { id: doc.id, ...data }
                })
                setProducts(productsAdapted)
            })
            .catch(error => {
                console.log(error)
            }).finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    if (products.length !== 0 && categoryId !== undefined) {
        return (
            <div className='listcontainer'>
                <h1>{categoryId.toUpperCase()}S</h1>
                <ItemList products={products} />
            </div>
        )
    } else {
        return (
            <div className='listcontainer'>
                <ItemList products={products} />
            </div>
        )

    }
}
export default ItemListContainer