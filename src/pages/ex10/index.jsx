import './index.scss';
import {useState} from 'react';
import { Link } from 'react-router-dom'

export default function Exercicio10(){

    const[altura, setAltura]= useState(0);
    const[peso, setPeso]= useState(0);
    const[listaResultado, setListaResultado]= useState([]);


    function Executar (){
        
        let total = 0
        let situacao = ''

        if(altura != '' && peso !=''){

            total = peso / (altura**2)


            if(total <= 18.5){
                situacao = 'Abaixo do Normal'
            }

            else if(total > 18.5 && total <=24.9){
                situacao = 'Normal'
            }

            else if(total > 24.9 && total <=29.9){
                situacao = 'Sobrepeso'
            }

            else if(total > 29.9 && total <=34.9){
                situacao = 'Obesidade grau I'
            }

            else if(total > 34.9 && total <=39.9){
                situacao = 'Obesidade grau II'
            }

            else if(total > 39.9){
                situacao = 'Obesidade grau III'
            }
            

            setListaResultado([...listaResultado,`Altura: ${altura} | Peso:${peso} | Situação: ${situacao}`]);
            setAltura('');
            setPeso('') 

           
        }

        else{
            alert('pay attention nos bagui aí')
        }
     
    }

    function Remover(pos){
        listaResultado.splice(pos,1)
        setListaResultado([...listaResultado])
    }



    function Enter(e){

if(e.key=='Enter'){

    Executar();
}

    }


    return(
        <div className='ex10-page'>
            <header className='cabecalho'>
                <img src='/assets/images/freimage.png'/>
                <h1>React FreiS</h1> 

                <div className='opcoes'> 
                <p><Link to={'/'}>Home</Link></p>
                <p><Link to={'/sobre'}>About</Link></p>
                </div>
                
            </header>

           <h1 className='titulos1'> <Link to={'/'}><i className='fa fa-arrow-left seta'/></Link> Exercício 10 - Cálculo de IMC com histórico</h1>
            <hr></hr>

            <section className='secao1'>
                <div className='enunciado'>
                  <p>Implemente um programa em Javascript que a partir da altura e do peso de uma pessoa, calcule o IMC e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o IMC e a situação.</p>  
                </div>
                </section>

                <section className='logica'>
                   <div className='calculo-imc'>
                    <div className='altura'>
                        <p>Altura</p>
                        <input value={altura} type='text' placeholder='digite' onChange={e=> setAltura (e.target.value)}></input>
                    </div>
                    <div className='peso'>
                        <p>Peso</p>
                        <input value={peso} type='text' placeholder='digite' onChange={e=> setPeso (e.target.value)}></input>
                    </div>
                   
                    <button onClick={Executar}>Executar</button>
                   </div>

                   <ul className='lista'>
                    {listaResultado.map((item, pos) =>
                        <li key={pos}>
                            <div className='resultado'>{item}</div> &nbsp;
                             
                             <div className='icon'  onClick={()=>Remover(pos)}>
                             <i id='trashicon' class="fa-solid fa-trash"></i> 
                             </div>
                            
                           
                            </li>
                    )}
                    
                   </ul>
                   
                </section>

            
        </div>
    )
}


/*<p>Informe o valor do cupom</p>
<input value={cupom} type='text' placeholder='Cupom'  onKeyUp={Enter} onChange={e=> setCupom (e.target.value)} />*/