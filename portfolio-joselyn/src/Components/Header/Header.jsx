import './Header.scss';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';
import Music from '../../assets/audio.mp3';

function Header(){

    const navigate = useNavigate();
    const location = useLocation();
    const handleClick = (route) => {
        navigate(route)
        }
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

        function playAudio() {
        const audio = document.getElementById("myAudio");
        audio.play();
        console.log("hola")
        }
    
        function pauseAudio() {
        const audio = document.getElementById("myAudio");
        audio.pause();
        }

    return (
    <div className='Header-component'>
        <div className='Header-component__titles'>
            <div>
                <button onClick={scrollToTop}
                className={location.pathname === '/' ? 'Button-header-chosen' : 'Button-header'}
                >HOME
                </button>
            </div>
            <div>
                
                <HashLink smooth to="#about" 
                className={location.pathname === '/about' ? 'Button-header-chosen' : 'Button-header'}
                >ABOUT
                </HashLink>
                
            </div>
            <div>
                <HashLink smooth to='#certifications'
                className={location.pathname === '/certifications' ? 'Button-header-chosen' : 'Button-header'}
                >CERTIFICATIONS
                </HashLink>
            </div>
            <div>
                <HashLink smooth to='#skills'
                className={location.pathname === '/skills' ? 'Button-header-chosen' : 'Button-header'}
                >SKILLS
                </HashLink>
            </div>
            <div>
                <HashLink smooth to='#projects'
                className={location.pathname === '/projects' ? 'Button-header-chosen' : 'Button-header'}
                >PROJECTS
                </HashLink>
            </div>
            <div>
                <HashLink smooth to='#contact_me'
                className={location.pathname === '/contact me' ? 'Button-header-chosen' : 'Button-header'}
                >CONTACT ME
                </HashLink>
            </div>
        </div>
        <audio id="myAudio" autoPlay>
            <source src={ Music } type="audio/mpeg"/>
            <source src={ Music } type="audio/mpeg"/>
        </audio>
        <div className='Botones_musica'>
            <button onClick={playAudio}>Play Audio</button>
            <button onClick={pauseAudio}>Pause Audio</button>
        </div>
    </div>
    
    )

}

export {Header};