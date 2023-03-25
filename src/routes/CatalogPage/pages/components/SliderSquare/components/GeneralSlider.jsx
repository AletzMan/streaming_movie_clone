

const GeneralSlider = ({className, info}) => {
    return (
        <>
            <button key={info.id} className={`${className}__card`}>
                <img className={`${className}__image`} src={info.imageUrl} alt="" />
                <div className={`${className}__containerlogo`}>
                    <img className={`${className}__logo`} src={info.logoUrl} alt="" />
                </div>
                <span className={`${className}__name`}>{info.name}</span>
                <div className={`${className}__cover`}></div>
            </button>
        </>
    );
};

export { GeneralSlider };