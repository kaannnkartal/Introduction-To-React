import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/Home";
import Detail from "./pages/Detail";
import { useState } from "react";


function App() {



    const [selectedProduct, setSelectedProduct] = useState({
        name: "Default",
        id: -1
    });




    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home setProduct={setSelectedProduct} />} />
                    <Route path="detail/:id" element={<Detail product={selectedProduct} />} />

                    {/* <Route path="/" element = {<Home  setProduct = {setSelectedProduct}/>} />
                    <Route path="detail/:id" element = {<Detail product = {selectedProduct}/>} /> */}
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App;