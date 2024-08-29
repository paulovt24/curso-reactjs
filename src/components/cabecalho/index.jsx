import './index.scss';
import { Link } from 'react-router-dom'

export default function Cabecalho(){
    return(
        <header className='cabecalho'>
        <nav>
            <div className='titulo'>
            <img src='/assets/images/freimage.png'/>
        <h1>React FreiS</h1> 
            </div>
        
    
        <ul className='opcoes'> 
        <li><Link className='link' to={'/'}>Home</Link></li>
        <li><Link className='link' to={'/sobre'}>About</Link></li>
        </ul>
            
            </nav>        
       
           
    </header>
    )
}

