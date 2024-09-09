 import './index.scss'
 
import { Link } from 'react-router-dom'


   export default function Card({link_card, cor_card, titulo_card, subtitulo_card}){

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