import React,{useState} from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";
import Inicio from "../pages/Inicio.js";


function Navbar(){

    const[clicked,setClicked]=useState(false);
    const handleClick=()=>{
        setClicked(!clicked)
    }

    return(
        <>
        <NavContainer>
            <h1></h1>
        <div className={`links ${clicked?"active":""}`}>
            <a onClick={handleClick} href="/Inicio" >Inicio</a>
            <a onClick={handleClick} href="/ForoApoyo">ManoAmiga</a>
            <a onClick={handleClick} href="/Eventos">Parchemos</a>
            <a onClick={handleClick} href="/Entretenimiento">Entrétenete</a>
            <a onClick={handleClick} href="/Entretenimiento" style={{ color: 'red',fontWeight: 'bold' }}>EMERGENCIA</a>
        </div>
        <div className="burguer">
            <BurguerButton clicked={clicked} handleClick={handleClick}></BurguerButton>
        </div>
        <BgDiv className={`initial ${clicked?"active":""}`}></BgDiv>
        </NavContainer>
        </>
    )
}

export default Navbar

const NavContainer=styled.nav` 

    h1{
        color: white;
        font-weight: 400;
    }
    padding:1.5rem 0rem 1.4rem 2rem;
    background-color: rgb(51 105 30);
    display: flex;
    align-items: center;
    justify-content: flex;
    a{
        
        color:white;
        text-decoration: none;
        margin-right: 1rem;
    }
    .burguer{
        @media(min-width: 768px){
            display: none;
        }
    }
    .links a:hover {
        color: #008000; /* Cambia este valor al color verde oscuro que desees */
        background-color: #d0ffd0; /* Cambia el fondo al verde claro cuando se pasa el cursor */
      }
      .links a {
        color: white; /* Color de texto predeterminado */
        text-decoration: none; /* Quitar subrayado predeterminado */
        padding: 10px 10px; /* Ajustar el espacio alrededor del texto según sea necesario */
        border-radius: 10px; /* Borde redondeado */
        transition: color 0.3s, background-color 0.3s; /* Transición suave */
      }
      
    .links{
        position: absolute;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        align-items: center;
        text-align: center;
        top:-700px;
        left: -2000px;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        transition: all .9s ease;
        a{
            color:black;
            font-size: 2rem;
            display: block;    
            margin-left: 5rem;
            margin-right: 4rem;
        }
        @media(min-width: 768px){
            position: initial;
            margin:0;
            a{
                font-size: 1.3rem;
                color:white;
            }
        }
    }

    .links.active{
        width: 100%;
        display:block;
        position:absolute;
        margin-left: auto;
        margin-right: auto;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
        a{
            
            font-size: 1.7rem;
            margin-top: 1rem;
            color:white;
        }
    }


` 

const BgDiv=styled.div`
    background-color: green;
    position: absolute;
    top: -700px;
    left: -1000px;
    width: 100%;
    height:100%;
    z-index: -1;
    transition: all .9s ease;
    &.active{
        border-radius: 0 0 80% 0;
        top: 0;
        left: 0;    
        width: 100%;
        height:100%;
    }
`