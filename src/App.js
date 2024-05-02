import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import Tutoring from './pages/tutoring';
import Tutor from './pages/tutor';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Tutoring/>} />
        <Route path='/tutor' element={<Tutor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
