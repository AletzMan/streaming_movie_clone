

const Experience = () => {
    return (
        <section className='homepage__experience experience'>
            <h2 className="experience__title">Una experiencia sencilla y completa</h2>
            <span className="experience__disponibility">Disponibilidad varía de acuerdo al plan.</span>
            <img src="https://hbomax-images.warnermediacdn.com/2021-08/mx_devices_trophy.png" alt="image of exprience hbo" className="experience__image" />
            <p className="experience__paragraph experience__paragraph--onew">Personaliza tu experiencia creando hasta 5 perfiles distintos por cuenta</p>
            <p className="experience__paragraph experience__paragraph--two">Descarga tus historias preferidas para disfrutar offline donde quieras</p>
            <p className="experience__paragraph experience__paragraph--three">Crea perfiles para los pequeños con contenido de acuerdo a su edad</p>
            <p className="experience__paragraph experience__paragraph--four">Agrega tus títulos favoritos para verlos cuando quieras</p>
            <div className="experience__options experienceoptions">
                <img className='experienceoptions__image experienceoptions--ben' src="https://hbomax-images.warnermediacdn.com/2021-05/ben10.png" alt="image ben10" />
                <p className="experienceoptions__paragraph">Grandes opciones de entretenimiento para toda la familia</p>
                <img className='experienceoptions__image experienceoptions__image--loony' src="https://hbomax-images.warnermediacdn.com/2021-05/fam_and_kids-looney_toons-img.png" alt="image loonytons" />
            </div>
        </section>
    );
};

export { Experience };