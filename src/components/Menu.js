import React, { useEffect } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Link, useHistory, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Menu = ({ isOpen, setIsOpen, isFoward, setIsFoward }) => {
  const history = useHistory();
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const goFoward = () => {
    setIsFoward(true);
  };

  const goBack = () => {
    setIsFoward(false);
  };

  const removeNavOne = (e) => {
    if (location.pathname.includes("the-customer-of-today")) {
      goFoward();
      setIsOpen(false);
      // gsap.to('.thenav',{y:'-100px',duration: 1})
      setTimeout(() => {
        history.push("/the-customer-of-today");
      }, 900);
    } else {
      goBack();
      setIsOpen(false);
      gsap.to(".thenav", { y: "-100px", duration: 1 });
      setTimeout(() => {
        history.push("/the-customer-of-today");
      }, 900);
    }
  };

  const removeNavTwo = (e) => {
    if (
      location.pathname.includes("meet-amdocs-customer-engagement") ||
      location.pathname.includes("the-customer-of-today")
    ) {
      goFoward();
      setIsOpen(false);
      // gsap.to('.thenav',{y:'-100px',duration: 1})
      setTimeout(() => {
        history.push("/meet-amdocs-customer-engagement");
      }, 900);
    } else {
      goBack();
      setIsOpen(false);
      gsap.to(".thenav", { y: "-100px", duration: 1 });
      setTimeout(() => {
        history.push("/meet-amdocs-customer-engagement");
      }, 900);
    }
  };

  //   finish function

  const removeNavThree = (e) => {
    if (
      location.pathname.includes("amdocs-engagement-center") ||
      location.pathname.includes("the-customer-of-today")
    ) {
      goFoward();
      setIsOpen(false);
      // gsap.to('.thenav',{y:'-100px',duration: 1})
      setTimeout(() => {
        history.push("/meet-amdocs-customer-engagement");
      }, 900);
    } else {
      goBack();
      setIsOpen(false);
      gsap.to(".thenav", { y: "-100px", duration: 1 });
      setTimeout(() => {
        history.push("/meet-amdocs-customer-engagement");
      }, 900);
    }
  };

  return (
    <QuickMenu
      id="the-menu"
      className={isOpen ? "open" : null}
      onClick={closeMenu}
    >
      <div onClick={removeNavOne}>The customer of today</div>
      <div onClick={removeNavTwo}>Meet Amdocs Customer Engagement</div>
      <div onClick={removeNavThree}>Amdocs Engagement Center</div>
      <DownloadButton>Download PDF</DownloadButton>
    </QuickMenu>
  );
};

const DownloadButton = styled.div`
  border: 3px solid #fff;
  padding: 20px;
  margin-top: 30px !important;
`;

const QuickMenu = styled(motion.div)`
  position: fixed;
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
  z-index: 100;
  background-color: #000;

  transform: translateX(-100%);
  transition: all 0.5s ease;

  &.open {
    transform: translateX(0);
    transition: all 0.5s ease;
  }

  div {
    font-family: "MarkPro-Bold";
    font-size: 3em;
    cursor: pointer !important;
    margin: 10px 0;
    transition: all 0.5s ease;

    &:hover {
      transition: all 0.5s ease;
    }

    &:nth-child(1) {
      &:hover {
        color: #F6B74B;
      }
    }

    &:nth-child(2) {
      &:hover {
        color: #DF6469;
      }
    }

    &:nth-child(3) {
      &:hover {
        color: #C9317F;
      }
    }
  }
`;

export default Menu;
