import React from "react";
import "../Stylesheets/Footer.css";
import fb from "../assets/fb.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/ig.png";
import linkedin from "../assets/linkedin.png";
import logoUdea from "../assets/logo_udea.png";

function Footer() {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <img src={logoUdea} alt=""/>
                            <p>NIT 890980040-8 | Recepción de correspondencia: calle 70 No. 52 - 21 | Apartado Aéreo 1226 | Dirección: calle 67 No. 53 - 108 | Medellín - Colombia | Correo notificaciones judiciales: notificacionesjudiciales@udea.edu.co</p>
                            <p>Vigilada Mineducación Acreditación institucional hasta el 2033</p>
                            <p>© Copyright 2020 Todos los Derechos Reservados </p>
                    </div>
                    <div className="sb__footer-links_div">
                    <h4>Bienestar Universitario</h4>
                            <p>Bienestar Universitario Ciudad Universitaria. Bloque 16. Oficina 232. Teléfono: (574) 2195380 Correo electrónico: dirbienestar@udea.edu.co </p>
                    </div>
                    <div className="sb__footer-links_div">
                    <h4>Línea Amiga Saludable</h4>  
                    <p> Medellín - Línea Amiga (4) 4444448</p>
                    <p>Línea 123 Social - Disponible 24 Horas todos los días</p>
                    <p>Línea 123 Mujer  - Disponible 24 Horas todos los días</p>
                    </div>    
                    <div className="sb__footer-links_div">
                        <h4>Síguenos en nuestras redes sociales</h4>
                        <div className="socialmedia">
                            <img src={fb} alt=""/>
                            <img src={twitter} alt=""/>
                            <img src={instagram} alt=""/>
                            <img src={linkedin} alt="dasda"/>
                        </div>
                    </div>                                     
                </div>
                <hr></hr>
                <div className="sb__footer-below">
                    <div className="sb__footer-copyright">
                        <p>
                            @{new Date().getFullYear()} All Rights Reserved.
                        </p>
                    </div>
                    <div className="sb__footer-below-links">
                        <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                        <a href="/privacity"><div><p>Privacity</p></div></a>
                        <a href="/security"><div><p>Cookie Declariation</p></div></a>
                        <a href="/cookie"><div><p>Security</p></div></a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;