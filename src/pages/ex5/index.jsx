import './index.scss';
import {useState} from 'react';
import { Link } from 'react-router-dom'

export default function Exercicio5(){

    const[nota1, setNota1]= useState(0);
    const[nota2, setNota2]= useState(0);
    const[nota3, setNota3]= useState(0);
    const[result, setResult] = useState('');


    function Executar (){

       let situacao = false
       let media = 0 

       media =  (Number(nota1) + Number(nota2) + Number(nota3))/3

       if(media >=6){
        situacao = true
       }

            setResult(`A média do aluno é ${media.toFixed(1)} 
            o aluno passou? ${situacao}`);
            setNota1('')
            setNota2('')
            setNota3('')
            


    }



    function Enter(e){

if(e.key=='Enter'){

    Executar();
}

    }


    return(
        <div className='ex5-page'>
            <header className='cabecalho'>
                <img src='/assets/images/freimage.png'/>
                <h1>React FreiS</h1> 

                <div className='opcoes'> 
                <p><Link to={'/'}>Home</Link></p>
                <p><Link to={'/sobre'}>About</Link></p>
                </div>
                
            </header>

           <h1 className='titulos1'> <Link to={'/'}><i className='fa fa-arrow-left seta'/></Link> Exercício 5 - Média de Notas</h1>
            <hr></hr>

            <section className='secao1'>
                <div className='enunciado'>
                  <p>Implemente um programa em Javascript para verificar se um aluno passou ou não, baseado em 3 notas, considerando que a média mínima para passar é 6.</p>  
                </div>

                <div className='logica'>
                    <p>Nota 01</p>
                    <input value={nota1} type='text' placeholder='digite a 1° nota' onKeyUp={Enter} onChange={e=> setNota1 (e.target.value)} />

                    <p>Nota 02</p>
                    <input value={nota2} type='text' placeholder='digite a 2° nota'  onKeyUp={Enter} onChange={e=> setNota2 (e.target.value)} />

                    <p>Nota 03</p>
                    <input value={nota3} type='text' placeholder='digite a 3° nota'  onKeyUp={Enter} onChange={e=> setNota3 (e.target.value)} />

                    <button onClick={Executar}> Executar</button>
                </div>

                <p className='resultado'>{result}</p>
            </section>
        </div>
    )
}