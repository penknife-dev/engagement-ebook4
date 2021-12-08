import { createGlobalStyle } from "styled-components";

const AllStyles = createGlobalStyle`



*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'MarkPro-Book';
    color: #fff;
    background: #000;
    overflow-x: hidden;
}

b{
    font-family: 'MarkPro-Bold';
}

*::-webkit-scrollbar {
    display: none;
}

.swipeable{
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.color-change-2x {
	-webkit-animation: color-change-2x 4s linear infinite alternate both;
	        animation: color-change-2x 4s linear infinite alternate both;
}


.kenburns-top {
    -webkit-animation: kenburns-top 5s ease-out infinite alternate both;
	        animation: kenburns-top 5s ease-out infinite alternate both;
}

.kenburns-top2 {
    -webkit-animation: kenburns-top 5s ease-out infinite alternate both;
	        animation: kenburns-top 5s ease-out infinite alternate both;
}

.kenburns-top3 {
    -webkit-animation: kenburns-top 5s ease-out infinite alternate both;
	        animation: kenburns-top 5s ease-out infinite alternate both;
}

@-webkit-keyframes color-change-2x {
  0% {
    background: rgba(253,181,21,.3);
  }
  100% {
    background: rgba(253,181,21,.6);
  }
}
@keyframes color-change-2x {
  0% {
    background: rgba(253,181,21,.3);
  }
  100% {
    background: rgba(253,181,21,.6);
  }
}


.delay1{
    transition-delay: 1s !important;
}



@-webkit-keyframes kenburns-top {
  0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
            transform-origin: 50% 16%;
  }
  100% {
    -webkit-transform: scale(1.25) translateY(-15px);
            transform: scale(1.25) translateY(-15px);
    -webkit-transform-origin: top;
            transform-origin: top;
  }
}
@keyframes kenburns-top {
  0% {
    -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
    -webkit-transform-origin: 50% 16%;
            transform-origin: 50% 16%;
  }
  100% {
    -webkit-transform: scale(1.25) translateY(-15px);
            transform: scale(1.25) translateY(-15px);
    -webkit-transform-origin: top;
            transform-origin: top;
  }
}



#logo{
    display: none;
}

.arrow-down-prompt{
    fill:none;
    stroke:#ffffff;
    stroke-width:12;
    stroke-miterlimit:10;
}

.ring-after{
    /* display: none; */
}

.App{
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: flex-start;

    @media (max-width: 1060px) {
        height: auto;
        overflow-y: auto;
        overflow-x: hidden;
    }
}

`;

export default AllStyles;
