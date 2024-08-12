import './index.scss'
import {useState} from 'react';
import { Link } from 'react-router-dom'

export default function Exercicio11(){

const[numero,setNumero]= useState(0);
const[resultado, setResultado]= useState([]);


function calcular(){
  
    let temporario = []
    for(let i = 0; i<=10; i++){
        
       temporario[i] = `${numero} x ${i} = ${numero*i}` 
    }
    
    setResultado(temporario)
}

    return(
        <div className='ex11-page'>
            <header className='cabecalho'>
                <img src='/assets/images/freimage.png'/>
                <h1>React FreiS</h1> 

                <div className='opcoes'> 
                <p><Link to={'/'}>Home</Link></p>
                <p><Link to={'/sobre'}>About</Link></p>
                </div>
                
            </header>

            <h1 className='titulos1'> <Link to={'/'}><i className='fa fa-arrow-left seta'/></Link> Exercício 11 - Tabuada </h1>
            <hr></hr>
            <section className='secao1'>
                <div className='enunciado'>
                  <p>Implementar um programa em JavaScript que escreva a tabuada de um número informado pelo usuário. A mensagem deve estar no formato "A x B = X" .</p>  
                </div>

                

                <div className='logica'>
                    <p>Tabuada do:</p>
                    <input type='text' value={numero} onChange={ e=> setNumero (e.target.value)}></input>

                    <button onClick={calcular}>Executar</button>
                </div>

              <div className='res'>
              
                    {resultado.map(item=>
                        
                        <ul>{item}</ul>
                    )}
                   
                
              </div>
            </section>
        </div>
    )
}