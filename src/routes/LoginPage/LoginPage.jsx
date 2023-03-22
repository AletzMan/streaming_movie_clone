
import { FooterPlans } from '../PlanPickerPage/components/SectionPlans/FooterPlans';
import { HeaderPlans } from '../PlanPickerPage/components/SectionPlans/HeaderPlans';
import { SectionLogin } from './components/SectionLogin';

const LoginPage = () => {
    return (
        <main className='planspage__main'>
            <HeaderPlans login={false}/>
            <SectionLogin />
            <FooterPlans />
        </main>
    );
};

export { LoginPage };