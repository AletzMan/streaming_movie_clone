import { EyeIconHidden, EyeIconVisible } from '../../../services/svgFiles';
import './../styles/LoginStyles.css';

const SectionLogin = () => {
    return (
        <section className="login">
            <h1 className="login__title">Iniciar sesión</h1>
            <form action="" className="login__form form">
                <label htmlFor="" className="form__label">Dirección de correo electrónico</label>
                <input type="email" className="form__email  form__input" placeholder='example@mail.com' />
                <label htmlFor="" className="form__label">Contraseña</label>
                <div className="form__containerpass">
                    <input type="password" className="form__password  form__input" placeholder='username' />
                    {<EyeIconHidden className={'form__eyehidden form__eye'} />}
                    {<EyeIconVisible className={'form__eyevisible form__eye'}/>}
                </div>
                <input className='form__submit' type='submit' value='Iniciar sesión' />
            </form>
            <button className='login__button'>Iniciar sesión con un proveedor</button>
            <span className="login__notaccount">¿No tienes una cuenta?<a href="/" className="login__register">Registrarse</a></span>
            <a href="/" className="login__register">¿Olvidaste tu contraseña?</a>
            <a href="/" className="login__register">¿Necesitas ayuda para iniciar sesión?</a>
        </section>
    );
};

export { SectionLogin };