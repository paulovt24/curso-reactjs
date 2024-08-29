import './index.scss'
import {useState} from 'react';
import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'

export default function Exercicio8(){

const[temp,setTemp]= useState('');
const[tot,setTot]= useState('');
const[cor,setCor] = useState('')

function Calcular(){

let situacao = ''

if(temp >=41){
    situacao = 'Hipetermia'
}
else if(temp >=39.6 && temp < 41){
    situacao = 'Febre Alta'
}
else if(temp >=37.6 && temp < 39.6){
    situacao = 'Febre'
}
else if(temp >=36 && temp < 37.6){
    situacao = 'Normal'
}
else if(temp < 36){
    situacao = 'Hipotermia'
}

setTot(`A situaçâo para sua temperatura é ${situacao}`);
setTemp('')

if(temp >=37.6){
    setCor('febre')
}

}

    return(
        <div className='ex8-page'>
           <Cabecalho/>

            <h1 className='titulos1'> <Link to={'/'}><i className='fa fa-arrow-left seta'/></Link> Exercício 8 - Temperatura </h1>
            <hr></hr>
            <section className='secao1'>
                <div className='enunciado'>
                  <p>Implementar um programa em javascript que a partir da temperatura, avalie a situação da pessoa conforme a tabela. Ao final, apresente a classificação.</p>  
                </div>

                <img src='https://s3-alpha-sig.figma.com/img/e54d/84ee/72c42bb8301e7294ba112eade6d80011?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CVVBKV-w9rBs~9-v7RvudPHwJaKFUqrqymmdw2aZNG3CsqeMgaIEJM5FSnGnSbVU7cYgbUGbatvRqTMOtLLqTi8rmkJAuomM7364-3CoUJFlVPp36SSnRpknmCG~5zZW5o99~Kx4CnvcCjELqkkv24Ntp8Oh24CYxyUn4w1ugmQJFgVjNVTPZCiLWcKIUlO8WUzli~z9PrFhi4dnMIUVJ~Ke7TXd~OwsuXOgu6OXZ0DeZltsKW5dWd-BAzM6eQHk1sKhoXgegT0kfQ4DBdeMW5OuIJPHySKhmIS2UZAwWJ7va4xSC1VcagwQp~jOj1WyND1mW9PZYH6ZCLKi09tpKQ__'/>

                <div id ={cor} className='logica'>
                    <p>Temperatura</p>
                    <input type='text' value={temp} onChange={ e=> setTemp (e.target.value)}></input>

                    <button onClick={Calcular}>Executar</button>
                </div>

                <p className='resultado'>{tot}</p>
            </section>
        </div>
    )
}