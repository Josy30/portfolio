import './Portada.scss';
import GithubPhoto from "../../assets/icon-github.png";
import LinkedInPhoto from "../../assets/icon-linkedin.png"


function Portada(){

    return(

        <div>
        <div className='Portada_saludo'>
            <h1>Hi there ! I'm Josy</h1>
        </div>
        <div className='Portada_icons'>
            <a className='Portada_icons_linkedin' target="_blank" href="https://www.linkedin.com/in/joselyn-judith/">
                <img src={LinkedInPhoto}/>
            </a>
            <a className='Portada_icons_github' target="_blank" href="https://github.com/Josy30/">
                <img src={GithubPhoto}/>
            </a>
            
            
        </div>
        </div>

        
    )


}

export {Portada};
