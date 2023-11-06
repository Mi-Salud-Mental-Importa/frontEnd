import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Body from './components/Body';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Inicio from './pages/Inicio.js';
import ForoApoyo from './pages/ForoApoyo.js';
import Eventos from './pages/Eventos.js';
import Historias from './pages/Historias.js';
import Emergencia from './pages/Emergencia.js';
import { ToastContainer } from 'react-toastify';
import PostPage from './pages/PostPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}></Route>
          <Route path="/Inicio" element={<Inicio/>}></Route>
          <Route path="/ForoApoyo" element={<ForoApoyo/>}></Route>
          <Route path="/Eventos" element={<Eventos/>}></Route>
          <Route path="/Historias" element={<Historias/>}></Route>
          <Route path="/posts/:postId" element={<PostPage/>}></Route>
          <Route path="/Emergencia" element={<Emergencia/>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
