import './index.scss'
import {useState} from 'react';
import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'

export default function Exercicio9(){

const[grama,setGrama]= useState(0);
const[tot,setTot]= useState(0);

function Calcular(){

let valorgrama = 0
let valor= 0; 
if(grama >= 1000){
    valorgrama = 3/100
    valor = valorgrama * grama
}
else{
    valorgrama = 3.50/100
    valor = valorgrama * grama
}

setTot(valor.toFixed(2));

}

    return(
        <div className='ex9-page'>
           <Cabecalho/>

            <h1 className='titulos1'> <Link to={'/'}><i className='fa fa-arrow-left seta'/></Link> Exercício 9 - Sorveteria </h1>
            <hr></hr>
            <section className='secao1'>
                <div className='enunciado'>
                  <p>Implementar um programa em javascript que calcule o total a se pagar em uma compra na sorveteria, a partir do total de gramas comprado. O preço de 100g é R$ 3,50 mas se o total de gramas for a partir de 1kg, o preço das 100g diminui 50 centavos.</p>  
                </div>

                <div className='logica'>
                    <p>Total em gramas</p>
                    <input type='text' value={grama} onChange={ e=> setGrama (e.target.value)}></input>

                    <button onClick={Calcular}>Executar</button>
                </div>

                <p className='resultado'> Resultado: O total a pagar é {tot}</p>
            </section>
        </div>
    )
}