import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo-page.svg';
import { Loading } from '../../components/Loading';
import './styles/ProfileSelectStyles.css';

const ProfileSelectPage = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }, [])

    return (
        <main className="profileselect">
            {loading && <>
                <a href="/" className="profileselect__link">
                    <img className='profileselect__logo' src={logo} />
                </a>
                <h1 className="profileselect__title">¿Quien esta viendo?</h1>
                <div className="profiles__container">
                    <NavLink to='/catalog/movies' className="profileselect__container profiles">
                        <div className="profiles__logo"></div>
                        <span className="profiles__initial">A</span>
                        <span className="profiles__name">Aletz</span>
                    </NavLink>
                    <a href='/' className="profileselect__container profiles">
                        <div className="profiles__logo"></div>
                        <span className="profiles__initial">G</span>
                        <span className="profiles__name">Invitado</span>
                    </a>
                </div>
                <div className="profileselect__buttons addbuttons">
                    <NavLink className="addbuttons__button">AÑADIR ADULTO</NavLink>
                    <NavLink className="addbuttons__button">AÑADIR NIÑO</NavLink>
                </div>
                <NavLink className="profileselect__manage">GESTIONAR PERDILES</NavLink>
            </>}
            {!loading && <Loading />}
        </main>
    );
};

export { ProfileSelectPage };