import "bulma/css/bulma.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./components/NotFound/NotFound";
import Layout from "./components/Layout";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<ItemListContainer />}/>
                        <Route path='/category/:categoryId' element={<ItemListContainer />} />
                        <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                        <Route path='*' element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;