import '../styles/Header.css'
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

/*images*/
import ReactLogo from '../icons/LogoAlpha.svg';

export default function Header() {
    const { logout } = useLogout()
    const { user } = useAuthContext()

    const handleClick = () => {
        logout()
    }

    return(
        <header>
            <div className="header-upper">
                <div className="logo">
                    <div className="logo-upper">
                        {/* <h1 className='logo-upper__h1'>ALPHA</h1> */}
                        <Link to="/">
                            <img className='logo-upper__icon' src={ReactLogo} alt="React Logo" />
                        </Link>
                        {/* <h1 className='logo-upper__h1'>TRACK</h1> */}
                    </div>
                    {/* <h2 className='logo-lower__h1'>HABITS</h2> */}
                </div>
                <nav>
                    {user && (
                        <div className='login-show'>
                            <span>{user.email}</span>
                            <button className='habit-form__submit-button' onClick={handleClick}>Log out</button>
                        </div>
                    )}
                    {!user && (
                        <div className='login-show'>
                            <Link to="/login"><li className='nav__item'>Login</li></Link>
                            <Link to="/signup"><li className='nav__item'>Signup</li></Link>
                        </div>
                    )}
                </nav>
            </div>
            <hr />
        </header>
    )
}