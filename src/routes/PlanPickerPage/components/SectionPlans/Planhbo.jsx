import { NavLink } from "react-router-dom";


const Planhbo = () => {
    return (
        <div className="planshbo__plan planhbo">
            <h3 className="planhbo__title">Estándar</h3>
            <span className="planhbo__price">$149.00/m</span>
            <span className="planhbo__offer">Ahorra 3 meses</span>
            <ul className="planhbo__options planoptions">
                <li className="planoptions__li">Todos los dispositivos</li>
                <li className="planoptions__li">3 dispositivos a la vez</li>
                <li className="planoptions__li">Alta definición y 4K</li>
                <li className="planoptions__li">Descarga hasta 30 títulos</li>
                <li className="planoptions__li">5 Perfiles</li>
            </ul>
            <p className="planhbo__devices">Todos los dispositivos</p>
            <NavLink className='planhbo__button'>ELIGE ESTE PLAN</NavLink>
        </div>
    );
};

export { Planhbo };