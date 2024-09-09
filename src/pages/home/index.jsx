import './index.scss'
import Card from '../../components/cards'
import { Link } from 'react-router-dom'
import Cabecalho from '../../components/cabecalho'

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
        "link_card":'/ex4',
        "cor_card": 'marrom',
        "titulo_card":'Tabuada ',
        "subtitulo_card": 'Exercício 4' 
    },
    {
        "link_card":'/ex5',
        "cor_card": 'azul',
        "titulo_card":'Tabuada ',
        "subtitulo_card": 'Exercício 5' 
    },
    {
        "link_card":'/ex6',
        "cor_card": 'rosa',
        "titulo_card":'Tabuada ',
        "subtitulo_card": 'Exercício 6' 
    },
    {
        "link_card":'/ex7',
        "cor_card": 'preto',
        "titulo_card":'Tabuada ',
        "subtitulo_card": 'Exercício 7' 
    },
    {
        "link_card":'/ex8',
        "cor_card": 'cinza',
        "titulo_card":'Tabuada ',
        "subtitulo_card": 'Exercício 8' 
    },
    {
        "link_card":'/ex9',
        "cor_card": 'verde-escuro',
        "titulo_card":'Tabuada ',
        "subtitulo_card": 'Exercício 9' 
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
    },
]

    return(
        <div className='home-page'>
          
          <Cabecalho/>
                   
            <section className='secao1'>
                <h1>Escolha um treino...</h1>

               
                <div className='cards-abrigo'>


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