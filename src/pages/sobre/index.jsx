import './index.scss'
import { Link } from 'react-router-dom'

export default function Home(){
    return(
        <div className='about-page'>
            <header>
                <img src='/assets/images/freimage.png'/>
                <h1>React FreiS</h1>
            
                    <p><Link to={'/'}>Home</Link></p>
                    <p><Link to={'/sobre'}>About</Link></p>
            

            </header>
            <section>
            <h1>Sobre</h1>
            <p>Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a aprimorar suas habilidades em Node.js e lógica de programação de forma prática e envolvente. Acreditamos que a prárica constante é essencial para o aprendizado e o aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo que você avance no seu próprio ritmo e de acordo com suas necessidades.<br></br><br></br>Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer e desenvolver suas habilidades. <br></br>Estamos anciosos para ver seu progresso e sucesso! </p>

            <img src="/assets/images/freimage.png" alt="" />

            </section>
        </div>
    )
}