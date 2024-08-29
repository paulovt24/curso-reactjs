import './index.scss';
import {useState} from 'react';
import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'

export default function Exercicio4(){

    const[livro, setLivro]= useState('');
    const[paginas, setPaginas]= useState(0);
    const[segundos, setSegundos]= useState(0);
    const[result, setResult] = useState('');


    function Executar (){

       let total = Number(paginas) * Number(segundos) / 3600
            setResult(`Você lerá ${livro} em ${total.toFixed(2)} horas`);
            setPaginas('')
            setLivro('')
            setSegundos('')


    }



    function Enter(e){

if(e.key=='Enter'){

    Executar();
}

    }


    return(
        <div className='ex4-page'>
            <Cabecalho/>

           <h1 className='titulos1'> <Link to={'/'}><i className='fa fa-arrow-left seta'/></Link> Exercício 4 - Leitura de Livro</h1>
            <hr></hr>

            <section className='secao1'>
                <div className='enunciado'>
                  <p>Implementar um programa em Javascript que calcule o tempo que um livro será lido por uma pessoa a partir do nome do livro, do total de páginas e do tempo em segundos de leitura por página.</p>  
                </div>

                <div className='logica'>
                    <p>Nome do Livro</p>
                    <input value={livro} type='text' placeholder='digite o nome do livro' onKeyUp={Enter} onChange={e=> setLivro (e.target.value)} />

                    <p>Total de páginas</p>
                    <input value={paginas} type='text' placeholder='digite o total de paginas'  onKeyUp={Enter} onChange={e=> setPaginas(e.target.value)} />

                    <p>Tempo de leitura em segundos</p>
                    <input value={segundos} type='text' placeholder='digite quantos segundos leu uma pagina'  onKeyUp={Enter} onChange={e=> setSegundos (e.target.value)} />

                    <button onClick={Executar}> Executar</button>
                </div>

                <p className='resultado'>{result}</p>
            </section>
        </div>
    )
}