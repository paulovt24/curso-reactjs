import './index.scss';
import {useState} from 'react';
import { Link } from 'react-router-dom'

export default function Exercicio1(){

    const[valor, setValor]= useState(0);
    const[cupom, setCupom]= useState('');
    const[result, setResult]= useState(0);


    function Executar (){

        if(cupom=='') {

            setResult(Number(result) + Number(valor));

        }

        else if(cupom=='QUERO50'){

            let desc= valor*0.50;
            let total= valor-desc;
            setResult(Number(result) + Number(total));
        }

        else{

      alert('Digite um cupom válido ou não digite nada, né')

        }

    }



    function Enter(e){

if(e.key=='Enter'){

    Executar();
}

    }


    return(
        <div className='ex1-page'>
            <header className='cabecalho'>
                <img src='/assets/images/freimage.png'/>
                <h1>React FreiS</h1> 

                <div className='opcoes'> 
                <p><Link to={'/'}>Home</Link></p>
                <p><Link to={'/sobre'}>About</Link></p>
                </div>
                
            </header>

           <h1 className='titulos1'> <Link to={'/'}><i className='fa fa-arrow-left seta'/></Link> Exercício 1 - Cupom de desconto</h1>
            <hr></hr>

            <section className='secao1'>
                <div className='enunciado'>
                  <p>Implementar um programa em JavaScript para calcular o valor da compra e do cupom de desconto. O cupom diz quantos reais terá de desconto.</p>  
                </div>

                <div className='logica'>
                    <p>Informe o valor do pedido</p>
                    <input value={valor} type='text' placeholder='Digite um valor' onKeyUp={Enter} onChange={e=> setValor (e.target.value)} />

                    <p>Informe o valor do cupom</p>
                    <input value={cupom} type='text' placeholder='Cupom'  onKeyUp={Enter} onChange={e=> setCupom (e.target.value)} />

                    <button onClick={Executar}> Executar</button>
                </div>

                <p className='resultado'>Resultado: O total é R$ {result} </p>
            </section>
        </div>
    )
}