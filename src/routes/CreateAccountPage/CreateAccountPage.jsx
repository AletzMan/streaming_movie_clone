import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Loading } from '../../components/Loading';
import { FooterPlans } from '../PlanPickerPage/components/SectionPlans/FooterPlans';
import { HeaderPlans } from '../PlanPickerPage/components/SectionPlans/HeaderPlans';
import { SectionAccountForm } from './components/SectionAccountForm';
import './styles/CreateAccountStyles.css';

const CreateAccountPage = () => {
    const [loading, setLoading] = useState(false);
    const planInfo = useLocation().state;

    useEffect(() => {
        setTimeout(() => {
            setLoading(true);
        }, 2000);
    }, [])
    return (
        <main className='createaccount__main main'>
            {loading && <>
                <HeaderPlans login={false} />
                <SectionAccountForm info={planInfo}/>
                <FooterPlans />
            </>}
            {!loading && <Loading />}
        </main>
    );
};

export { CreateAccountPage };