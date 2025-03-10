import './Header.scss';
import { useNavigate } from 'react-router';
import { useLocation } from 'react-router'

function Header(){

    const navigate = useNavigate();
    const location = useLocation();
    const handleClick = (route) => {
        navigate(route)
        }

    return (
    <div className='Header-component'>
        <div className='Header-component__titles'>
            <div>
                <button 
                className={location.pathname === '/' ? 'Button-header-chosen' : 'Button-header'}
                onClick={() =>handleClick('/')}
                >HOME
                </button>
            </div>
            <div>
                <button 
                className={location.pathname === '/about' ? 'Button-header-chosen' : 'Button-header'}
                onClick={() =>handleClick('/about')}
                >ABOUT
                </button>
            </div>
            <div>
                <button 
                className={location.pathname === '/projects' ? 'Button-header-chosen' : 'Button-header'}
                onClick={() =>handleClick('/projects')}
                >PROJECTS
                </button>
            </div>
            <div>
                <button 
                className={location.pathname === '/skills' ? 'Button-header-chosen' : 'Button-header'}
                onClick={() =>handleClick('/skills')}
                >SKILLS
                </button>
            </div>
            <div>
                <button 
                className={location.pathname === '/contact me' ? 'Button-header-chosen' : 'Button-header'}
                onClick={() =>handleClick('/contact me')}
                >CONTACT ME
                </button>
            </div>


        </div>

    </div>
    
    )

}

export {Header};