import './Portada.scss';
import GithubPhoto from "../../assets/icon-github.png";
import LinkedInPhoto from "../../assets/icon-linkedin.png";
import CorreoPhoto from "../../assets/icon-correo.png"


function Portada(){

    return(

        <>
        <div className='Portada_saludo'>
            <h1>
                <span className='saludo'>HI THERE! I'M</span> 
                <span className='nombre'>JOSELYN JUDITH</span>
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
        </>

        
    )


}

export {Portada};
