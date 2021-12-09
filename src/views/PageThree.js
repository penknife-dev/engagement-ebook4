import React, { Fragment, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import PageSlide from "../components/PageSlide";
import styled from "styled-components";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Tilt from "react-parallax-tilt";
import { isMobile } from "react-device-detect";
import { useSwipeable } from "react-swipeable";

import Menu from "../components/Menu";

import logo from "../assets/img/logo1.svg";
import shortlogo from "../assets/img/short-logo.svg";
import i3 from "../assets/img/panel4.jpg";
import arrow from "../assets/img/down-arrow.svg";

import One from "../components/One";
import Two from "../components/Two";
import Three from "../components/Three";
import Spread from "../components/Spread";
import { Tick, Tick2, Tick3, Tick4 } from "../components/Icons";

import DA from "../components/DownArrow";
import MG from "../components/Media";

import pdf from "../assets/downloads/AMDOCS Solution Profile.pdf";
import hardcopy from "../assets/downloads/Customer Engagement eBook.pdf";

import {
  People as Icon1,
  Trolley as Icon2,
  Hand as Icon3,
  Puzzle as Icon4,
  Cloud as Icon5,
  Info as Icon6,
} from "../components/Icons";

gsap.registerPlugin(ScrollToPlugin);

const PageThree = ({ isOpen, setIsOpen, isFoward, setIsFoward }) => {
  const history = useHistory();

  const jumpTo = () => {
    gsap.to(window, { duration: 0.5, scrollTo: { y: "#ga", offsetY: 110 } });
  };

  const pageBack = () => {
    setIsFoward(false);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const pageFoward = () => {
    setIsFoward(true);
  };

  const sayHello = () => {
    alert("ello");
  };

  const tiltSides = () => {
    gsap.to("#demo-box", { borderRadius: "30px" });
  };

  const defaultSides = () => {
    gsap.to("#demo-box", { borderRadius: "0px" });
  };

  const tiltSides2 = () => {
    gsap.to("#demo-box2", { borderRadius: "30px" });
  };

  const defaultSides2 = () => {
    gsap.to("#demo-box2", { borderRadius: "0px" });
  };

  const nextPage = (e) => {
    setIsFoward(true);
    gsap.to(window, { duration: 0.5, scrollTo: 0 });
    setTimeout(() => {
      history.push("/");
    }, 200);
  };

  const prevPage = (e) => {
    setIsFoward(false);
    gsap.to(window, { duration: 0.5, scrollTo: 0 });
    gsap.to(".thenav", { y: "-100px", duration: 1 });
    setTimeout(() => {
      history.push("/meet-the-amdocs-solution");
    }, 400);
  };

  const homePage = (e) => {
    setIsFoward(false);
    gsap.to(window, { duration: 0.5, scrollTo: 0 });
    gsap.to(".thenav", { y: "-100px", duration: 1 });
    setTimeout(() => {
      history.push("/");
    }, 400);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const goP1 = (e) => {
    setIsFoward(false);
    gsap.to(window, { duration: 0.5, scrollTo: 0 });
    gsap.to(".thenav", { y: "-100px", duration: 1 });
    setTimeout(() => {
      history.push("/the-customer-of-today");
    }, 400);
  };

  const goP2 = (e) => {
    setIsFoward(false);
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
      history.push("/amdocs-omni-channel-customer-engagement");
    }, 400);
  };

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => nextPage(),
    onSwipedRight: (eventData) => prevPage(),
  });

  useEffect(() => {
    gsap.to(".thenav", { y: 0, duration: 1, delay: 0.2 });

    gsap.to(".icon-prompt", { y: 10, yoyo: true, repeat: -1 });
  }, []);

  return (
    <Fragment>
      <QuickMenu
        id="the-menu"
        className={isOpen ? "open" : null}
        onClick={closeMenu}
      >
        <span onClick={goP1}>The customer of today</span>
        <span onClick={goP2}>Meet the Amdocs Solution</span>
        <span onClick={closeMenu}>Amdocs Omni-Channel Customer Engagement</span>
        <a download href={hardcopy}>
          <DownloadButton>Download PDF</DownloadButton>
        </a>
        <a
          href="mailto:amdocscustomerenga@amdocs.com?subject=Amdocs Omni-Channel Customer Engagement eBook Enquiry"
          target="_blank"
        >
          <RequestButton>Request a demo</RequestButton>
        </a>
      </QuickMenu>
      <Navbar className="thenav">
        <div className="inner">
          <div className="logo" onClick={homePage}></div>
          <div className="items">
            <a
              href="mailto:amdocscustomerenga@amdocs.com?subject=Amdocs Omni-Channel Customer Engagement eBook Enquiry"
              target="_blank"
            >
              <span className="request-prompt">Request a demo</span>
            </a>

            <div onClick={homePage} className="prev">
              <i className="mi-home icon" />
              <span>Home</span>
            </div>

            <div onClick={prevPage} className="prev">
              <i className="mi-arrow-left icon" />
              <span>Previous</span>
            </div>

            <div className="next" onClick={homePage}>
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
      <PageSlide isFoward={isFoward}>
        <div className="swipeable" {...handlers}>
          <PageContent>
            <Card>
              <div className="inner">
                <h1>Amdocs Omni-Channel Customer Engagement</h1>
                <p>
                  Helps CSPs increase their customer & employee satisfaction and
                  upsurge revenue.
                </p>
              </div>

              <SpreadGraphic>
                <MG />
              </SpreadGraphic>
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
                <img src={i3} alt="" />
              </Tilt>
            </SideImage>

            <DownPrompt onClick={jumpTo}>
              <DA />
            </DownPrompt>
          </PageContent>

          <GridArea id="ga">
            <GridTile id="gt1">
              <span
                onMouseEnter={() => {
                  gsap.to("#gt1 .desc", {
                    autoAlpha: 1,
                    display: "block",
                    y: 0,
                  });
                }}
                className="icon-prompt"
              >
                <Tick />
              </span>
              <div className="title">Reduce onboarding &amp; training time</div>
              <div className="desc">
                unified and intuitive application fit for all agent needs
              </div>
            </GridTile>
            <GridTile id="gt2">
              <span
                onMouseEnter={() => {
                  gsap.to("#gt2 .desc", {
                    autoAlpha: 1,
                    display: "block",
                    y: 0,
                  });
                }}
                className="icon-prompt"
              >
                <Tick3 />
              </span>
              <div className="title">
                Provide a WOW omni-channel customer experience
              </div>
              <div className="desc">
                seamless handoff between channels &amp; agents; supports
                multi-channel sessions and multi-topic interactions
              </div>
            </GridTile>
            <GridTile id="gt3">
              <span
                onMouseEnter={() => {
                  gsap.to("#gt3 .desc", {
                    autoAlpha: 1,
                    display: "block",
                    y: 0,
                  });
                }}
                className="icon-prompt"
              >
                <Tick2 />
              </span>
              <div className="title">Increase sales</div>
              <div className="desc">
                improves overall customer satisfaction and utilizes embedded
                customized promotions for efficient up-sales during sessions
              </div>
            </GridTile>
            <GridTile id="gt4">
              <span
                onMouseEnter={() => {
                  gsap.to("#gt4 .desc", {
                    autoAlpha: 1,
                    display: "block",
                    y: 0,
                  });
                }}
                className="icon-prompt"
              >
                <Tick4 />
              </span>
              <div className="title">
                Enable effortless &amp; efficient care
              </div>
              <div className="desc">
                contextualized views &amp; embedded AI for real-time contextual
                recommendations &amp; insights, and automated workflows for a
                streamlined experience 
              </div>
            </GridTile>

            <a
              href="mailto:Hadar.Landau@amdocs.com?subject=Amdocs Omni-Channel Customer Engagement eBook Enquiry"
              target="_blank"
            >
              <div
                className="box"
                id="demo-box"
                onMouseEnter={tiltSides}
                onMouseLeave={defaultSides}
              >
                <div>
                  <h2>Request a demo</h2>
                </div>
                <img className="arrow-click" src={arrow} alt="" />
              </div>
            </a>

            <a download href={pdf}>
              <div
                className="box2"
                id="demo-box2"
                onMouseEnter={tiltSides2}
                onMouseLeave={defaultSides2}
              >
                <div>
                  <h2>
                    Learn more about Amdocs Omni-Channel Customer Engagement, in
                    this solution profile
                  </h2>
                </div>
                <img className="arrow-click" src={arrow} alt="" />

                <NextPagePrompt onClick={nextPage}>
                  <DA />
                </NextPagePrompt>
              </div>
            </a>
          </GridArea>
        </div>
      </PageSlide>
    </Fragment>
  );
};

const PageContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: 1650px;
  margin: auto;

  @media (max-width: 850px) {
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    display: flex;
    flex-direction: column-reverse;
    height: auto;
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
  margin-top: 40px;

  &::before {
    content: "scroll down";
    position: absolute;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    width: fit-content;
  }

  @media (max-width: 850px) {
    position: relative;
    order: 1;
    margin: auto;
    right: unset;
  }

  svg {
    display: block;
    width: 100%;

    @media (max-width: 850px) {
      width: 80%;
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
  }

  @media (max-width: 850px) {
    display: none;
  }

  svg {
    display: block;
    width: 100%;
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
  z-index: 100;

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
    z-index: 999;
    top: 20px;
    left: 20px;
    padding: 14px;
    display: block !important;
    z-index: 9999;
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
    background: #c9317f;
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
    display: inline-block;
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

const SpreadGraphic = styled.div`
  position: absolute;
  left: -40px;
  /* top: 170px; */
  bottom: 45px;
  width: 400px;
  height: 400px;
  /* background: red; */
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: -1;

  @media (max-width: 850px) {
    width: 300px;
    height: 300px;
    opacity: 0.5;
    bottom: 0;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

const Interactives = styled.div`
  max-width: 1650px;
  margin: auto;

  h1,
  h3 {
    margin-left: 160px;
    @media (max-width: 850px) {
      margin-left: 0;
      font-size: 16px;
    }
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
  margin: 60px 0;

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
  background: #c9317f;
  padding: 3em;
  max-width: 40%;
  min-height: 500px;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  @media (max-height: 700px) {
    top: 40px;
    min-height: 400px;
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
    top: -30px;
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
    line-height: 1;
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

const GridArea = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-areas:
    "a b c d"
    "box box2 box2 box2";
  grid-gap: 10px;
  margin: 10px;
  width: 80%;
  margin: auto;
  padding-bottom: 50px;
  position: relative;

  a {
    display: contents;
    text-decoration: none;
    color: inherit;
  }

  @media (max-width: 850px) {
    display: block;
  }

  .box2 {
    grid-area: box2;
    background: #c9317f;
    padding: 2em;
    position: relative;
    width: 80%;
    margin-bottom: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    h2 {
      text-align: center;
    }

    .arrow-click {
      width: 50px;
      height: 35px;
      transform: rotate(270deg);
      position: absolute;
      bottom: -15px;
    }
  }

  .box {
    grid-area: box;
    background: #c9317f;
    padding: 2em;
    position: relative;
    width: 80%;
    margin-bottom: 50px;
    display: inline-flex;
    align-items: center;
    justify-content: center;

    .arrow-click {
      width: 50px;
      height: 35px;
      transform: rotate(270deg);
      position: absolute;
      bottom: -15px;
    }

    h2 {
      text-align: center;
    }

    @media (max-width: 850px) {
      width: 100%;
    }
    div {
      display: flex;
      align-items: center;
      padding-bottom: 10px;
      @media (max-width: 850px) {
        align-items: flex-start;
      }
      h1 {
        @media (max-width: 850px) {
          font-size: 1em;
        }
      }
      .arrow-click {
        width: 50px;
        height: 35px;
        transform: rotate(270deg);
        position: absolute;
        bottom: -15px;

        @media (max-width: 850px) {
          width: 24px;
          height: 24px;
          margin-bottom: 6px;
        }
      }
    }
    h2 {
      @media (max-width: 850px) {
        font-size: 1em;
      }
    }
  }
`;

const FlowBox = styled.div`
  background: #c9317f;
  width: 70%;
  margin: auto;
  /* margin-left: 160px; */
  padding: 3em;
  margin-bottom: 50px;
  height: fit-content;
  /* max-width: 700px; */
  position: relative;
  @media (max-height: 700px) {
    top: 40px;
  }
  @media (max-height: 600px) {
    padding: 1.75em 3em 1.75em 3em;
  }
  @media (max-width: 850px) {
    margin-left: 0;
    width: 100%;
    padding: 30px;
  }
  h1,
  h3,
  p {
    margin-left: 0 !important;
    @media (max-height: 700px) {
      font-size: 1em;
    }
    @media (max-height: 600px) {
      font-size: 0.85em;
    }
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
    font-size: 1.8em;
    /* width: 50%; */
    @media (max-width: 850px) {
      font-size: 16px !important;
    }
  }
`;

const GridTile = styled.div`
  /* text-align: center; */
  margin-bottom: 40px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  text-align: center;

  img {
    display: block;
    width: 40%;
    margin: auto;
    margin-bottom: 30px;
    height: 100px;
    cursor: pointer;
    max-width: 120px;
  }

  svg {
    display: block;
    width: 100%;
    /* margin: auto; */
    margin-bottom: 30px;
    height: 100px;
    cursor: pointer;
    max-width: 120px;
  }

  .title {
    display: block;
    font-family: "MarkPro-Bold";
    font-size: 1.25em;
    min-height: 90px;
    /* max-width: 60%; */
    /* margin: auto; */
  }

  .desc {
    margin: 20px 0 0 0;
    /* max-width: 60%; */

    opacity: 0;
    visibility: hidden;
    display: none;
    transform: translateY(100px);
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

export default PageThree;
