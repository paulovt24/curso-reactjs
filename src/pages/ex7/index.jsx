import './index.scss';
import {useState} from 'react';
import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'

export default function Exercicio7(){

    const[cor1, setCor1]= useState('');
    const[cor2, setCor2]= useState('');
    const[result, setResult]= useState('');


    function Executar (){

       let  situacao = false

    if((cor1 == 'azul' || cor1=='vermelho' || cor1 == 'amarelo')  && (cor2 == 'azul' || cor2 == 'vermelho' || cor2 == 'amarelo')){

        situacao = true
    }

    setCor1('')
    setCor2('')
    setResult(`As duas cores são primárias? ${situacao}`)
   
}


    function Enter(e){

if(e.key=='Enter'){

    Executar();
}

    }


    return(
        <div className='ex7-page'>
          <Cabecalho/>

           <h1 className='titulos1'> <Link to={'/'}><i className='fa fa-arrow-left seta'/></Link> Exercício 7 - Cores Primárias</h1>
            <hr></hr>

            <section className='secao1'>
                <div className='enunciado'>
                  <p>Implementar um programa em javascript para verificar se duas cores são primárias.</p>  
                </div>

                <div className='logica'>
                    <p>Cor 1</p>
                    <input value={cor1} type='text' placeholder='Digite a 1° cor' onKeyUp={Enter} onChange={e=> setCor1 (e.target.value)} />

                    <p>Cor2</p>
                    <input value={cor2} type='text' placeholder='Digite a 2° cor'  onKeyUp={Enter} onChange={e=> setCor2 (e.target.value)} />

                    <button onClick={Executar}> Executar</button>
                </div>

                <p className='resultado'>{result}</p>
                
            </section>
        </div>
    )
}