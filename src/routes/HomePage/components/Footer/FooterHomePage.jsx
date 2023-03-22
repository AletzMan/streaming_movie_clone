import { FacabookLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from '../../../../services/svgFiles';

const FooterHomePage = () => {
    return (
        <footer className='homepage__footer footer'>
                <ul className='footer__nav navlinks footer__list'>
                    <li className="navlinks__option"><a className='navlinks__option--link' href='/'>AHORA EN HBO MAX</a></li>
                    <li className="navlinks__option"><a className='navlinks__option--link' href='/'>PRÓXIMAMENTE</a></li>
                    <li className="navlinks__option"><a className='navlinks__option--link' href='/'>PELÍCULAS DESTACADAS</a></li>
                    <li className="navlinks__option"><a className='navlinks__option--link' href='/'>SERIES</a></li>
                    <li className="navlinks__option"><a className='navlinks__option--link' href='/'>AYUDA</a></li>
                </ul>
                <ul className='footer__privacy privacy footer__list'>
                    <li className="privacy__option"><a className="privacy__option--link" href='/'>Privacidad</a></li>
                    <li className="privacy__option"><a className="privacy__option--link" href='/'>Términos de uso</a></li>
                    <li className="privacy__option"><a className="privacy__option--link" href='/'>Anuncios de prensa</a></li>
                    <li className="privacy__option"><a className="privacy__option--link" href='/'>Contactos de prensa</a></li>
                    <li className="privacy__option"><a className="privacy__option--link" href='/'>Gestionar preferencias</a></li>
                </ul>
                <p className="footer__copyrigth">© 2023 WarnerMedia Direct Latin America, LLC. Todos los derechos reservados. HBO Max se usa bajo licencia.</p>
                <div className="footer__socialmedia">
                    <FacabookLogo />
                    <TwitterLogo />
                    <InstagramLogo />
                    <YoutubeLogo />
                </div>
            </footer>
    );
};

export {FooterHomePage};