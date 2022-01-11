import React, { useState, useEffect } from "react";
import GlobalStyles from "./GlobalStyles";
import styled from "styled-components";
import { Route, Switch, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import ScrollToTop from "./components/ScrollToTop";
import logo from "./assets/img/logo1.svg";
import Welcome from "./views/Welcome";
import Highlights from "./views/Highlights";
import PageOne from "./views/PageOne";
import PageTwo from "./views/PageTwo";
import PageThree from "./views/PageThree";

const App = () => {
  const location = useLocation();

  const [isWelcome, setIsWelcome] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [isFoward, setIsFoward] = useState(true);
  const [isFirst, setIsFirst] = useState(true);

  return (
    <div className="App">
      <GlobalStyles />
      <Stage>
        <Logo>
          <img src={logo} alt="" />
        </Logo>
        <AnimatePresence>
          {/* <ScrollToTop /> */}
          <Switch location={location} key={location.pathname}>
            <Route exact path="/">
              {
                <Highlights
                  isWelcome={isWelcome}
                  setIsWelcome={setIsWelcome}
                  isFoward={isFoward}
                  setIsFoward={setIsFoward}
                />
              }
            </Route>
            <Route path="/highlights">
              <Highlights />
            </Route>
            <Route path="/the-customer-of-today">
              <PageOne
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                isFoward={isFoward}
                setIsFoward={setIsFoward}
                isFirst={isFirst}
                setIsFirst={setIsFirst}
              />
            </Route>
            <Route path="/meet-the-amdocs-solution">
              <PageTwo
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                isFoward={isFoward}
                setIsFoward={setIsFoward}
              />
            </Route>
            <Route path="/amdocs-customer-engagement">
              <PageThree
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                isFoward={isFoward}
                setIsFoward={setIsFoward}
              />
            </Route>
          </Switch>
        </AnimatePresence>
      </Stage>
    </div>
  );
};

const Stage = styled.div`
  /* padding: 3em; */
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
`;

const Logo = styled.div`
  display: none;
  position: absolute;
  top: 0;
  right: 0;
  width: 400px;
  padding: 3em;

  img {
    display: block;
    width: 100%;
  }
`;

export default App;
