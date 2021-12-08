import React,{useEffect} from 'react';
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const Tree = () => {

    useEffect(()=>{
        gsap.from('.tree-item',{display: 'none', drawSVG: 0,delay: .9,duration: 1,stagger: 0.001})
    },[])

    return (
        <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 244.4 312.4"
    >
      <path
        className="tree-item"
        fill="none"
        stroke="#ef248a"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M192.7 53.2l4-3.5 4 3.5M196.7 49.2c0-11.8 1.1-23 0-35.5M193.8 6.2c-4.9 2-8.3 5.1-7.5 7.1.7 1.9 5.3 1.9 10.2-.1 4.9-2 8.3-5.1 7.5-7.1-.7-1.9-5.3-1.9-10.2.1zM162.7 39.7c0 6.6 2.7 12.3 11.8 12 9.2-.3 13.5-5 11.8-12 0-6.6-5.3-12-11.8-12-6.5 0-11.8 5.4-11.8 12z"
      />
      <path
      className="tree-item"
        d="M166.4 39.9c-1 5.2 2 9.2 8.2 8.2 6.2-1 8.2-3.7 8.2-8.2 0-4.5-3.7-8.2-8.2-8.2s-7.2 3-8.2 8.2zM167.2 49.7l-3 4M182.2 49.7l3 4M177.6 24.8l10.6 2.9c.6.2 1.3-.2 1.4-.8l1.5-5.8c.2-.6-.2-1.3-.8-1.5l-10.6-2.9c-.6-.2-1.3.2-1.4.8l-1.5 5.8c-.2.7.1 1.3.8 1.5zM190.2 22.7l-12-3M186.7 22.7l-1 3.5M181.7 21.2l-1 4M171.8 24.8l-10.6 2.9c-.6.2-1.3-.2-1.4-.8l-1.5-5.8c-.2-.6.2-1.3.8-1.5l10.6-2.9c.6-.2 1.3.2 1.4.8l1.5 5.8c.2.7-.2 1.3-.8 1.5zM158.7 22.7l12.5-3M162.7 22.7l1 3.5M167.7 21.2l1 4M145.7 52.7l4-4 4 4M149.7 48.7c0-5.7 1.1-10 0-17M156.2 26.2h-13M156.2 29.2h-13"
        fill="none"
        stroke="#ef248a"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M108.9 53.2h22.6c.6 0 1.2-.5 1.2-1.2-1-12.1 0-20.9 0-31.4 0-.6-.5-1.2-1.2-1.2-6.5-.7-15.1 0-22.6 0-.6 0-1.2.5-1.2 1.2-1.3 10.8 0 20.9 0 31.4.1.7.6 1.2 1.2 1.2z"
        fill="none"
        stroke="#f0288a"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M118.9 37.3c-3 .7-4.8 3.7-4.1 6.6.7 3 3.7 4.8 6.6 4.1 3-.7 4.8-3.7 4.1-6.6-.7-3-3.6-4.8-6.6-4.1zM120.2 34.7v2.5M120.2 48.7v2.5M112.2 42.7h2M125.7 42.7h2.5"
        fill="none"
        stroke="#f0288a"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M117.2 42.7c0 1.7 1.3 3 3 3s3-1.3 3-3-1.3-3-3-3-3 1.3-3 3zM116.2 26.9c0 2.1 1.7 3.8 3.7 3.8 2.1 0 3.8-1.7 3.8-3.8 0-2.1-1.7-3.8-3.8-3.8-2 .1-3.7 1.8-3.7 3.8zM120.2 21.2v1.5M120.2 31.2v1.5M114.2 26.7h2M124.2 26.7h1.5"
        fill="none"
        stroke="#f0288a"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M117.7 26.9c0 1.2 1 2.2 2.2 2.2 1.2 0 2.3-1 2.3-2.2 0-1.2-1-2.3-2.3-2.3-1.2.1-2.2 1.1-2.2 2.3zM128.2 22.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5zM109.2 22.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5zM128.2 50.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5zM109.2 50.2c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5-.7-1.5-1.5-1.5-1.5.7-1.5 1.5z"
        fill="none"
        stroke="#f0288a"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M150.2 13.4c-11-11.8-48.6-22.3-59.5 1.8M90.2 16.7c-1-1.8-2-3.7-3-5.5M96.7 13.7c-1.8.8-3.7 1.7-5.5 2.5"
        fill="none"
        stroke="#ed0b8c"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M79.3 42.7c2.3-1.4 4.1-3.4 5.3-5.8.6-1.1 1-2.6.3-3.6-.7-1.1-2.2-1.4-3.4-.9-1.2.5-2 1.6-2.3 2.9-.2-.8-.5-1.7-.9-2.4s-1.1-1.3-2-1.5c-1-.2-2.1.2-2.7 1.1-.4.7-.5 1.6-.3 2.4.2.8.6 1.5 1 2.2 1.3 1.9 3.3 3.7 5 5.6z"
        fill="none"
        stroke="#f02b89"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M78.9 23.8c-11-1.2-18.3 5-18.2 12.6 0 5.7 7.1 9.6 13.2 11.3l2.3.4 4.5 8.5 2.3-8.3.9-.1c4.7-.9 12-2.6 13.6-11.2 1.7-8.5-7.6-12-18.6-13.2z"
        fill="none"
        stroke="#f02b89"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M50.3 35c-.2-.2-2.9-2.9-3.1-2.8-.2.1.6 3.1.8 3.6-.5.4-2.4 1.3-2.3 1.6.1.3 2.4.8 2.9.9.2.6.5 3 .7 3 .2 0 1.2-2.8 1.2-3.2.6 0 3.7.2 3.7 0 .1-.2-1.9-1.8-2.1-2 .3-.9.9-2.5.8-2.6-.2-.3-2.4 1.5-2.6 1.5z"
        fill="none"
        stroke="#f0298a"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M214.5 61.9c-.3-.3-4.1-5.3-4.5-5.2-.4.1.2 5.1.4 5.7-.9.5-4.3 1.4-4.2 1.9 0 .4 3.8 1.9 4.5 2.1.1.9 0 4.8.4 4.8.3 0 2.8-4 2.9-4.7 1.1.1 6 1.3 6.2 1.1.2-.3-2.7-3.2-3-3.7.8-1.4 2.2-3.6 2-3.8-.2-.3-4.4 1.9-4.7 1.8z"
        fill="none"
        stroke="#f24086"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M206.6 189c0-.3.7-5.2.5-5.3-.3-.1-2.7 2.9-2.9 3.4-.8-.2-3.1-1.5-3.3-1.2-.2.3 1 3.1 1.3 3.6-.5.6-2.6 2.7-2.4 2.9.2.2 3.7-.8 4.1-1.1.5.6 2.5 4 2.8 3.9.3-.1.3-3.3.4-3.6 1.2-.3 3.2-.8 3.2-1.1-.1-.3-3.6-1.3-3.7-1.5z"
        fill="none"
        stroke="#fa965d"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M199 90.2c1.9-.5 4-2.3 5.2-4 .8-1.2 1.7-2.5 1.5-3.9-.2-1.4-1.4-2.6-2.8-2.7-1.4-.1-2.8.9-3.2 2.2.1-.9-.2-2-.9-2.7-.7-.7-1.6-1.1-2.6-1-.6 0-1.1.2-1.5.7-.5.5-.6 1.3-.6 2.1.2 3.7 1.8 7.4 4.9 9.3z"
        fill="none"
        stroke="#f35082"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M170.2 96.6l5.2 1c2.8-7.1 3.2-13.1 4.8-19.6l-6.9-1.4c-.4 8.6-2.1 13.4-3.1 20zM181.3 75.7l-8-1.6c-1-1.1-1.4-2.9-1-4.6.6-3.2 3.8-5.3 7-4.7 3.2.6 5.4 3.8 4.7 7-.3 1.7-1.4 3.3-2.7 3.9z"
        fill="none"
        stroke="#f45381"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M184.2 69.9c-1.7.3-3.6.3-5.7-.1s-3.9-1.2-5.3-2.2M176.2 94.2l-5-1"
        fill="none"
        stroke="#f45381"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M172.9 97.2c-.7 3.7.1 5.8 3.5 6.9 3.6 1.1 5.3 5.2 1.7 7.6"
        fill="none"
        stroke="#f45381"
        strokeWidth={1.362}
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        fill="none"
        stroke="#f45481"
        strokeWidth={1.362}
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M152.7 73.2h6v2.5h-6zM154.7 66.7h2v6.5h-2zM156.4 76.2h-1.7v18h1.7c.6-7 0-12 0-18zM147.2 66.7H145c-.8 7.7 0 10.7 0 16h2.1v-16zM145.2 85.2h2v9h-2zM133.2 75.2h6.5v2.5h-6.5zM135.7 66.7h1.5v8.5h-1.5zM137.4 77.7h-1.7v16.5h1.7c.6-6.6 0-11 0-16.5zM143.2 82.7h6v2.5h-6z"
      />
      <path
      className="tree-item"
        fill="none"
        stroke="#f24385"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M120.7 62.7l1 4.5M119.2 65.7l4-1.5"
      />
      <path
      className="tree-item"
        fill="none"
        stroke="#f98b67"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M130.7 164.7l-2.5 4M127.7 165.2l3.5 2.5"
      />
      <path
      className="tree-item"
        fill="none"
        stroke="#fdb420"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M35.2 286.7l-4.5.5M32.7 284.7l.5 4.5"
      />
      <path
      className="tree-item"
        fill="none"
        stroke="#fdb131"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M73.7 278.2l-4.5.5M71.2 276.2l.5 4.5"
      />
      <path
      className="tree-item"
        fill="none"
        stroke="#fdb420"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M53.7 305.7l-2 3.5M50.7 306.2l4 2.5"
      />
      <path
      className="tree-item"
        fill="none"
        stroke="#f55c7f"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M123.7 89.7l1 4M122.2 92.2l4-1.5"
      />
      <path
      className="tree-item"
        fill="none"
        stroke="#f98f63"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M149.7 171.2l1.5 4M148.2 173.7l4.5-1.5"
      />
      <path
      className="tree-item"
        d="M76.6 66.3c12.7 3.4 23.9 7.4 38.1 10.2l-1.1 4.2-38.1-10.2-9.3 3.6c2.9-6.2 2.7-10.6 4.1-16 2.1 2.8 3.4 5.9 6.3 8.2zM117.2 77.2l-1 4M63.2 73.7c1.5-5.3 4-10.4 4.5-16"
        fill="none"
        stroke="#f34a84"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M78.7 80.6c8.3 2.2 13.3 4.8 24.2 6 2.3.6 4.6-.8 5.2-3 .6-2.3-.8-4.6-3-5.2l-25-6.5c-2.3-.6-4.6.8-5.2 3-.7 2.2 1.5 5.1 3.8 5.7zM95.2 76.2l-3 11M96.2 71.2l.5-2M98.2 68.7l-2.5-.5M90.2 74.7l-3 11M91.2 70.2l1-2M93.7 67.7l-3-1M85.2 73.7l-3 10.5M86.2 68.7l.5-2M88.7 66.2l-3-.5"
        fill="none"
        stroke="#f34a84"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M44.4 82.1c1.5-.4 3.3-3 3.7-6l-3.6-16.7c-.6-2.7-3-4.2-5.6-3.6-3 1-4.3 2.2-4.2 6 0 3.8 2.6 13.2 4.5 16.6 1.8 3.4 3.7 4.1 5.2 3.7zM46.7 83.2c1.4 7.6 8.2 7.9 11.3 6.6 3.1-1.3 3.2-6.7-1-5.5s-1.7 8.1 0 9.5c1.7 1.3 9.6 2.5 10.1-1.4.5-4-4.5-3.3-5.7.7-1.2 4-.2 15.2 17.9 17.6"
        fill="none"
        stroke="#f35082"
        strokeWidth={1.362}
        strokeMiterlimit={8}
      />
      <path
      className="tree-item"
        d="M45.2 66.7c-1.3-.2-6.4.1-8.5 3.9M46.2 69.2c-1.3-.2-6.4.1-8.5 3.9M52.2 99.2c-.3-2.9-2.7-4.2-5.7-4.2-3.3 0-7.1-.7-9.9 0-2.8.7-6.1 1.8-6.8 4-.7 2.2 2.6 4.6 5.5 5.5 2.9 1 8.4.6 11.7.2 3.2-.4 5.5-2.5 5.2-5.5zM30.7 98.7c2.6 3.7 17 4.2 21 .2M44.7 81.7c.4 4.1 6.2 1.2 1.9-1.5M39.2 52.2c-.2-1.3-.4-2.7-.5-4M34.7 54.2c-.7-1.3-1.3-2.7-2-4M31.2 58.2c-1-.8-2-1.7-3-2.5M30.7 63.2c-1.2-.3-2.3-.7-3.5-1M43.7 52.7l1.5-3M47.7 55.7c.8-.7 1.7-1.3 2.5-2M49.2 58.7c1-.2 2-.3 3-.5"
        fill="none"
        stroke="#f35082"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M41.5 82.2l-.8 15.3c.5.6 2 1.2 2.5.3.4-.9.5-13.6.5-14.5"
        fill="none"
        stroke="#f35082"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        fill="none"
        stroke="#f87d6f"
        strokeWidth={1.362}
        strokeMiterlimit={8}
        d="M79.9 150.6l-33.7-.9v5.5l34 .5z"
      />
      <path
      className="tree-item"
        fill="none"
        stroke="#f87d6f"
        strokeWidth={1.362}
        strokeMiterlimit={8}
        d="M124.2 150.2H79.7v5.5h43.1z"
      />
      <path
      className="tree-item"
        d="M85 121.9c-18.3-.3-42.8-.7-46.9 1.4-4 2.1 1.3 10.1 8.6 26.6l52.5.7L85 121.9z"
        fill="none"
        stroke="#f87d6f"
        strokeWidth={1.362}
        strokeMiterlimit={8}
      />
      <path
      className="tree-item"
        fill="none"
        stroke="#f87d6f"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeMiterlimit={8}
        d="M87.7 143.2l-6-14M83.7 139.2l-2-4.5M82.2 141.7l-4-9M78.7 139.2l-1-3M77.7 141.7l-4-9M75.7 143.2l-4.5-11M71.7 139.2l-1.5-3M69.2 139.2l-2-4.5M68.7 143.2l-5-11M65.7 142.2l-5.5-13M61.7 139.2l-3-6.5M59.2 139.2l-2-4M57.2 140.2l-1.5-3M55.2 142.2l-5.5-13M51.7 138.2l-2.5-5.5M50.7 142.2l-5.5-13"
      />
      <path
      className="tree-item"
        d="M33.7 120.2c-1.2-1.5-2.3-3-3.5-4.5M36.7 119.2c.2-1.5.3-3 .5-4.5M31.2 123.7c-1.3-.3-2.7-.7-4-1"
        fill="none"
        stroke="#f87d6f"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M135.5 131.2c-2.5 9.1 1.4 13.2 4.8 13.8 3.3.6 5.2-3.5 1.9-4.9s-8.1 1.3-8.5 5.7c-.4 4.4 4.7 9.9 8.1 9.7 3.4-.3 3.9-5.4 1.2-5.7-2.7-.2-15.1 5.3 3.2 13.4"
        fill="none"
        stroke="#f77a71"
        strokeWidth={1.362}
        strokeMiterlimit={8}
      />
      <path
      className="tree-item"
        d="M134.7 123.9c.1-1.5.2-3.1.7-4.5 1.3-3.9 4-6.9 7.4-8.8l-1.4-3c-4.1 2.2-7.4 5.9-9 10.6-1 2.8-1.2 5.7-.9 8.5.2 1.3.8 2.6 1.8 3.5l2.5 2.4M163.3 133.7c.9-1.2 1.7-2.5 2.2-4 1.3-3.9 1.1-8-.5-11.6l2.9-1.5c1.9 4.3 2.2 9.3.6 14.1-1 2.9-2.5 5.3-4.5 7.3-.9 1-2.2 1.5-3.5 1.7l-3.4.4"
        fill="none"
        stroke="#f77a71"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M142.4 110.3c.5 1.1 1.8 1.6 2.9 1.1 2.9-1.1 6.3-1.2 9.5-.1 3.2 1.1 5.8 3.2 7.4 5.8.6 1 1.9 1.4 3 .9l2.1-1c1.2-.6 1.7-2.1 1-3.3-2.5-4-6.3-7.2-11.2-8.9-4.9-1.6-9.9-1.4-14.4.3-1.3.5-1.9 2-1.3 3.2l1 2zM155.2 111.7l1-3.5M149.2 107.7l.5 3M159.7 114.2l2-2M152.2 139.6l4 .5c.8.1 1.6-.2 2.1-.8l4.8-5.3c.5-.6.7-1.4.5-2.1l-1-3.8M139.7 135.2l-3.4-2c-.7-.4-1.1-1.1-1.1-1.8l-.4-6.9c0-.8.3-1.5.9-1.9l3.1-2.4"
        fill="none"
        stroke="#f77a71"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M138.7 119.9l3.1-.2c.8-.1 1.6.6 1.6 1.4l.8 12.4c.1.8-.6 1.5-1.4 1.5l-3.1.2-1-15.3zM162.7 128l-2.2-1.9c-.6-.5-1.5-.5-2.1.1l-8.4 9.5c-.5.6-.5 1.5.1 2.1l2.2 1.9 10.4-11.7z"
        fill="none"
        stroke="#f77a71"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M198.4 101.7c-3.4-.3-5.3.6-6.2 2.6-.9 2-1.5 8-1.6 10.7 0 2.7 3.1 4.6 6.3 4.6 3.2 0 6.2-1.2 6.6-4.1.4-2.9-.3-8.3-.8-10.2-.4-1.9-1.7-3.3-4.3-3.6zM204.7 105.7l-2 .5M205.7 110.7l-2.5-.5M205.2 114.7l-1.5-.5M189.7 105.2l2.5.5M188.7 109.2l2.5.5M189.2 114.2l1.5.5"
        fill="none"
        stroke="#f77972"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M200.1 106.4c-.1-.8-.9-1-1.1-.1-.2.8-.9 7.4-.8 9.2.1 1 1.1 1.1 1.4-.1.4-1.3.7-7.8.5-9zM196.1 105.9c-.1-.9-.9-1-1.1-.1-.2.9-.9 7.8-.8 9.6.1 1 1.1 1.2 1.4-.1.4-1.3.7-8.1.5-9.4zM194.6 148.7c-3.2-.3-6.3 1.7-6.8 3.7-.7 3.1 2.1 5.8 5.1 6.2 3 .4 6.8-1.3 7.2-4 .4-2.6-2-5.6-5.5-5.9zM198.7 167.2c-1.8.1-11.5-1.1-13-1.5"
        fill="none"
        stroke="#f77972"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M194.7 138.1c-2.6-.3-4.4-1.7-6.7-1.9-1.4-.1-3.9 1-4.2 3.1-.5 2.5 1.8 5.4.7 9.4-.7 2.8-6.2 8.4-6.3 13.8-.1 5.5 4.8 12.3 13.5 12.6 8.7.4 16.5-3.6 17-10.1s-4.1-12.1-4.2-15c-.1-2.9 1.9-5.4 2.1-8.3.1-2.6-2-4.2-3.9-4.5-1.5-.2-4.6 1.2-8 .9zM196.7 167.2l3-47.5M193.2 118.7s-4.6 43.2-5 47.5M197.2 119.7l-3.5 47.5M195.2 119.7l-4.5 47"
        fill="none"
        stroke="#f77972"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M232.1 126.2c-1.2 3.1-8.8 13.4-13.5 16.6 2.3 3 8.8 14.2 10.4 19.4 2.3-6.2 10.9-16.5 14.6-18.7-2.2-2.8-10.5-14.1-11.5-17.3z"
        fill="none"
        stroke="#f98b67"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M232 126.2c.3 2.7.1 8.7-.4 15.2-.6 8.3-1.7 17.2-2.6 20.9-.1.2-.1.5-.2.7v.1c-.8 3.2-2.1 6.2-3.5 8.9 0 .1-.1.1-.1.2-1.4 2.9-2.9 5.5-3.8 7.6 0 0 0 0 0 0-.3.8-.6 1.4-.8 2.1-1.7 6 1.7 11.6 1.8 14.1.1 2.5-.7 5.2-.7 5.2"
        fill="none"
        stroke="#f98b67"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M243.7 143.2c-1.7-.7-6.4-1.7-12-2-4.1-.2-8.8.1-13 1.3M229.2 162.8l-.1-.1-5.8-3.5-.1 5 5.8-1.4h.2M229.2 162.8l7-1.6-1.6 5zM225.7 172.2h-.3l-5.7-.3 2.3-5.2 3.5 5.3.2.2M225.7 172.2l4.4 6.5 2.6-6.2zM221.7 179.7h0l4.5 6.5 1-7-5.5.5h0M221.7 179.6l-6 .6 2.2-6z"
        fill="none"
        stroke="#f98b67"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M114.9 108.5c-4.1.8-5.7 2-8.5 2.9l.8-7.5 7.7 4.6z"
        fill="none"
        stroke="#f5657b"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M98.3 105.1c-3 8.6 4.8 12.9 8.8 14.1s10.3 1 14.7-7.1c1.8-6-3.2-13.2-8.2-14.7-5-1.6-12.3-.9-15.3 7.7zM95.7 99.2l-2.5-2.5M94.2 102.2c-1.2-.5-2.3-1-3.5-1.5M93.2 106.2c-1.2-.1-2.3-.1-3.5-.5"
        fill="none"
        stroke="#f5657b"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M106.1 136.2c.9-1.1 1.5-3.1 1.6-4.6 0-1.1 0-2.3-.6-3.1-.6-.8-1.8-1.1-2.7-.6-.9.5-1.3 1.7-1 2.7-.3-.6-.9-1.2-1.6-1.3-.7-.2-1.4 0-1.9.4-.3.2-.6.6-.7 1-.1.5.2 1.1.5 1.5 1.4 2.3 3.8 4 6.4 4z"
        fill="none"
        stroke="#f77a71"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M48.2 182.2c4-.7 8-1.3 12-2M67.7 178.2c3.8-.5 7.7-1 11.5-1.5M63.2 176.2c-.2-2.7-.3-5.3-.5-8M64.2 184.2l1.5 6M59.2 184.7c-.8 1.2-1.7 2.3-2.5 3.5M58.2 176.2c-1.2-1-2.3-2-3.5-3M68.7 173.2c.8-1 1.7-2 2.5-3M68.7 183.2c1.3 1 2.7 2 4 3"
        fill="none"
        stroke="#fa9360"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M89.2 182.9c0 7.9 6.4 14.3 14.2 14.3 7.9 0 14.3-6.4 14.3-14.3s-6.4-14.3-14.2-14.3c-7.9.1-14.3 6.5-14.3 14.3zM103.2 189.7c3.9 0 7-2.9 7-6.5M103.2 176.2c-3.6 0-6.5 3.1-6.5 7M103.2 193.2c5.8 0 10.5-4.5 10.5-10M103.2 172.7c-5.8 0-10.5 4.7-10.5 10.5"
        fill="none"
        stroke="#fa955e"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M100.2 182.9c0 1.8 1.5 3.2 3.3 3.2 1.8 0 3.2-1.5 3.2-3.2 0-1.8-1.5-3.3-3.2-3.3-1.9.1-3.3 1.5-3.3 3.3z"
        fill="none"
        stroke="#fa955e"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M162.8 169.1s-2.7-1.1-1.7-3.5c.8-2 3.4-2.6 5.1-1.3 1.3 1.1 1.7 3.1 1.1 4.7-.7 2-3 2.8-5 2.4-2.8-.6-4.3-3.5-4-6.2.2-1.9 1.3-3.1 2.6-4.4 1.9-1.8 4.6-3.7 5.5-6.3.5-1.5 0-3.4-.8-4.7-.1-.1-.8.4-.8.4-.7.5-1.1 1.2-1.5 1.9-1.1 2.1-.9 4.2-.6 6.4.2 1.6.5 3.2.7 4.9.4 3 .8 6 1.3 8.9.3 2.1.6 4.6-1.6 5.8-.7.4-1.6.4-2.3.1-.7-.3-1.3-1.1-1.2-1.9.1-1.1 1.4-1.6 2.3-1.3.4.1.8.5.8.9"
        fill="none"
        stroke="#f98a67"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M48.7 223.8s2.8-.7 2.2-3.3c-.5-2.1-3-3.1-4.8-2-1.5.9-2.1 2.8-1.8 4.5.4 2.1 2.6 3.2 4.6 3.1 2.8-.2 4.8-2.8 4.8-5.6 0-1.9-.9-3.3-2-4.7-1.6-2.1-4.1-4.3-4.6-7-.3-1.6.4-3.4 1.5-4.5.1-.1.7.5.8.5.6.6.9 1.3 1.2 2.1.8 2.2.3 4.3-.3 6.5-.5 1.6-.9 3.2-1.4 4.7-.8 2.9-1.7 5.8-2.6 8.7-.6 2-1.3 4.5.8 6 .7.5 1.5.7 2.3.4.7-.2 1.5-.9 1.5-1.7 0-1.1-1.1-1.8-2.1-1.6-.4.1-.9.4-1 .8"
        fill="none"
        stroke="#fba24e"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M161.1 199.7c-.7 2.8-6.3 3.8-12.7 2.3-6.3-1.5-10.9-5-10.2-7.8.7-2.8 6.3-3.8 12.7-2.3 6.3 1.5 10.9 5 10.2 7.8z"
        fill="none"
        stroke="#fb9d56"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M161.2 199.6l-1.8 7.5c-.7 2.8-6.3 3.8-12.5 2.3s-10.8-5-10.1-7.8l1.8-7.5"
        fill="none"
        stroke="#fb9d56"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        fill="none"
        stroke="#fb9d56"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M137.7 204.9l5.8-4.7 3.3 9.4 7.2-6.9 2.7 7M146 185.2c1 1.1.9 2.7-.1 3.5-1 .8-2.6.6-3.5-.4-1-1.1-.9-2.7.1-3.5.9-.9 2.5-.7 3.5.4zM142.7 184.7l-8.5-9.5M155.1 196.2c.4 1.3-.3 2.7-1.6 3.3-1.3.6-2.7 0-3.2-1.3-.4-1.3.3-2.7 1.6-3.3 1.3-.6 2.7 0 3.2 1.3zM155.2 196.2l16-6M159.3 191.2c.6-.8 1.3-1.6 1.9-2.4-.8-.3-1.8-.7-2.5-.2v-3.7c-.9.6-1.8 1.1-2.8 1.5-.2.1-.5.1-.7 0-.1-.1-.1-.2-.2-.3-.2-.7-.5-1.3-.9-1.9-.6.7-.9 1.5-.9 2.4M137.2 187c-.8-.4-3-1.4-3.9-1.4.3 1.2 1.9 3.8 2.3 5-.8-.6-3.1-1.8-4-2.1-.8-.3-1.6-.6-2.5-.9l4.3 6.3c-1-.1-3.1 0-3.9.8 1.7.3 3.1 1.7 3.5 3.4"
      />
      <path
      className="tree-item"
        d="M225.1 82.7c.7-.2 1.5.7 1.7 1.8.1.6.1 1.2-.1 1.7 2.3 9.6 4.6 19.1 6.9 28.7.2.7-.1 1.4-.7 1.6-.3.1-.6.1-.9.2-.6.1-1.2-.4-1.3-1.1-1.9-9.7-3.8-19.3-5.7-29-.3-.3-.6-.9-.8-1.5-.2-1.2.2-2.2.9-2.4zM217.2 115.3l.6-29.4c-.3-.4-.4-1-.4-1.6 0-1.2.6-2.2 1.3-2.2.7 0 1.3 1 1.3 2.2 0 .6-.2 1.2-.4 1.6l.6 29.4c0 .8-.5 1.4-1.1 1.4h-.9c-.6 0-1-.6-1-1.4z"
        fill="none"
        stroke="#f55d7e"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M207 227.4c-1.5 2.1-10.1 3.8-20.2 3.8-10 0-18.7-1.6-20.2-3.8m12.5-1.8c-7.3.3-12.4 1-12.4 1.8 0 1.1 9 2 20.2 2s20.2-.9 20.2-2c0-.8-5-1.5-12.2-1.8m2.3-3.4c-.5.8-1 1.5-1.4 2.1l.5.1c7.3 1 12.2-2.6 14.2-9.6h0c.3-1.6.4-3.5-.9-4.7-.4-.4-.9-.7-1.4-.8-1.1-.3-2.9-.1-4.1-.1-.5 0-1 .1-1.5.1-.1.8-.2 1.6-.3 2.3h.2c.6 0 1.2-.1 1.7-.1.7 0 1.4-.1 2.1-.1.4 0 1 0 1.3.1.2 0 .3.1.4.2.5.5.3 1.9.2 2.6-1.6 5.6-5.2 8.5-11 7.9zm-10.3-16c8.7 0 15.7.6 15.7 1.3 0 5.4-1.8 10.3-4.8 13.8-4.4 6.1-3.5 6.8-11 6.8-7 0-7.1-1.4-11-6.8-2.9-3.5-4.8-8.4-4.8-13.8.1-.7 7.2-1.3 15.9-1.3zM189.9 202.1c4.4-4.4-4.6-6.9 0-11.4m-6.9 13c4.4-4.4-4.6-6.9 0-11.4"
        fill="none"
        stroke="#fba150"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M142.7 241.2c4.4-1.6 6.6-6.3 4.9-10.5M126.7 221.2c-4.4 1.6-6.6 6.3-4.9 10.5M144.2 245.7c6.8-2.6 10.2-10.2 7.6-17M124.7 216.7c-6.4 2.6-9.6 10.2-7.2 17"
        fill="none"
        stroke="#fca943"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M123.1 241.5l11.4 5.1c.8.4 1.8-.1 2.2-.9 3.8-9.8 6.9-15 10.3-22.5.4-.9.1-1.9-.7-2.2l-11.4-5.1c-.8-.4-1.8.1-2.2.9-2.4 9.2-6.9 15-10.3 22.5-.5.8-.1 1.8.7 2.2z"
        fill="none"
        stroke="#fca943"
        strokeWidth={1.362}
        strokeMiterlimit={8}
      />
      <path
      className="tree-item"
        fill="none"
        stroke="#fca943"
        strokeWidth={1.362}
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M145.7 225.2l-14-6.5M137.7 243.2l-14-6.5"
      />
      <path
      className="tree-item"
        fill="none"
        stroke="#fca943"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M140.7 220.7l-2.5-1"
      />
      <path
      className="tree-item"
        d="M129.2 241.8c-.1.1 0 .3.3.3.3.1.5 0 .7-.1.1-.1 0-.3-.3-.3-.3-.1-.6 0-.7.1z"
        fill="none"
        stroke="#fca943"
        strokeWidth={1.362}
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        fill="none"
        stroke="#fca943"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M130.5 233.5l3.2-6.9 4.3 6.4z"
      />
      <path
      className="tree-item"
        d="M71.7 207.5c.1-1.1 1.1-1.9 2.2-1.8l3.6.5c1.1.2 1.8 1.2 1.7 2.3v.1l-7.5-1.1h0zM64.7 229.2s0-.1 0 0l2.5-18.5s0 0 0 0l-.5 3.6-.1 1M104.2 220.7l-2 13.4v.1M90.2 217.7l14 2-.2 1M90.7 218.7c-.1-.4-.3-.7-.5-1M64.7 230.2c-.6-.3-.7-.7-.1-1M101.7 235.2l-37-5M102.2 234.2c-.1.4-.3.7-.5 1"
        fill="none"
        stroke="#fba151"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M94 213.5c.1-.5.5-.8 1-.7l5.5.8c.5.1.8.5.7 1l-.3 2.1c-.1.5-.5.8-1 .7l-5.5-.8c-.5-.1-.8-.5-.7-1l.3-2.1zm-3.9 4.3l14 1.9.6-4.1c.2-1.8-1.3-3.4-3.4-3.7L79 208.7l-7.4-1c-2.1-.3-4.1.9-4.3 2.7l-.1.6-.5 3.5 14 1.9c1.4-.9 3.2-1.3 4.9-1.1 1.8.3 3.4 1.2 4.5 2.5z"
        fill="none"
        stroke="#fba151"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M95 212.7l5.5.7c.5.1.8.5.7 1l-.3 2c-.1.5-.5.8-1 .7l-5.5-.7c-.5-.1-.8-.5-.7-1l.3-2c0-.4.5-.8 1-.7zM97.5 237.6L68 233.5c-1.8-.2-3.1-1.7-3.3-3.4l37 5.1c-.7 1.7-2.4 2.7-4.2 2.4zM79.5 221.7c.4-2.8 3.1-4.7 5.9-4.3 2.9.4 4.9 3 4.5 5.7-.4 2.8-3.1 4.7-5.9 4.3-2.9-.3-4.9-2.9-4.5-5.7zm.1-4.6c-1.2 1.1-2.1 2.6-2.3 4.3-.6 4 2.3 7.6 6.4 8.2 4.1.6 7.9-2.2 8.5-6.2.2-1.7-.2-3.4-1-4.8-.2-.4-.5-.7-.8-1.1-1.1-1.2-2.7-2.1-4.6-2.3-1.8-.2-3.6.2-5 1.1-.5.2-.9.5-1.2.8z"
        fill="none"
        stroke="#fba151"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M85.4 217.2c2.7.4 4.6 3.1 4.3 5.9-.4 2.9-2.9 4.9-5.6 4.5-2.7-.4-4.6-3.1-4.3-5.9.3-2.9 2.8-4.9 5.6-4.5zM76.2 201.7c.2-1.5.3-3 .5-4.5M70.7 202.7c-.8-1-1.7-2-2.5-3M81.2 203.7c1.2-1 2.3-2 3.5-3"
        fill="none"
        stroke="#fba151"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        fill="none"
        stroke="#fdb131"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M120.2 261.7l-.5-2.5M118.2 262.7l-.5-4M117.2 264.7l-1-7.5M115.2 265.7l-1-9M113.2 263.7l-.5-4.5M111.7 262.7l-.5-2.5M110.2 264.7l-1-6M108.7 266.7l-1-9.5M107.2 268.2l-1.5-12M105.2 266.7l-1-9M103.2 264.7l-.5-4M101.7 265.7l-.5-6M100.2 267.7l-1-9.5"
      />
      <path
      className="tree-item"
        d="M91.7 263.2c-.2-9.8 12.6-13 18.6-13.1 6-.1 19.3 1.9 17.2 12.4-.4 6.2-16.2 10.5-22.2 10.6-6 .2-13.4 0-13.6-9.9z"
        fill="none"
        stroke="#fdb131"
        strokeWidth={1.362}
        strokeMiterlimit={8}
      />
      <defs>
        <path
        className="tree-item"
          id="prefix__a"
          d="M172.6 274.3c10.9-8.1 18.2-19.9 19.7-32 .1-.6-.6-1-1.1-.6-4.4 3.1-11.9 1.7-15.7-2.9-.4-.5-1.2-.2-1.2.5.7 10.2-3.2 20.9-10.8 29.3-7.6 8.3-18.7 14.2-30 15.9-.8.1-.8 1.3.1 1.4 13.8.7 28.1-3.6 39-11.6zm-38.8 11.5c11.5-1.7 23-7.8 30.8-16.3 7.8-8.6 11.9-19.7 11.2-30.3l-1.2.5c4.3 5.1 12.5 6.6 17.5 3.1l-1.1-.6c-1.5 11.8-8.6 23.2-19.2 31.1-10.6 7.9-24.7 12-38.1 11.2l.1 1.3z"
        />
      </defs>
      <use xlinkHref="#prefix__a" overflow="visible" fill="#fdb131" />
      <path
      className="tree-item"
        d="M162.2 252.6c-2.3-.5-4.1-3-3.9-5.4-.1 1.1-.4 2.3-1.3 3.2-.9.9-2.4 1.5-3.8 1.3 2.3.6 4 3 4.1 5.5.4-2.4 2.6-4.3 4.9-4.6z"
        fill="none"
        stroke="#fcad3c"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M141 261.8c.7-.3 1.5-.2 2.1.2.4-2.6 4.1-2.5 4.4.1.4 2-1.4 3.8-2.2 5.5-1.7-.6-4.2-.6-5.3-2.2-.8-1.1-.3-3 1-3.6z"
        fill="none"
        stroke="#fdb131"
        strokeWidth={1.362}
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M79 263.2c-1-.9-2.7-.7-3.9.6-1.2 1.2-1.3 2.9-.3 3.8 1 .9 2.7.7 3.9-.6 1.2-1.1 1.3-2.9.3-3.8zM79.7 264.2l-5-16.5M74.7 247.7c1.1 1.2 2.5 2.1 3.9 3 1.4.9 2.7 2 3.5 3.4.8 1.4.9 3.3-.1 4.6"
        fill="none"
        stroke="#fdb131"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M117.3 292.4c-.6-1-2.3-1.2-3.8-.4-1.4.8-2.1 2.4-1.4 3.4.6 1 2.3 1.2 3.8.4 1.4-.8 2-2.4 1.4-3.4zM117.7 293.6l-.1-16.9M117.6 276.7c.7 1.4 1.7 2.6 2.6 3.8.9 1.2 1.8 2.5 2.2 4 .3 1.5 0 3.2-1.1 4.2M84.6 285.8c-1.7.5-2.8 2.3-2.3 4.1.9 3.4 1.7 5.5 2.6 10.3l2.5-.7-1.8-7.1c.2 0 .5 0 .7-.1 1.7-.5 2.8-2.3 2.3-4.1-.5-1.8-2.3-2.9-4-2.4zM95.3 297.1c1.7-.5 2.8-2.2 2.3-4l-2.6-9.9-2.5.7c-.1 3.6 1.2 4.6 1.8 6.8-.2 0-.5 0-.7.1-1.7.5-2.8 2.2-2.3 4 .4 1.7 2.2 2.7 4 2.3z"
        fill="none"
        stroke="#fdb420"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M99.3 300l-13.5 3.6c-1.7.5-3.5-.6-4-2.4l-3.5-13.8c-.5-1.8.6-3.6 2.3-4l13.5-3.6c1.7-.5 3.5.6 4 2.4l3.5 13.8c.4 1.7-.6 3.5-2.3 4zM49.4 293.2c-.3-1.3-2.3-2-4.3-1.6-2 .4-3.4 1.8-3.1 3.1.3 1.3 2.3 2 4.3 1.6 2.1-.4 3.4-1.8 3.1-3.1zM62.4 289.4c-.3-1.4-2.3-2.2-4.3-1.8-2 .5-3.4 2-3.1 3.5.3 1.4 2.3 2.2 4.3 1.8 2.1-.6 3.4-2.1 3.1-3.5z"
        fill="none"
        stroke="#fdb420"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        fill="none"
        stroke="#fdb420"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M49.4 293.9v-17.5l13-4M49.4 282.9c4.2-3.1 7.8-3.7 12-5M62.4 289.9c0-5.8-1.1-9.2 0-17.5"
      />
      <path
      className="tree-item"
        d="M31.2 305.4c.9 1.1 2.4 1 3.5 0 1.1-1.1 1.2-2.8.4-3.9-.9-1.1-2.4-1-3.5 0-1.1 1.1-1.2 2.8-.4 3.9zM31.2 305.4l-11.3-12.2-13.2 5.7 11.2 12.3"
        fill="none"
        stroke="#fdb51c"
        strokeWidth={1.362}
        strokeMiterlimit={8}
      />
      <path
      className="tree-item"
        d="M18.2 311c.9 1 2.4.9 3.5 0 1.1-1 1.2-2.6.4-3.5-.9-1-2.4-.9-3.5 0s-1.2 2.5-.4 3.5z"
        fill="none"
        stroke="#fdb51c"
        strokeWidth={1.362}
        strokeMiterlimit={8}
      />
      <path
      className="tree-item"
        d="M.7 285.2c6.3-2.2 11.7-6.8 14.9-12.6 3.3-5.8 4.4-12.8 3-19.3 6.8 1.3 14.9-1.5 20.1-7.1-1.5 2-3.2 3.7-4.7 5.7s-2.8 4.2-2.9 6.7c-.2 2.5.9 5.1 2.8 6.5-7.7 11.2-20.2 19-33.2 20.1z"
        fill="none"
        stroke="#fdb131"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
      />
      <path
      className="tree-item"
        d="M54.3 244.7c-3.2.4-8.5 5.9-7.5 11 .3 1.3.8 2.4 1.4 3.5l.8.8-2.1 8.1 7-5.1.3.1c1.2.3 2.5.3 3.8 0 5.2-1 8.8-2.3 8.1-9.9-.7-7.5-8.6-8.9-11.8-8.5z"
        fill="none"
        stroke="#fdb131"
        strokeWidth={1.362}
        strokeMiterlimit={8}
      />
      <path
      className="tree-item"
        fill="none"
        stroke="#fdb131"
        strokeWidth={1.362}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M57.2 248.7l-1.5 3.2-3.5.4 2.6 2.4-.7 3.5 3.1-1.8 3.1 1.8-.8-3.5 2.7-2.4-3.6-.4z"
      />
    </svg>

    )
}

export default Tree;