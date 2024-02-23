import "bulma/css/bulma.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NotFound from "./components/NotFound/NotFound";


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer />} />
                    <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App;