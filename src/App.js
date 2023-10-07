import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Inicio from './pages/Inicio.js';
import ForoApoyo from './pages/ForoApoyo.js';
import Eventos from './pages/Eventos.js';
import Entretenimiento from './pages/Entretenimiento.js';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Inicio" element={<Inicio/>}></Route>
          <Route path="/ForoApoyo" element={<ForoApoyo/>}></Route>
          <Route path="/Eventos" element={<Eventos/>}></Route>
          <Route path="/Entretenimiento" element={<Entretenimiento/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>


  );
}

export default App;
