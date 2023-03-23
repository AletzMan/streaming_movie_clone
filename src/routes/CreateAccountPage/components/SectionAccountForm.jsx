import { NavLink } from "react-router-dom";
import { EditIcon } from "../../../services/svgFiles";
import { InputForm } from "./InputForm";


const SectionAccountForm = ({ info }) => {
    return (
        <section className="newaccount">
            <div className="newaccount__contprice contprice">
                <span className="contprice__name">Estándar</span>
                <span className="contprice__price">{info}</span>
                <NavLink to='/plan-picker'>
                    <EditIcon className={'contprice__edit'} />
                </NavLink>
            </div>
            <span className="newaccount__step">PASO 2 DE 3</span>
            <h1 className="newaccount__title">Crea una cuenta</h1>
            <h2 className="newaccount__subtitle">Accede a una biblioteca de entretenimiento genial, estés donde estés.</h2>
            <form action="" className="newaccount__form formnewaccount">
                <InputForm name={'name'} nameLabel={'Nombre'} />
                <InputForm name={'lastname'} nameLabel={'Apellido'} />
                <InputForm name={'email'} nameLabel={'Dirección de correo electrónico'} />
                <InputForm name={'confemail'} nameLabel={'Confirmar dirección de e-mail'} />
                <InputForm name={'password'} nameLabel={'Contraseña'} />
                <p className="formnewaccount__sugguest">Tu contraseña debe tener, como mínimo, 8 caracteres, e incluir un número o un carácter especial.</p>
                <div className="formnewaccount__privacy privacyaccount">
                    <p className="privacyaccount__politic">{`Al hacer clic en Crear cuenta, confirmas que tienes al menos 18 años, 
                              aceptas los Términos de Uso, y reconoces que has leído y aceptado nuestra Política de Privacidad. 
                              Además, reconoces que te enviaremos ofertas de marketing, promociones y otras ofertas de HBO Max 
                              y sus Afiliadas por e-mail, redes sociales y otros canales. Si creas un Perfil Infantil, 
                              aceptas el procesamiento de la información personal recopilada a través de ese perfil de acuerdo a la Política de Privacidad,
                              si dicho consentimiento es requerido en el lugar donde vives.`}
                    </p>
                    <input type={'submit'} className="privacyaccount__button button" value={'CREAR CUENTA'} />
                </div>
            </form>
            <p className="newaccount__privacy">Para cancelar en cualquier momento o para obtener más información sobre tus derechos y cómo ejercerlos, consultas las opciones disponibles en la Política de Privacidad.</p>

        </section>
    );
};

export { SectionAccountForm };