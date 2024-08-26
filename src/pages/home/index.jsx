import './index.scss'
import { Link } from 'react-router-dom'

export default function Home(){

    let cards= [
        {
        "link_card":'/ex1',
        "cor_card": 'amarelo',
        "titulo_card":'Cupom de Desconto ',
        "subtitulo_card": 'Exercício 1' 
    },
    {
        "link_card":'/ex2',
        "cor_card": 'verde',
        "titulo_card":'Converter KG/Gramas ',
        "subtitulo_card": 'Exercício 2' 
    },
    {
        "link_card":'/ex3',
        "cor_card": 'ciano',
        "titulo_card":'Valor total por quantidade ',
        "subtitulo_card": 'Exercício 3' 
    },
    {
        "link_card":'/ex10',
        "cor_card": 'roxo',
        "titulo_card":'Cálculo de IMC ',
        "subtitulo_card": 'Exercício 10' 
    },
    {
        "link_card":'/ex11',
        "cor_card": 'vermelho',
        "titulo_card":'Tabuada ',
        "subtitulo_card": 'Exercício 11' 
    }
]

    return(
        <div className='home-page'>
          
          <Cabecalho/>
                   
            <section className='secao1'>
                <h1>Escolha um treino...</h1>

               
                <div>


                {
    cards.map(card =>
        <Card
            link_card = {card.link_card}
            cor_card = {card.cor_card}
            titulo_card = {card.titulo_card}
            subtitulo_card = {card.subtitulo_card}
        /> 
    )
    }  
                </div>

            </section>
        </div>
    )
}

function Cabecalho(){
    return(
        <header className='cabecalho'>
                
        <img src='/assets/images/freimage.png'/>
        <h1>React FreiS</h1>
        
        <div className='opcoes'> 
        <p><Link to={'/'}>Home</Link></p>
        <p><Link to={'/sobre'}>About</Link></p>
        </div>
           
    </header>
    )
}


    
    function Card({link_card, cor_card, titulo_card, subtitulo_card}){

    return(
        <Link to = {link_card} className='link'>
        <div className='card'>
        
                        <div className={`retangulo ${cor_card}`}></div>
                        <h2>{titulo_card}</h2>
                        <p> {subtitulo_card} </p>
                        
                    </div>
                    </Link>
    )
}
 
