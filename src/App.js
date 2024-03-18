import "bulma/css/bulma.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./components/NotFound/NotFound";
import Layout from "./components/Layout";
import Checkout from "./components/Checkout/Checkout.jsx"
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart/Cart";


function App() {

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
                            <Route path='checkout' element={ <Checkout />} />
                            <Route path='*' element={<NotFound />} />
                        </Route>
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </div>
    )
}

export default App;