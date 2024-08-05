import './index.scss'
import { Link } from 'react-router-dom'

export default function Exercicio2(){
    return(
        <div className='home-page'>
            <header>
                <img src='/assets/images'/>
                <h1>React FreiS</h1>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/sobre'}>About</Link></li>
                    
                </ul>

            </header>
            <section>
                <h1>Exercício 2 - Converter kg/gramas</h1>
                <hr></hr>
                <div>
                  <p>Implementar um programa em JavaScript para converter kilos em gramas .</p>  
                </div>

                <div>
                    <p>Valor em gramas</p>
                    <input type='Number'></input>

                    <button>Executar</button>
                </div>

                <p>Resultado: O total é R$ 0,00</p>
            </section>
        </div>
    )
}