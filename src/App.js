import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Tutoring from './pages/tutoring';
import Tutor from './pages/tutor';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path='/' element={<Tutoring/>} />
        <Route path='/tutor' element={<Tutor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
