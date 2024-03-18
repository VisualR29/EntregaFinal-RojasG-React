import "bulma/css/bulma.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./components/NotFound/NotFound";
import Layout from "./components/Layout";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";

// import { useEffect, useState } from "react";
// import { db } from "../src/config/firebase";
// import { collection } from "firebase/firestore";
// import { getDocs } from "firebase/firestore";

function App() {

    // const [products, setProducts] = useState([]);

    // const productReference = collection(db, "Items");

    // useEffect(() => {
    //     const getItems = async () => {

    //         const data = await getDocs(productReference);

    //         const filteredData = data.docs.map((doc) => ({
    //             ...doc.data(),
    //             id:doc.id
    //         }))
    //         setProducts(filteredData);
    //     }

    //     getItems();
    // }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <CartProvider>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<ItemListContainer />} />
                            <Route path='/category/:categoryId' element={<ItemListContainer />} />
                            <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                            <Route path='/cart' element={<Cart />} />
                            <Route path='*' element={<NotFound />} />
                        </Route>
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;