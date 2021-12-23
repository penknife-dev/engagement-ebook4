import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import ReactTooltip from "react-tooltip";
import PageSlide from "../components/PageSlide";
import { Link, useHistory } from "react-router-dom";
import { BrowserView } from "react-device-detect";
import logo from "../assets/img/logo1.svg";
import omnilogo from "../assets/img/omnichannel-logo.svg";
import panel1 from "../assets/img/panel1-3.jpg";
import panel2 from "../assets/img/panel2.jpg";
import panel3 from "../assets/img/panel3.jpg";
import panel4 from "../assets/img/panel4.jpg";

const Highlights = ({ isFoward, setIsFoward }) => {
  const history = useHistory();

  const pageFoward = () => {
    setIsFoward(true);
  };

  const pageOne = (e) => {
    setIsFoward(true);
    setTimeout(() => {
      history.push("/the-customer-of-today");
    }, 100);
  };

  const pageTwo = (e) => {
    setIsFoward(true);
    setTimeout(() => {
      history.push("/meet-the-amdocs-solution");
    }, 100);
  };

  const pageThree = (e) => {
    setIsFoward(true);
    setTimeout(() => {
      history.push("/amdocs-omnichannel-customer-engagement");
    }, 100);
  };

  useEffect(() => {}, []);

  return (
    <Fragment>
      <PageSlide isFoward={isFoward}>
        <HighlightsArea>
          <TitleHighlight>
            <div className="logo-container">
              <div className="logo">
                <img src={logo} alt="" />
              </div>
              <div className="sub-logo">
                <img src={omnilogo} alt="" />
              </div>
            </div>
            <img src={panel1} alt="" />
            <div className="pane color-change-2x kenburns-top"></div>
            <InfoBox>
              <h1>Amdocs Omnichannel Customer Engagement</h1>
              <h2>one-stop-shop for a winning customer experience</h2>
            </InfoBox>
          </TitleHighlight>

          <PageOneHighlight data-tip data-for="page1" onClick={pageOne}>
            <motion.img className="kenburns-top" src={panel2} alt="" />
            <div className="pane color-change-2x kenburns-top"></div>
            <InfoBox>
              <p>
                The customer <br />
                of today
              </p>
            </InfoBox>
          </PageOneHighlight>

          <PageTwoHighlight data-tip data-for="page2" onClick={pageTwo}>
            <img className="kenburns-top2" src={panel3} alt="" />
            <div className="pane"></div>
            <InfoBox>
              <p>Meet the Amdocs Solution</p>
            </InfoBox>
          </PageTwoHighlight>

          <PageThreeHighlight data-tip data-for="page3" onClick={pageThree}>
            <img className="kenburns-top3" src={panel4} alt="" />
            <div className="pane"></div>
            <InfoBox>
              <p>Amdocs Omnichannel Customer Engagement</p>
            </InfoBox>
          </PageThreeHighlight>
        </HighlightsArea>

        <BrowserView>
          <ReactTooltip
            id={`page1`}
            backgroundColor="#F6B74B"
            place="left"
            effect="float"
          >
            <Breadcrumb>
              <p>
                Today’s customers’ lives revolve around digital technologies.
                They expect skilled, knowledgeable agents, demand easy access...
              </p>
            </Breadcrumb>
          </ReactTooltip>
        </BrowserView>

        <BrowserView>
          <ReactTooltip
            id={`page2`}
            backgroundColor="#DF6469"
            place="left"
            effect="float"
          >
            <Breadcrumb>
              <p>
                Intelligent & modular, our solution enables contact center and
                retail shop agents to manage all aspects of the customer...
              </p>
            </Breadcrumb>
          </ReactTooltip>
        </BrowserView>

        <BrowserView>
          <ReactTooltip
            id={`page3`}
            backgroundColor="#C9317F"
            place="left"
            effect="float"
          >
            <Breadcrumb>
              <p>
                Amdocs Omnichannel Customer Engagement helps CSPs increase their
                customer &amp; employee satisfaction and upsurge revenue...
              </p>
            </Breadcrumb>
          </ReactTooltip>
        </BrowserView>
      </PageSlide>
    </Fragment>
  );
};

const HighlightsArea = styled.section`
  display: grid;
  width: 100%;
  /* grid-gap: 15px; */
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:
    "title title p1"
    "title title p2"
    "title title p3";
  /* margin-top: 120px; */
  height: 100%;

  @media (max-width: 850px) {
    display: block;
  }

  a {
    display: contents;
    color: #fff;
    text-decoration: none;
  }
`;

const Breadcrumb = styled.div`
  max-width: 300px;

  @media (max-width: 850px) {
    display: none;
  }
`;

const InfoBox = styled.div`
  font-size: 2em;
  max-width: 95%;
  position: relative;
  z-index: 10;
`;

const TitleHighlight = styled.div`
  grid-area: title;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 2em;
  overflow: hidden;

  @media (max-width: 850px) {
    height: 40%;
    padding: 1em;
  }

  .pane {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.42);
  }

  h1 {
    background: -webkit-linear-gradient(
      0deg,
      rgba(246, 183, 75, 1) 0%,
      rgba(223, 100, 105, 1) 50%,
      rgba(201, 49, 127, 1) 100%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-size: 1.9em;
    /* font-family: 'MarkPro-Bold'; */
    line-height: 1.1;
    padding-bottom: 5px;
    font-weight: 600 !important;

    @media (max-width: 850px) {
      font-size: 1em;
    }
  }

  h2 {
    font-weight: 100;
    font-size: 1em;

    @media (max-width: 850px) {
      font-size: 0.8em;
    }
  }

  .logo-container {
    display: flex;
    align-self: flex-start;
    width: 100%;
    margin-bottom: auto;
  }

  .logo {
    display: inline-block;
    position: relative;
    z-index: 100;
    margin-bottom: auto;
    width: 320px;

    @media (max-width: 850px) {
      width: 180px;
      height: auto;

      img {
        height: auto;
      }
    }

    img {
      width: 100% !important;
      position: relative;
      top: unset !important;
      left: unset !important;
      right: unset !important;
      bottom: unset !important;
      object-fit: unset;
    }
  }

  .sub-logo {
    display: inline0block;
    position: relative;
    z-index: 100;
    margin-left: auto;
    width: 160px;

    @media (max-width: 850px) {
      width: 100px;
      height: auto;

      img {
        height: auto;
      }
    }

    img {
      width: 100% !important;
      position: relative;
      top: unset !important;
      left: unset !important;
      right: unset !important;
      bottom: unset !important;
      object-fit: unset;
    }
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
`;

const PageOneHighlight = styled(motion.div)`
  grid-area: p1;
  /* background: red; */
  position: relative;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 2em;
  overflow: hidden;

  @media (max-width: 850px) {
    font-size: 0.8em;
    height: 20%;
    padding: 1em;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .pane {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(253, 181, 21, 0.3);
  }
`;

const PageTwoHighlight = styled(PageOneHighlight)`
  grid-area: p2;

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .pane {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(223, 100, 105, 0.3);
  }
`;

const PageThreeHighlight = styled(PageOneHighlight)`
  grid-area: p3;

  img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }

  .pane {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(201, 49, 127, 0.3);
  }
`;

export default Highlights;
