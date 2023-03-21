
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './routes/HomePage/HomePage';

function App() {


   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<HomePage />} />
         </Routes>
      </BrowserRouter>
   )
}

export default App
