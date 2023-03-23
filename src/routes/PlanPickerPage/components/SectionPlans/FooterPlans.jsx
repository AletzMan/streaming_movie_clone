import { useState } from "react";
import { ArrowIcon, LanguageLogo } from "../../../../services/svgFiles";


const FooterPlans = () => {
    const [menuActivatede, setMenuActivated] = useState(true);

    const handlerMenuActivated = () => {
        setMenuActivated(prevState => !prevState);
        console.log(menuActivatede)
    }

    const handlerBlurLang = () =>{
        setMenuActivated(true);
    }
    return (
        <footer className="footerplans">
            <nav className="footerplans__nav">
                <ul className="footerplans__ul">
                    <li className="footerplans__li"><a className="footerplans__link" href="/">Política de Privacidad</a></li>
                    <li className="footerplans__li"><a className="footerplans__link" href="/">Términos de Uso</a></li>
                    <li className="footerplans__li"><a className="footerplans__link" href="/">Información</a></li>
                </ul>
                <div className="footerplans__container">
                    <button className="footerplans__button" onBlur={handlerBlurLang} onClick={handlerMenuActivated}>
                        <LanguageLogo className="footerplans__logo" />
                        <span>Español (Latinoamericano)</span>
                        <ArrowIcon className={`footerplans__icon footerplans__icon--${menuActivatede}`} />
                    </button>
                    <div className={`footersplans--language languageplans languageplans--${menuActivatede}`}>
                        <button className="languageplans__button">English (US)</button>
                        <button className="languageplans__button">Español(Latinoamericano)</button>
                        <button className="languageplans__button">Portugués (Brasil)</button>
                    </div>
                </div>
            </nav>
        </footer>
    );
};

export { FooterPlans };