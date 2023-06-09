
import { useEffect, useState } from 'react';
import { Loading } from '../../components/Loading';
import { FooterPlans } from '../PlanPickerPage/components/SectionPlans/FooterPlans';
import { HeaderPlans } from '../PlanPickerPage/components/SectionPlans/HeaderPlans';
import { SectionLogin } from './components/SectionLogin';

const LoginPage = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }, [])

    return (
        <main className='planspage__main main'>
            {loading && <>
                <HeaderPlans login={false} />
                <SectionLogin />
                <FooterPlans />
            </>}
            {!loading && <Loading />}
        </main>
    );
};

export { LoginPage };