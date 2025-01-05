import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contact from './pages/Contact';
import './App.css';
import MoviesDetail from './components/MoviesDetail';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/movie/:id" element={<MoviesDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
