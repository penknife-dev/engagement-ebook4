import React,{useState,useeffect, useEffect, Fragment} from 'react';
// import {motion} from 'framer-motion';
import styled from 'styled-components';
import logo from '../assets/img/logo1.svg';
import WelcomeMessage from '../components/WelcomeMessage';
import b1 from '../assets/img/bg1.jpg';
import { Link,Redirect } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import PageSlide from '../components/PageSlide';
import Highlights from '../views/Highlights';

const Welcome = ({isWelcome,setIsWelcome,isFoward}) => {


useEffect(()=>{
    setTimeout(()=>{
        setIsWelcome(false);
    },2000)
},[])

return  (

    <PageSlide isFoward={isFoward}>
    <First>
        {/* <TitleTilt>
            <TitleBox> */}
               <img src={logo} alt="" />
               {/* <h1>Amdocs Customer Engagement</h1>
               <h2>one-stop-shop for a winning customer experience</h2> */}
           {/* </TitleBox>
       </TitleTilt> */}
           {/* <Link to="/highlights">
               <ViewPrompt>Read</ViewPrompt>
           </Link> */}
   </First>
</PageSlide> 
)

       
    
    
    
     

   
}

const First = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* background: url(${b1}) no-repeat center center; */
    background-size: cover;

    h1{
        font-family: 'MarkPro-Bold';
        font-size: 3em;
    }

    img{
        display: block;
        margin: 0 auto;
        width: 40%;
    }

    svg{
        display: block;
        margin: 0 auto;
        width: 80%;
    }
`;

const TitleTilt = styled(Tilt)`

`;

const TitleBox = styled.div`
    height: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    /* background: red; */
    padding: 2em;

    img{
        display: block;
        width: 45%;
        margin-bottom: 30px;
    }

    h1{
        background: -webkit-linear-gradient(0deg, rgba(246,183,75,1) 0%, gba(223, 100, 105, 0.3) 50%, rgba(201,49,127,1) 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
`;

const ViewPrompt = styled.div`
    display: block;
    text-align: center;
    padding: 15px;
    margin-top: 30px;
    background: #DF6469;
    border-radius: 4px;
    cursor: pointer;
    min-width: 100px;
`;

export default Welcome;