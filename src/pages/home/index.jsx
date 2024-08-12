import './index.scss'
import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <div className='home-page'>
            <header className='cabecalho'>
                
                <img src='/assets/images/freimage.png'/>
                <h1>React FreiS</h1>
                
                <div className='opcoes'> 
                <p><Link to={'/'}>Home</Link></p>
                <p><Link to={'/sobre'}>About</Link></p>
                </div>
                   
                

            </header>
            <section className='secao1'>
                <h1>Escolha um treino...</h1>
                <div>
                    <div className='um'>
                        <div className='amarelo'></div>
                        <h2>Cupom de desconto</h2>
                        <p><Link className='ex1' to={'/ex1'}> Exercício 1 </Link> </p>
                    </div>

                    <div className='dois'>
                        <div className='verde'></div>
                        <h2>Converter Kg/gramas</h2>
                        <p><Link className='ex2' to={'/ex2'}> Exercício 2 </Link></p>
                    </div>

                    <div className='tres'>
                        <div className='ciano'></div>
                        <h2>Valor total por quantidade</h2>
                        <p><Link className='ex3' to={'/ex3'}> Exercício 3 </Link></p>
                    </div>

                    <div className='onze'>
                        <div className='vermelho'></div>
                        <h2>Tabuada</h2>
                        <p><Link className='ex11' to={'/ex11'}> Exercício 11 </Link> </p>
                    </div>
                </div>

            </section>
        </div>
    )
}