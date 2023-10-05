import React,{useState} from "react";
import styled from "styled-components";
import BurguerButton from "./BurguerButton";

function Navbar(){

    const[clicked,setClicked]=useState(false);
    const handleClick=()=>{
        setClicked(!clicked)
    }

    return(
        <>
        <NavContainer>
            <h1>Navbar</h1>
        <div className={`links ${clicked?"active":""}`}>
            <a onClick={handleClick} href="/">Inicio</a>
            <a onClick={handleClick} href="/">Foro de apoyo</a>
            <a onClick={handleClick} href="/">Eventos</a>
            <a onClick={handleClick} href="/">Entretenimiento</a>
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
    padding:.4rem;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: space-between;
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
    .links{
        position: absolute;
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
        }
        @media(min-width: 768px){
            position: initial;
            margin:0;
            a{
                font-size: 1rem;
                color:white;
                display: inline;
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
            font-size: 2rem;
            margin-top: 1rem;
            color:white;
        }
    }


` 

const BgDiv=styled.div`
    background-color: black;
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