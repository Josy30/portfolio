import './Portada.scss';
import GithubPhoto from "../../assets/icon-github.png";
import LinkedInPhoto from "../../assets/icon-linkedin.png";
import CorreoPhoto from "../../assets/icon-correo.png";
import arrow from "../../assets/arrow1.gif"
import { HashLink } from 'react-router-hash-link';

function Portada(){

    return(

        <>
        <div className='Portada' id='home'>
        <div className='Portada_saludo'>
            <h1>
                <span className='saludo'>HI THERE! I'M</span> 
                <span className='nombre'>Joselyn   Judith</span>
            </h1>
        </div>
        <div className='Portada_icons'>
            <a className='Portada_icons_linkedin' target="_blank" href="https://www.linkedin.com/in/joselyn-judith/">
                <img src={LinkedInPhoto}/>
            </a>
            <a className='Portada_icons_github' target="_blank" href="https://github.com/Josy30/">
                <img src={GithubPhoto}/>
            </a>
            <a className='Portada_icons_correo' target="_blank" href="https://github.com/Josy30/">
                <img src={CorreoPhoto}/>
            </a>
        </div>
        </div>
        <div className='Portada_deslizar'>
            <HashLink smooth to="#about">
            <img loop autoPlay muted src={arrow} type="video/mp4">
            </img>
            </HashLink>
        </div>
        </>

        
    )


}

export {Portada};
