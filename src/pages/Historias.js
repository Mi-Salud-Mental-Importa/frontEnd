import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Body from "../components/Body";
import Historia from "../components/Historia";
import {Container} from 'reactstrap';

function Historias() {


    return(
        <>
            <Navbar></Navbar>
            <Container className="mt-3">
                 <Historia/>
            </Container>

            <Footer></Footer>
        </>
    );

}

export default Historias;