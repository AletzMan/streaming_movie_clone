import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo-page.svg';
import { Loading } from '../../components/Loading';
import './styles/ProfileSelectStyles.css';

const ProfileSelectPage = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    function handleGoToPage(name) {
        navigate('/catalog/movies');
        localStorage.setItem( 'user', name);
    }


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
                    <button className="profileselect__container profiles" onClick={()=>handleGoToPage('Aletz')}>
                        <div className="profiles__logo"></div>
                        <span className="profiles__initial">A</span>
                        <span className="profiles__name">Aletz</span>
                    </button>
                    <button className="profileselect__container profiles" onClick={()=>handleGoToPage('Invitado')}>
                        <div className="profiles__logo"></div>
                        <span className="profiles__initial">G</span>
                        <span className="profiles__name">Invitado</span>
                    </button>
                </div>
                <div className="profileselect__buttons addbuttons">
                    <NavLink className="addbuttons__button">Añadir adulto</NavLink>
                    <NavLink className="addbuttons__button">Añadir niño</NavLink>
                </div>
                <NavLink className="profileselect__manage">Gestionar perfiles</NavLink>
            </>}
            {!loading && <Loading />}
        </main>
    );
};

export { ProfileSelectPage };