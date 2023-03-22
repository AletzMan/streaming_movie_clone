
import { BrowserRouter,  HashRouter,  Route, Routes } from 'react-router-dom';
import './App.css';
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
         </Routes>
      </HashRouter>
   )
}

export default App
