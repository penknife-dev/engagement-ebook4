import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

const PageSlide = ({ children, isFoward }) => {
  return (
    <Slider
      initial={{ x: isFoward ? "100%" : "-100%" }}
      animate={{ x: "0" }}
      exit={{ x: isFoward ? "-100%" : "100%" }}
      transition={{ duration: 1 }}
    >
      {children}
    </Slider>
  );
};

const Slider = styled(motion.div)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  @media (max-width: 850px) {
    overflow-x: hidden;
  }
`;

export default PageSlide;
