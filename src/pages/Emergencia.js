import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Body from "../components/Body";
import styled from 'styled-components';

const greenColor = '#97D671'; 

const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

const GreenBox = styled.div`
  background-color: ${greenColor};
  padding: 20px;
  color: black;
  border-radius: 5px;
  width: 45%;
  margin: 10px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 1.2rem;
  color: white;
`;

const Heading = styled.h2`
  font-size: 48px;
  font-weight: bold;
  color: black;
`;

const PhoneNumber = styled.p`
  color: white;
  font-weight: bold; /* Texto en negrilla */
`;


function Emergencia() {
    return(
        <>
            <Navbar></Navbar>
            <Container>
      <GreenBox>
      <Heading>UDEA</Heading>
      <p>Acompañamiento psicológico</p>
      <PhoneNumber>01 8000 521 021</PhoneNumber>
        <Text>
          Es un servicio con el cual, a través de el programa Ánimo salud mental, queremos ayudar a gestionar el riesgo que tienen algunos estudiantes frente a enfermedades mentales como depresión y ansiedad.
        </Text>
      </GreenBox>
      <GreenBox>
      <Heading>ANTIOQUIA</Heading>
        <p>La Línea Amiga Saludable</p>
        <PhoneNumber>444 44 48</PhoneNumber>
        <Text>
          Estrategia en salud mental de la Alcaldía de Medellín que ofrece orientación y acompañamiento psicológico gratuito a los habitantes de la ciudad, todos los días de la semana las 24 horas.
        </Text>
      </GreenBox>
    </Container>
            <Footer></Footer>
        </>
    );

}

export default Emergencia;