import './index.scss'
import { Link } from 'react-router-dom'

export default function Exercicio3(){
    return(
        <div className='home-page'>
            <header className='cabecalho'>
                <img src='/assets/images/freimage.png'/>
                <h1>React FreiS</h1>
                <nav> 
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/sobre'}>About</Link></li>
                    
                </ul>

                </nav>
               </header>


            <section className='secao1'>
                <h1>Exercício 3 - Valor total por quantidade</h1>
                <hr></hr>
                <div>
                  <p>Implementar um programa em JavaScript para calcular o total de uma venda de açaí a partir das quantidades compradas para cada tamanho: pequeno, médio e grande sabendo que o valor do açaí é de R$ 13,50; R$ 15,00; R$17,50 respectivamente.</p>  
                </div>

                <div className='logica'>
                    <div> 
                      <p>Quantidade pequeno</p>
                      <input type='Number'></input>
                    </div>
                  
                  <div> 
                     <p>Quantidade médio</p>
                     <input type='Number'></input>
                  </div>

                  <div> 
                     <p>Quantidade grande</p>
                     <input type='Number'></input>
                  </div>
                    
                     <button>Executar</button>
                </div>

                <p>Resultado: O total é R$ 0,00</p>


            </section>
        </div>
    )
}