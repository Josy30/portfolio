import './Header.scss';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router';
import { HashLink } from 'react-router-hash-link';

function Header(){

    const navigate = useNavigate();
    const location = useLocation();
    const handleClick = (route) => {
        navigate(route)
        }
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };

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
                <HashLink smooth to='#projects'
                className={location.pathname === '/projects' ? 'Button-header-chosen' : 'Button-header'}
                >PROJECTS
                </HashLink>
            </div>
            <div>
                <HashLink smooth to='#skills'
                className={location.pathname === '/skills' ? 'Button-header-chosen' : 'Button-header'}
                >SKILLS
                </HashLink>
            </div>
            <div>
                <HashLink smooth to='#contact_me'
                className={location.pathname === '/contact me' ? 'Button-header-chosen' : 'Button-header'}
                >CONTACT ME
                </HashLink>
            </div>


        </div>

    </div>
    
    )

}

export {Header};