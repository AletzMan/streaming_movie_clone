import { NavLink } from 'react-router-dom';
import logo from '../../../../assets/logo-page.svg';

const HeaderPlans = ({ login }) => {
    return (
        <header className='planspage'>
            <nav className='planspage__nav'>
                <NavLink to="/" className="planspage__link">
                    <img src={logo} alt="logo de streaming move ir a home" className="planspage__logo" />
                </NavLink>
                {login && <NavLink className='planspage__login' to='/login-page'>INICIAR SESIÓN</NavLink>}
            </nav>
        </header>
    );
};

export { HeaderPlans };