import './index.scss'
import {useState} from 'react';
import { Link } from 'react-router-dom'

export default function Exercicio3() {

const[pequeno,setPequeno]= useState(0);
const[medio,setMedio]= useState(0);
const[grande,setGrande]= useState(0);
const[total,setTotal]= useState(0);


function Calcular(){

    let qtdP= pequeno*13.50
    let qtdM= medio*15.00
    let qtdG= grande*17.50

    let Vltotal= Number(qtdP)+Number(qtdM)+Number(qtdG)

    setTotal(Vltotal)

}


    return (
        <div className='ex3-page'>
            <header className='cabecalho'>
                <img src='/assets/images/freimage.png' />
                <h1>React FreiS</h1>
                 
                <div className='opcoes'> 
                <p><Link to={'/'}>Home</Link></p>
                <p><Link to={'/sobre'}>About</Link></p>
                </div>
                   
            </header>

            <h1 className='titulos1'> <Link to={'/'}><i className='fa fa-arrow-left seta' /></Link> Exercício 3 - Valor total por quantidade</h1>
            <hr></hr>

            <section className='secao1'>

                <div className='enunciado'>
                    <p>Implementar um programa em JavaScript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande sabendo que o valor do açaí é de R$ 13,50; R$ 15,00; R$17,50 respectivamente.</p>
                </div>

                <div className='logica'>
                    <div className='inputs'>
                        <div className=''>
                            <p>Quantidade pequeno</p>
                            <input type='text' value={pequeno} onChange={e=> setPequeno (e.target.value)}></input>
                        </div>

                        <div>
                            <p>Quantidade médio</p>
                            <input type='text' value={medio} onChange={e=> setMedio (e.target.value)}></input>
                        </div>

                        <div>
                            <p>Quantidade grande</p>
                            <input type='text' value={grande} onChange={e=> setGrande (e.target.value)}></input>
                        </div>
                    </div>

                    <button onClick={Calcular}>Executar</button>
                </div>

                <p className='resultado'>Resultado: O total é R$ {total} </p>


            </section>
        </div>
    )
}