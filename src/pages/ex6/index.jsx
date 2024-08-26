import './index.scss';
import {useState} from 'react';
import { Link } from 'react-router-dom'

export default function Exercicio6(){

    const[salarioBase, setSalarioBase]= useState(0);
    const[bonusMensal, setBonusMensal]= useState(0);
    const[descontos, setDescontos]= useState(0);
    const[result, setResult] = useState('');


    function Executar (){

       let total = Number(salarioBase) + (Number(salarioBase)*(Number(bonusMensal)/100)) - Number(descontos)
       
            setResult(`Seu salário líquido é de ${total.toFixed(2)}`);
            setSalarioBase('')
            setBonusMensal('')
            setDescontos('')
            
    }



    function Enter(e){

if(e.key=='Enter'){

    Executar();
}

    }


    return(
        <div className='ex6-page'>
            <header className='cabecalho'>
                <img src='/assets/images/freimage.png'/>
                <h1>React FreiS</h1> 

                <div className='opcoes'> 
                <p><Link to={'/'}>Home</Link></p>
                <p><Link to={'/sobre'}>About</Link></p>
                </div>
                
            </header>

           <h1 className='titulos1'> <Link to={'/'}><i className='fa fa-arrow-left seta'/></Link> Exercício 6 - Salário Líquido</h1>
            <hr></hr>

            <section className='secao1'>
                <div className='enunciado'>
                  <p>Implemente um programa em javascript para calcular o salário líquido de um funcionário, a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais.</p>  
                </div>

                <div className='logica'>
                    <p>Salário base</p>
                    <input value={salarioBase} type='text' placeholder='digite seu salário base' onKeyUp={Enter} onChange={e=> setSalarioBase (e.target.value)} />

                    <p>Bônus mensal em porcentagem</p>
                    <input value={bonusMensal} type='text' placeholder='digite seu bônus mensal'  onKeyUp={Enter} onChange={e=> setBonusMensal (e.target.value)} />

                    <p>Total de descontos</p>
                    <input value={descontos} type='text' placeholder='digite o total de descontos'  onKeyUp={Enter} onChange={e=> setDescontos (e.target.value)} />

                    <button onClick={Executar}> Executar</button>
                </div>

                <p className='resultado'>{result}</p>
            </section>
        </div>
    )
}