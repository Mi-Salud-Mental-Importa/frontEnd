import React from "react";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Body from "../components/Body";
import saludMental1 from "../assets/saludMental1.png"
import saludMental2 from "../assets/saludMental2.png"
import saludMental3 from "../assets/saludMental3.png"
import saludMental4 from "../assets/saludMental4.jpg"
import Eventoss from "../Stylesheets/Eventos.css";

function Eventos() {
    const eventos = [
        {
            image: saludMental1,
            title: 'Evento 1'
        },
        {
            image: saludMental2,
            title: 'Evento 2'
        },
        {
            image: saludMental3,
            title: 'Evento 3'
        },
        {
            image: saludMental4,
            title: 'Evento 4'
        }
    ];

    return (
        <>
            <Navbar></Navbar>
            <h1 style={{ textAlign: 'center', fontFamily: 'cursive', fontSize: '2.5em', color: 'darkred', margin: '20px 0' }}>Descubre los Eventos de Noviembre</h1>
            <Carousel autoPlay showThumbs={false} showStatus={false} className="custom-carousel">
                {eventos.map((evento, index) => (
                    <div key={index} style={{ marginBottom: '20px' }}>
                        <img src={evento.image} alt={`Evento ${index + 1}`} style={{ width: '40%', height: '300px' }} />
                    </div>
                ))}
            </Carousel>
            <Footer style={{ marginTop: '20px' }}></Footer>
        </>

    );
}

export default Eventos;
