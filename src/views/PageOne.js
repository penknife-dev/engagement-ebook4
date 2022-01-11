import React, { Fragment, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import PageSlide from "../components/PageSlide";
import styled from "styled-components";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { isMobile, MobileView } from "react-device-detect";
import { useSwipeable } from "react-swipeable";
import Tilt from "react-parallax-tilt";
import Menu from "../components/Menu";
import logo from "../assets/img/logo1.svg";
import shortlogo from "../assets/img/short-logo.svg";
import i1 from "../assets/img/panel2.jpg";
import One from "../components/One";
import Two from "../components/Two";
import Three from "../components/Three";
import Tree from "../components/Tree";
import Spread from "../components/Spread";

import DA from "../components/DownArrow";
import c2 from "../assets/img/circ2.svg";
import c3 from "../assets/img/circ3.svg";

import { Touch } from "../components/Icons";

import hardcopy from "../assets/downloads/Customer Engagement eBook.pdf";

gsap.registerPlugin(ScrollToPlugin);
gsap.registerPlugin(ScrollTrigger);

const PageOne = ({
  isOpen,
  setIsOpen,
  isFoward,
  setIsFoward,
  isFirst,
  setIsFirst,
}) => {
  const history = useHistory();

  const jumpTo = () => {
    gsap.to(window, { duration: 0.5, scrollTo: { y: "#ch", offsetY: 110 } });
  };

  const pageBack = () => {
    setIsFoward(false);
  };

  const pageFoward = () => {
    setIsFoward(true);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const nextPage = (e) => {
    setIsFoward(true);
    gsap.to(window, { duration: 0.5, scrollTo: 0 });
    gsap.to(".thenav", { y: "-100px", duration: 1 });
    setTimeout(() => {
      history.push("/meet-the-amdocs-solution");
    }, 400);
  };

  const prevPage = (e) => {
    setIsFoward(false);
    gsap.to(window, { duration: 0.5, scrollTo: 0 });
    gsap.to(".thenav", { y: "-100px", duration: 1 });
    setTimeout(() => {
      history.push("/");
    }, 400);
  };

  const goP1 = (e) => {
    setIsFoward(true);
    gsap.to(window, { duration: 0.5, scrollTo: 0 });
    gsap.to(".thenav", { y: "-100px", duration: 1 });
    setTimeout(() => {
      history.push("/the-customer-of-today");
    }, 400);
  };

  const goP2 = (e) => {
    setIsFoward(true);
    gsap.to(window, { duration: 0.5, scrollTo: 0 });
    gsap.to(".thenav", { y: "-100px", duration: 1 });
    setTimeout(() => {
      history.push("/meet-the-amdocs-solution");
    }, 400);
  };

  const goP3 = (e) => {
    setIsFoward(true);
    gsap.to(window, { duration: 0.5, scrollTo: 0 });
    gsap.to(".thenav", { y: "-100px", duration: 1 });
    setTimeout(() => {
      history.push("/amdocs-customer-engagement");
    }, 400);
  };

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => nextPage(),
    onSwipedRight: (eventData) => prevPage(),
  });

  useEffect(() => {
    gsap.to(".thenav", { y: 0, duration: 1, delay: 0.2 });

    gsap.from(".spread1", {
      display: "none",
      drawSVG: 0,
      duration: 4,

      scrollTrigger: {
        trigger: "#ch",
        markers: false,
        pin: true,
        start: "top 60%",
        markers: false,
        end: "+=0",
        toggleActions: "play none reverse reverse",
        // scrub: 1,
      },
    });
  }, []);

  useEffect(() => {
    if (isFirst) {
      gsap.to("#swipe-hand", { x: -20, yoyo: true, repeat: -1 });
      gsap.to("#swipe-help", { autoAlpha: 0, display: "none", delay: 3 });
    } else {
      gsap.to("#swipe-hand", { autoAlpha: 0, display: "none" });
      gsap.to("#swipe-help", { autoAlpha: 0, display: "none" });
    }

    return () => {
      setIsFirst(false);
    };
  }, [isFirst]);

  return (
    <Fragment>
      <QuickMenu
        id="the-menu"
        className={isOpen ? "open" : null}
        onClick={closeMenu}
      >
        <span onClick={closeMenu}>The customer of today</span>
        <span onClick={goP2}>Meet the Amdocs Solution</span>
        <span onClick={goP3}>Amdocs Customer Engagement</span>
        <a download href={hardcopy}>
          <DownloadButton>Download PDF</DownloadButton>
        </a>
        <a
          href="mailto:amdocscustomerenga@amdocs.com?subject=Amdocs Customer Engagement eBook Enquiry"
          target="_blank"
        >
          <RequestButton>Request a demo</RequestButton>
        </a>
      </QuickMenu>
      <Navbar className="thenav" id="the-nav">
        <div className="inner">
          <div className="logo" onClick={prevPage}>
            {/* <img id="main-logo" src={logo} alt="" /> */}
          </div>
          <div className="items">
            <a
              href="mailto:amdocscustomerenga@amdocs.com?subject=Amdocs Customer Engagement eBook Enquiry"
              target="_blank"
            >
              <span className="request-prompt">Request a demo</span>
            </a>

            <div onClick={prevPage} className="prev">
              <i className="mi-home icon" />
              <span>Home</span>
            </div>

            <div onClick={prevPage} className="prev">
              <i className="mi-arrow-left icon" />
              <span>Previous</span>
            </div>

            <div onClick={nextPage} className="next">
              <span>Next</span>
              <i className="mi-arrow-right icon" />
            </div>
            <a style={{ display: "contents" }} download href={hardcopy}>
              <div className="next">
                <span>Download</span>
                <i className="mi-download icon" />
              </div>
            </a>
          </div>
          <div className="items">
            <div
              className={isOpen ? "burger close" : "burger"}
              onClick={toggleMenu}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </Navbar>
      <SwipeIntro id="swipe-help" className={isFirst ? "first" : null}>
        <h1>Swipe with one finger to navigate</h1>
        <Touch />
      </SwipeIntro>
      <PageSlide isFoward={isFoward}>
        <div className="swipeable" {...handlers}>
          <PageContent>
            <Card>
              <TreeGraphic>
                <Tree />
              </TreeGraphic>

              <div className="inner">
                <h1>The customer of today</h1>
                <p>
                  Today’s customers’ lives revolve around digital technologies.
                </p>
                <p>
                  They expect skilled, knowledgeable agents, demand easy access
                  to multiple communication channels, and want their service
                  provider to know who they are, their history and anticipate
                  their needs.
                </p>
                <p>
                  So when it comes to customer loyalty – and overall business
                  success – the key lies in your ability to provide an amazing
                  omnichannel experience.
                </p>
              </div>
            </Card>
            <SideImage>
              <Tilt
                tiltEnable={isMobile ? false : true}
                trackOnWindow={true}
                glareEnable={true}
                glarePosition="all"
                glareColor="#000"
                perspective={800}
                gyroscope={true}
              >
                <img src={i1} alt="" />
              </Tilt>
            </SideImage>

            <DownPrompt onClick={jumpTo}>
              <DA />
            </DownPrompt>
          </PageContent>

          <Interactives id="ch">
            <SpreadGraphic>
              <Spread />
            </SpreadGraphic>

            <div className="inner">
              <h1>Yet, challenges still exist:</h1>
              <ChallangesRow>
                <div>
                  <One />
                </div>

                <div>
                  <Two />
                </div>

                <div>
                  <Three />
                </div>
              </ChallangesRow>

              <h1>
                These challenges stand in the way of delivering a WOW customer
                experience.
              </h1>

              <FlowBox>
                <h1>What’s the solution?</h1>
                <p>
                  Overcoming these challenges demands a customer-centric,
                  always-available, approach.
                </p>
                <NextPagePrompt onClick={nextPage}>
                  <DA />
                </NextPagePrompt>
              </FlowBox>
            </div>
          </Interactives>
        </div>
      </PageSlide>
    </Fragment>
  );
};

