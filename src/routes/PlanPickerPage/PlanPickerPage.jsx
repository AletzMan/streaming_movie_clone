
import { useEffect, useState } from 'react';
import { Loading } from '../../components/Loading';
import { FooterPlans } from './components/SectionPlans/FooterPlans';
import { HeaderPlans } from './components/SectionPlans/HeaderPlans';
import { SectionPlans } from './components/SectionPlans/SectionPlans';
import './styles/PlanPickerStyle.css';

const PlanPickerPage = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }, [])

    return (
        <main className='planspage__main main'>
            {loading && <>
                <HeaderPlans login={true} />
                <SectionPlans />
                <FooterPlans />
            </>}
            {!loading && <Loading />}
        </main>
    );
};

export { PlanPickerPage };