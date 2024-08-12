import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Exercicio1 from "./pages/ex1";
import Exercicio2 from "./pages/ex2";
import Exercicio3 from "./pages/ex3";
import Exercicio11 from "./pages/ex11";

export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/sobre" element={<Sobre/>} />
                <Route path="/ex1" element={<Exercicio1/>} />
                <Route path="/ex2" element={<Exercicio2/>} />
                <Route path="/ex3" element={<Exercicio3/>} />
                <Route path="/ex11" element={<Exercicio11/>} />
            </Routes>
        </BrowserRouter>
    )
}
