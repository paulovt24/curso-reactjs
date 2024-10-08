import './index.scss'
import {useState} from 'react';
import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'

export default function Exercicio2(){

const[grama,setGrama]= useState(0);
const[tot,setTot]= useState(0);

function Calcular(){

let kilo= 1000;
let kg= grama/kilo;

setTot(kg);

}

    return(
        <div className='ex2-page'>
           <Cabecalho/>

            <h1 className='titulos1'> <Link to={'/'}><i className='fa fa-arrow-left seta'/></Link> Exercício 2 - Converter kg/grama </h1>
            <hr></hr>
            <section className='secao1'>
                <div className='enunciado'>
                  <p>Implementar um programa em JavaScript para converter kilos em gramas .</p>  
                </div>

                <div className='logica'>
                    <p>Valor em gramas</p>
                    <input type='text' value={grama} onChange={ e=> setGrama (e.target.value)}></input>

                    <button onClick={Calcular}>Executar</button>
                </div>

                <p className='resultado'> Resultado: O equivalente em KG é {tot}</p>
            </section>
        </div>
    )
}