import "bulma/css/bulma.css";
import './css/style.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

// import SearchBar from "./components/Search/SearchBar.jsx";
//import searchImages from "./api.js";
// import ImageList from "./components/Search/ImageList.jsx";
// import { useState, useEffect } from "react";
// import { getProducts } from "./asyncMock.js";
// import ItemCount from "./components/ItemCount/ItemCount.jsx";


function App() {

    // const [img, setImg] = useState([]);

    // const handleSubmit = async (term) => {
    //     let resultado = await searchImages(term);
    //     setImg(resultado);
    // }

    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' element={<ItemListContainer />} />
                    <Route path='/category/:categoryId' element={<ItemListContainer />} />
                    <Route path='/item/:itemId' element={<ItemDetailContainer />} />
                    <Route path='*' element={<h1>404 NOT FOUND</h1>} />

                </Routes>
            </BrowserRouter>
        </div>
        )
        // <ItemListContainer />
        // <SearchBar enSubmit={handleSubmit} />
        // <ImageList images={img} />
        // <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Canridad Agregada ', quantity)}/>
    }

export default App;