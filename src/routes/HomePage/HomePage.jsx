import { HeaderHome } from './components/HeaderHome/HeaderHome';
import { Promo } from './components/Promo/Promo';
import { Plans } from './components/Plans/Plans';
import { Premieres } from './components/Premieres/Premieres';
import { Free } from './components/FreeSection/Free';
import { Experience } from './components/Experience/Experience';
import { Discover } from './components/Discover/Discover';
import { Questions } from './components/Questions/Questions';
import { FooterHomePage } from './components/Footer/FooterHomePage';
import './styles/HomePageStyle.css';

function HomePage() {


    return (
        <main className='homepage'>
            <HeaderHome />
            <Promo />
            <Plans />
            <Premieres />
            <Free />
            <Experience />
            <Discover />
            <Questions />
            <FooterHomePage />
        </main>
    );
}

export { HomePage };