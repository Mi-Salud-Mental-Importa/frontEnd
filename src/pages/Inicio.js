import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Body from "../components/Body";
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import descemerencia from "../assets/orientacion-psicologica-conectate-con-profesionale-upscaled.png";
import descentretenimiento from "../assets/entretenimiento-upscaled.png";
import descenventos from "../assets/eventos-mira-los-eventos-que-ofrece-la-u-para-tu-upscaled.png";
import descforos from "../assets/comparte-tus-experiencias-y-encuentra-apoyo-en-nue-upscaled.png";

const HomePageContainer = styled.div`
  text-align: center;
`;

const Header = styled.header`
  background-color: #97D671;
  color: white;
  padding: 2rem 0;
`;

const MainContent = styled.section`
  background-color: #f0f0f0;
  padding: 2rem;
`;

const Features = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

const Feature = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 1rem;
  margin: 1rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const CTA = styled.div`
  background-color: #97D671;
  color: white;
  padding: 2rem;
`;

function Inicio() {
    return (
        <HomePageContainer>
            <Navbar></Navbar>
            <Header>
                <h1>Mi Salud Mental Importa</h1>
                <p>¡Cuida tu bienestar emocional!</p>
            </Header>
            <MainContent>
                <div className="statistics">
                    <p>Estamos aquí para apoyarte en estos momentos.</p>
                    <p>Mira cómo podemos hacerlo:</p>
                </div>
                <Features>
                    <Feature>
                        <h2>Historias y Foros de Apoyo</h2>
                        <p>Comparte tus experiencias y encuentra apoyo en nuestra comunidad en línea.</p>
                        <Link to="/ForoApoyo">
                         <button>Foro de apoyo</button>
                         <p>

                         </p>
                         <img src={descforos} alt=""
                         width={500} height={500}
                         />
                        </Link>
                    </Feature>
                    <Feature>
                        <h2>Entretenimiento</h2>
                        <p>Accede a recursos útiles para distraerte en momentos difíciles y mejorar tu bienestar emocional.</p>
                        <Link to="/Entretenimiento">
                         <button>Entretenimiento</button>
                        </Link>
                        <p>         </p>

                        <img src={descentretenimiento} alt=""
                         width={500} height={500}/>
                    </Feature>
                    <Feature>
                        <h2>Orientación Psicológica</h2>
                        <p>Conéctate con profesionales para recibir orientación y apoyo personalizado.</p>
                        <Link to="/emergencia">
                         <button>Orientación Psicológica</button>
                        </Link>
                        <p>         </p>
                        <img src={descemerencia} alt=""
                         width={500} height={500}/>
                    </Feature>
                </Features>
            </MainContent>
            <Body></Body>
            <Footer></Footer>
        </HomePageContainer>
    );
}

export default Inicio;