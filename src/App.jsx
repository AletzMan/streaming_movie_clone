
import { HashRouter,  Route, Routes } from 'react-router-dom';
import './App.css';
import { CatalogPage } from './routes/CatalogPage/CatalogPage';
import { CatalogHome } from './routes/CatalogPage/pages/CatalogHome/CatalogHome';
import { CreateAccountPage } from './routes/CreateAccountPage/CreateAccountPage';
import { CatalogMovies } from './routes/CatalogPage/pages/CatalogMovies/CatalogMovies';
import { CatalogSeries } from './routes/CatalogPage/pages/CatalogSeries/CatalogSeries';
import { CatalogSearch } from './routes/CatalogPage/pages/CatalogSearch/CatalogSearch';
import { HomePage } from './routes/HomePage/HomePage';
import { LoginPage } from './routes/LoginPage/LoginPage';
import { PlanPickerPage } from './routes/PlanPickerPage/PlanPickerPage';
import { ProfileSelectPage } from './routes/ProfileSelectPage/ProfileSelectPage';

function App() {


   return (
      <HashRouter>
         <Routes>
            <Route index element={<HomePage />} />
            <Route path='plan-picker' element={<PlanPickerPage />} />
            <Route path='login-page' element={<LoginPage />} />
            <Route path='profile-select' element={<ProfileSelectPage />} />
            <Route path='create-account' element={<CreateAccountPage />} />
            <Route path='catalog' element={<CatalogPage />} />
            <Route path='catalog/:page' element={<><CatalogPage /></>} />
         </Routes>
      </HashRouter>
   )
}

export default App
;