const TreeGraphic = styled.div`
  position: absolute;
  left: -220px;
  bottom: -50px;
  width: 400px;
  height: 400px;
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: -1;

  @media (max-width: 850px) {
    position: absolute;
    height: 260px;
    width: 260px;
    left: unset;
    right: -70px;
    bottom: 0px;
    opacity: 0.5;
    /* display: none; */
  }

  svg {
    display: block;
    width: 100%;
  }
`;

const SpreadGraphic = styled.div`
  position: absolute;
  right: 230px;
  top: -50px;
  width: 400px;
  height: 400px;
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: -1;

  @media (max-width: 850px) {
    top: 150px;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;

    @media (max-width: 850px) {
      opacity: 0.5;
    }
  }
`;

const NextPagePrompt = styled.div`
  position: absolute;
  bottom: -45px;
  right: -145px;
  width: 100px;
  height: 100px;
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transform: rotate(-90deg);

  &::before {
    content: "next";
    position: absolute;
    bottom: 50px;
    right: -70px;
    transform: translateX(-50%) rotate(90deg);
    width: fit-content;

    @media (max-width: 850px) {
      display: none;
    }
  }

  @media (max-width: 850px) {
    display: none;
  }

  svg {
    display: block;
    width: 100%;
  }
`;

const PageContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 1650px;
  margin: auto;
  overflow-x: hidden;

  @media (max-width: 850px) {
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    height: auto;
  }

  &.rev {
    background: #f6b74b;
    /* max-width: unset;
        margin: unset; */
    &::after {
      content: "";
      background: #f6b74b;
      width: 200%;
      height: 100%;
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      z-index: -1;
    }
  }

  &.normal {
    /* justify-content: flex-start; */
    align-items: flex-start;
    flex-direction: column;

    h1 {
      text-align: center;
      margin: auto;
    }

    svg {
      display: block;
      width: 40%;
      margin: auto;
    }
  }
