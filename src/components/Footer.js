import React from "react";
import "../Stylesheets/Footer.css";
import fb from "../assets/fb.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/ig.png";
import linkedin from "../assets/linkedin.png";

function Footer() {
    return (
        <div className="footer">
            <div className="sb__footer section__padding">
                <div className="sb__footer-links">
                    <div className="sb__footer-links_div">
                        <h4>Forr Bussiness</h4>
                        <a href="/employer">
                            <p>Employer</p>
                        </a>
                        <a href="/healthplan">
                            <p>Health Plan</p>
                        </a>
                        <a href="/indiviual">
                            <p>Individual</p>
                        </a>                                                
                    </div>
                    <div className="sb__footer-links_div">
                    <h4>Resources</h4>
                        <a href="/employer">
                            <p>Resource center</p>
                        </a>
                        <a href="/healthplan">
                            <p>Testimonials</p>
                        </a>                       
                    </div>
                    <div className="sb__footer-links_div">
                    <h4>Parters</h4>
                        <a href="/employer">
                            <p>Partners</p>
                        </a>
                        <a href="/healthplan">
                            <p>About</p>
                        </a>                       
                    </div>    
                    <div className="sb__footer-links_div">
                        <h4>Comming Soon on</h4>
                        <div className="socialmedia">
                            <p><img src={fb} alt=""/></p>
                            <p><img src={twitter} alt=""/></p>
                            <p><img src={instagram} alt=""/></p>
                            <p><img src={linkedin} alt=""/></p>
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