import './index.scss';
import {useState} from 'react';
import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'

export default function Exercicio12(){

    const[nome, setNome]= useState('');
    const[idade, setIdade]= useState('');
    const[listaPessoas, setListaPessoas]= useState([]);
    const [editarmetas, setEditarmertas] = useState(-1);


    function Executar (){
        if (nome != ''){

            if(editarmetas==-1){
                setListaPessoas([...listaPessoas, <ul className='amostra'><li>{nome}</li> <li>{idade}</li></ul>])

            setNome('');
            setIdade('') 

            }

            else{
                listaPessoas[editarmetas] = nome
                setListaPessoas([...listaPessoas]);
                setNome('')
                setEditarmertas(-1)
            }
        }   
        }

        
    function Remover(pos){
        listaPessoas.splice(pos,1)
        setListaPessoas([...listaPessoas])
    }

    function alterarmeta(pos){
        setNome(listaPessoas[pos])
        setEditarmertas(pos)
       
    }



    function Enter(e){

if(e.key=='Enter'){

    Executar();
}

    }


    return(
        <div className='ex12-page'>
           <Cabecalho/>

           <h1 className='titulos1'> <Link to={'/'}><i className='fa fa-arrow-left seta'/></Link> Exercício 12 - Comparador de pessoas</h1>
            <hr></hr>

            <section className='secao1'>
                <div className='enunciado'>
                  <p>Implemente um programa em Javascript que leia o nome, a idade, e o sexo de várias pessoas.</p>  
                </div>
                </section>

                <section className='logica'>
                   <div className='programa'>
                    <div className='nome'>
                        <p>Nome</p>
                        <input value={nome} type='text' placeholder='digite seu nome' onChange={e=> setNome (e.target.value)}></input>
                    </div>
                    <div className='idade'>
                        <p>Idade</p>
                        <input value={idade} type='text' placeholder='digite sua idade' onChange={e=> setIdade (e.target.value)}></input>
                    </div>
                   
                    <button onClick={Executar}>Executar</button>
                   </div>

                   <ul className='lista'>
                    {listaPessoas.map((item, pos) =>
                        <li key={pos}>
                            <div className='resultado'>{item}</div>
                             <div className='alteracao'>

                             <button className='editar'  onClick={()=>alterarmeta(pos)}>Editar</button>
                             <button className='apagar'  onClick={()=>Remover(pos)}>Apagar</button>
                             
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