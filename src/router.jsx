import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Sobre from "./pages/sobre";
import Exercicio1 from "./pages/ex1";
import Exercicio2 from "./pages/ex2";
import Exercicio3 from "./pages/ex3";
import Exercicio4 from "./pages/ex4";
import Exercicio5 from "./pages/ex5";
import Exercicio6 from "./pages/ex6";
import Exercicio7 from "./pages/ex7";
import Exercicio8 from "./pages/ex8";
import Exercicio9 from "./pages/ex9";
import Exercicio10 from "./pages/ex10";
import Exercicio11 from "./pages/ex11";
import Exercicio12 from "./pages/ex12";

export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/sobre" element={<Sobre/>} />
                <Route path="/ex1" element={<Exercicio1/>} />
                <Route path="/ex2" element={<Exercicio2/>} />
                <Route path="/ex3" element={<Exercicio3/>} />
                <Route path="/ex4" element={<Exercicio4/>} />
                <Route path="/ex5" element={<Exercicio5/>} />
                <Route path="/ex6" element={<Exercicio6/>} />
                <Route path="/ex7" element={<Exercicio7/>} />
                <Route path="/ex8" element={<Exercicio8/>} />
                <Route path="/ex9" element={<Exercicio9/>} />
                <Route path="/ex10" element={<Exercicio10/>} />
                <Route path="/ex11" element={<Exercicio11/>} />
                <Route path="/ex12" element={<Exercicio12/>} />
            </Routes>
        </BrowserRouter>
    )
}
