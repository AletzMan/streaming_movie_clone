import { HeaderHome } from './components/HeaderHome';
import { Promo } from './components/Promo';
import { Plans } from './components/Plans';
import { Premieres } from './components/Premieres';
import { Free } from './components/Free';
import { Experience } from './components/Experience';
import { Discover } from './components/Discover';
import { Questions } from './components/Questions';

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

        </main>
    );
}

export { HomePage };