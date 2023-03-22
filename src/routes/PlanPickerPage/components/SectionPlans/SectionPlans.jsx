import { Planhbo } from "./Planhbo";



const SectionPlans = () => {
    return (
        <section className='planspage__section sectionplans'>
            <span className="sectionplans__step">PASE 1 DE 3</span>
            <h1 className="sectionplans__title">Elige tu experiencia HBO Max</h1>
            <h2 className="sectionplans__subtitle">Disfruta series y peliculas de HBO, Warner Bross., Max Originals y más.</h2>
            <article className='sectionplans__planshbo planshbo'>
                <Planhbo />
                <Planhbo />
            </article>
        </section>
    );
};

export { SectionPlans };