`;

const SwipeIntro = styled.div`
  display: none;

  @media (max-width: 850px) {
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.8);
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 3em;

    &.first {
      display: flex;
    }

    h1 {
      margin-bottom: 30px;
    }

    svg {
      display: block;
      margin: 0 auto;
      width: 60%;
    }
  }
`;

const FlowBox = styled.div`
  background: #f6b74b;
  width: 70%;
  /* margin: auto; */
  margin-left: 160px;
  padding: 3em;
  margin-bottom: 50px;
  /* max-width: 700px; */
  position: relative;

  @media (max-width: 850px) {
    margin-left: 0;
    width: 100%;
    padding: 30px;
  }

  h1,
  h3,
  p {
    margin-left: 0 !important;

    @media (max-width: 850px) {
      font-size: 0.5em;
    }
  }

  h1 {
    margin-bottom: 10px;
    padding-bottom: 10px !important;

    @media (max-width: 850px) {
      font-size: 0.9em;
    }
  }

  p {
    font-size: 1.5em;

    @media (max-width: 850px) {
      font-size: 16px !important;
    }
    /* width: 50%; */
  }
`;

const DownPrompt = styled.div`
  position: absolute;
  right: 400px;
  bottom: 50px;
  width: 100px;
  height: 100px;
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &::before {
    content: "scroll down";
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;

    @media (max-width: 850px) {
      display: none;
    }
  }

  @media (max-width: 850px) {
    position: relative;
    order: 1;
    margin: auto;
    right: unset;
    margin-top: 40px;
  }

  svg {
    display: block;
    width: 100%;

    @media (max-width: 850px) {
      width: 80%;
    }
  }
`;

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 90px;
  background: rgba(0, 0, 0, 1);
  z-index: 999999999;

  @media (max-width: 850px) {
    height: 55px;
  }

  /* opacity: 0;
    visibility: hidden; */
  transform: translateY(-100px);

  a {
    color: #fff;
    text-decoration: none;
  }

  .burger {
    width: 60px;
    height: 60px;
    border-radius: 100%;
    /* z-index: 999; */
    /* top: 20px;
        left: 20px; */
    padding: 14px;
    position: relative;
    display: block !important;
    z-index: 99999999;
    cursor: pointer;
    visibility: visible;
    -webkit-transition: all 0.3s ease;
    transition: all 0.3s ease;
    cursor: pointer;

    span {
      width: 85%;
      height: 4px;
      display: block;
      background: #fff;
      margin: 5px 0;
    }

    &.close {
      transition: all 0.3s ease;

      span {
        &:nth-child(1) {
          transform: rotate(45deg) translate(6px, 7px);
          transition: all 0.3s ease;
        }
        &:nth-child(2) {
          opacity: 0;
          transition: all 0.3s ease;
        }
        &:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -7px);
          transition: all 0.3s ease;
        }
      }
    }
  }

  .request-prompt {
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f6b74b;
    padding: 10px;
    border-radius: 10px;
    cursor: pointer;

    @media (max-width: 850px) {
      display: none;
    }
  }

  .inner {
    max-width: 1650px;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;

    @media (max-width: 850px) {
      padding: 0 20px;
      justify-content: flex-start;
    }
  }

  .logo {
    display: block;
    margin-right: auto;
    margin-left: 160px;
    background: url(${logo}) no-repeat center center;
    background-size: cover;
    width: 195px;
    height: 31px;

    @media (max-width: 1270px) {
      background: url(${shortlogo}) no-repeat center center;
      margin-left: 40px;
    }

    @media (max-width: 850px) {
      background: url(${logo}) no-repeat center center;
      margin-left: 0;
      /* margin-right: 0; */
    }

    img {
      max-width: 220px;
      width: 100%;

      @media (max-width: 850px) {
        max-width: 160px;
      }
    }
  }

  .items {
    /* margin-right: 225px; */
    display: flex;
    font-size: 1em;

    .prev {
      @media (max-width: 850px) {
        display: none;
      }
    }

    .next {
      @media (max-width: 850px) {
        display: none;
      }
    }

    .icon {
      margin: 0 10px;
    }

    div {
      cursor: pointer;
      flex: 1;
      margin-left: 30px;
      display: flex;
      align-items: center;
    }

    &:last-of-type {
      margin-right: 160px;
      margin-left: 30px;

      @media (max-width: 1270px) {
        margin-left: 15px;
        margin-right: 100px;
      }

      @media (max-width: 850px) {
        margin-right: 0;
      }
    }
  }
`;

