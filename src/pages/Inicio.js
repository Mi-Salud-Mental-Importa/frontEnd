import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Body from "../components/Body";

function Inicio() {
    return(
        <>
            <Navbar></Navbar>
            <h1>ESTA ES LA PAGINA DE INICIO</h1>
            <Body></Body>
            <Footer></Footer>
        </>
    );

}

export default Inicio;