const Interactives = styled.div`
  position: relative;

  /* background: #F6B74B; */

  .inner {
    max-width: 1650px;
    margin: auto;

    @media (max-width: 850px) {
      padding: 25px;
      position: relative;
      top: -30px;
    }
  }

  h1,
  h3,
  p {
    margin-left: 160px;
    font-size: 1.8em;

    @media (max-width: 850px) {
      margin-left: 0;
      font-size: 16px;
    }
    /* text-align: center; */
  }

  h1 {
    &:last-of-type {
      padding-bottom: 40px;
    }
  }

  h3 {
    color: #f6b74b;
    font-family: "MarkPro-Bold";
    font-size: 2em;
  }

  img {
    display: block;
    width: 40%;
    margin: auto;
  }

  padding-bottom: 30px;
`;

const ChallangesRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 40px 0;

  @media (max-width: 850px) {
    flex-direction: column;
  }

  div {
    flex: 1;
    display: flex;
    cursor: pointer;

    @media (max-width: 850px) {
      margin-bottom: 30px;
    }

    svg {
      display: block;
      margin: auto;
      width: 50%;
      cursor: pointer;
      height: max-content;

      @media (max-width: 850px) {
        width: 70%;
      }
    }
  }
`;

const Card = styled.div`
  background: #f6b74b;
  padding: 3em;
  max-width: 40%;
  min-height: 400px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  position: relative;
  top: -10px;
  @media (max-height: 700px) {
    top: 40px;
  }
  @media (max-height: 600px) {
    padding: 1.75em 3em 1.75em 3em;
  }

  @media (max-width: 850px) {
    padding: 10px;
    background: transparent;
    min-height: unset;
    max-width: unset;
    padding: 25px;
    align-items: flex-start;
    order: 2;
    /* flex-direction: column-reverse; */
  }

  .inner {
    margin-right: 50px;

    @media (max-width: 850px) {
      margin-right: 0;
    }
  }

  h1 {
    /* font-family: 'MarkPro-Bold'; */
    font-size: 2.5em;
    line-height: 0.9;
    margin-bottom: 30px;
    font-weight: 600;

    @media (max-width: 850px) {
      font-size: 2.2em;
    }
  }

  p {
    margin: 10px 0;
    font-size: 1.2em;
    @media (max-height: 700px) {
      font-size: 1em;
    }
    @media (max-height: 600px) {
      font-size: 0.85em;
    }
    @media (max-width: 850px) {
      font-size: 16px;
    }
  }
`;

const SideImage = styled.div`
  max-width: 40%;
  position: relative;
  left: -50px;
  @media (max-height: 700px) {
    top: 40px;
  }
  @media (max-width: 850px) {
    max-width: unset;
    left: 0;
    top: -30px;
    order: 3;
  }

  img {
    display: block;
    width: 100%;
    max-height: 400px;

    @media (max-width: 850px) {
      /* max-height: 250px; */
      width: 100%;
      /* object-fit: cover; */
    }
  }
`;

const DownloadButton = styled.div`
  border: 3px solid #f6b74b;
  padding: 20px;
  border-radius: 30px;
  margin-top: 30px !important;
  display: block;
  transition: all 0.5s ease;

  &:hover {
    transition: all 0.5s ease;
    color: #f6b74b;
  }
`;

const RequestButton = styled.div`
  border: 3px solid #df6469;
  display: block;
  border-radius: 30px;
  padding: 20px;
  margin-top: 30px !important;
  transition: all 0.5s ease;

  &:hover {
    transition: all 0.5s ease;
    color: #df6469;
  }
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

  a {
    color: inherit;
    text-decoration: none;
  }

  &.open {
    transform: translateX(0);
    transition: all 0.5s ease;
  }
  a {
    &:hover {
      color: #fff;
    }
  }

  div {
    font-family: "MarkPro-Bold";
    font-size: 3em;
    cursor: pointer !important;
    margin: 10px 0;
    transition: all 0.5s ease;

    @media (max-width: 850px) {
      font-size: 1.6em;
      text-align: center;
      width: 80%;
      margin: 10px auto;
    }
  }

  span {
    font-family: "MarkPro-Bold";
    font-size: 3em;
    cursor: pointer !important;
    margin: 10px 0;
    transition: all 0.5s ease;

    @media (max-width: 850px) {
      font-size: 1.6em;
      text-align: center;
      width: 80%;
      margin: 10px auto;
    }

    &:hover {
      transition: all 0.5s ease;
    }

    &:nth-child(1) {
      &:hover {
        color: #f6b74b;
      }
    }

    &:nth-child(2) {
      &:hover {
        color: #df6469;
      }
    }

    &:nth-child(3) {
      &:hover {
        color: #c9317f;
      }
    }
  }
`;

export default PageOne;
