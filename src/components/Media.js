import React, { useEffect } from "react";
import { gsap } from "gsap";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(DrawSVGPlugin);

const Media = () => {
  useEffect(() => {
    gsap.from(".media1", {
      display: "none",
      drawSVG: 0,
      delay: 0.9,
      duration: 1,
      stagger: 0.001,
    });
  }, []);

  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 211.5 216.5">
      <path
        d="M4.8 93.1c0-.3-.7-5.2-.5-5.3.3-.1 2.7 2.9 2.9 3.4.8-.2 3.2-1.5 3.4-1.2.2.3-1 3.1-1.3 3.6.5.6 2.6 2.7 2.4 2.9-.2.2-3.7-.8-4.1-1.1-.5.6-2.5 4-2.8 3.9-.3-.1-.3-3.3-.4-3.6-1.2-.3-3.2-.8-3.2-1.1 0-.3 3.5-1.4 3.6-1.5zM80.7 68.8l2.5 4M83.8 69.2l-3.6 2.6"
        fill="none"
        stroke="#ef7837"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        fill="none"
        stroke="#fab400"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M176.2 190.8l4.6.5M178.8 188.8l-.6 4.5M137.7 182.2l4.6.6M140.3 180.2l-.6 4.6M157.7 209.2l2 4.1M160.8 210.2l-4.1 2.6"
        className="media1"
      />
      <path
        fill="none"
        stroke="#f59d1a"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M61.7 75.2l-1.5 4.1M63.3 77.8l-4.6-1"
        className="media1"
      />
      <path
        d="M75.9 35.2c2.5 9.1-1.4 13.2-4.8 13.8-3.3.6-5.2-3.5-1.9-4.9s8.1 1.3 8.5 5.7c.4 4.4-4.7 9.9-8.1 9.7-3.4-.3-3.9-5.4-1.2-5.7s15.1 5.3-3.2 13.4"
        fill="none"
        stroke="#e8415b"
        strokeWidth={1.5}
        strokeMiterlimit={8}
        className="media1"
      />
      <path
        d="M76.8 28c-.1-1.5-.2-3.1-.7-4.5-1.3-3.9-4-6.9-7.4-8.8l1.4-3c4.1 2.2 7.4 5.9 9 10.6 1 2.8 1.2 5.7.9 8.5-.2 1.3-.8 2.6-1.8 3.5l-2.5 2.4M48.1 37.8c-.9-1.2-1.7-2.5-2.2-4-1.3-3.9-1.1-8 .5-11.6l-2.9-1.5c-1.9 4.3-2.2 9.3-.6 14.1 1 2.9 2.5 5.3 4.5 7.3.9 1 2.2 1.5 3.5 1.7l3.4.4"
        fill="none"
        stroke="#e8415b"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        d="M69 14.4c-.5 1.1-1.8 1.6-2.9 1.1-2.9-1.1-6.3-1.2-9.5-.1-3.2 1.1-5.8 3.2-7.4 5.8-.6 1-1.9 1.4-3 .9l-2.1-1c-1.2-.6-1.7-2.1-1-3.3 2.5-4 6.3-7.2 11.2-8.9 4.9-1.6 9.9-1.4 14.4.3 1.3.5 1.9 2 1.3 3.2l-1 2zM56.3 15.8l-1.1-3.6M62.3 11.8l-.6 3M51.7 18.3l-2-2.1M59.2 43.7l-4 .5c-.8.1-1.6-.2-2.1-.8l-4.8-5.3c-.5-.6-.7-1.4-.5-2.1l1-3.8M71.7 39.3l3.4-2c.7-.4 1.1-1.1 1.1-1.8l.4-6.9c0-.8-.3-1.5-.9-1.9l-3.1-2.4"
        fill="none"
        stroke="#e8415b"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        d="M72.7 23.9l-3.1-.2c-.8-.1-1.6.6-1.6 1.4l-.8 12.4c-.1.8.6 1.5 1.4 1.5l3.1.2 1-15.3zM48.7 32.1l2.2-1.9c.6-.5 1.5-.5 2.1.1l8.4 9.5c.5.6.5 1.5-.1 2.1L59 43.8 48.7 32.1zM13 5.8c3.4-.3 5.3.6 6.2 2.6.9 2 1.5 8 1.6 10.7 0 2.7-3.1 4.6-6.3 4.6s-6.2-1.2-6.6-4.1c-.4-2.9.3-8.3.8-10.2.5-2 1.7-3.4 4.3-3.6zM6.7 9.8l2 .5M5.7 14.8l2.5-.6M6.2 18.8l1.6-.6M21.7 9.2l-2.5.6M22.7 13.2l-2.5.6M22.3 18.2l-1.6.6"
        fill="none"
        stroke="#e8415b"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        d="M11.3 10.4c.1-.8.9-1 1.1-.1.2.8.9 7.4.8 9.2-.1 1-1.1 1.1-1.4-.1-.3-1.2-.7-7.7-.5-9zM15.3 10c.1-.9.9-1 1.1-.1.2.9.9 7.8.8 9.6-.1 1-1.1 1.2-1.4-.1-.3-1.3-.7-8.1-.5-9.4zM16.9 52.8c3.2-.3 6.3 1.7 6.8 3.7.7 3.1-2.1 5.8-5.1 6.2-3 .4-6.8-1.3-7.2-4-.5-2.6 2-5.6 5.5-5.9zM12.7 71.2c1.8.1 11.5-1.1 13-1.5"
        fill="none"
        stroke="#e8415b"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        d="M16.8 42.2c2.6-.3 4.4-1.7 6.7-1.9 1.4-.1 3.9 1 4.2 3.1.5 2.5-1.8 5.4-.7 9.4.7 2.8 6.2 8.4 6.3 13.8.1 5.5-4.8 12.3-13.5 12.6-8.7.4-16.5-3.6-17-10.1S6.9 57 7 54.1c0-2.9-2-5.4-2.1-8.3-.1-2.6 2-4.2 3.9-4.5 1.4-.2 4.6 1.2 8 .9zM14.7 71.3l-3-47.5M18.2 22.8s4.6 43.2 5 47.5M14.2 23.8l3.6 47.5M16.2 23.8l4.6 47M106.3 11.9c-3.9-1.7-5.1-3.1-7.7-4.7l-.8 7.5 8.5-2.8z"
        fill="none"
        stroke="#e8415b"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        d="M113.1 9.2c3 8.6-4.8 12.9-8.8 14.1-3.9 1.2-10.3 1-14.7-7.1-1.8-6 3.2-13.2 8.2-14.7 5-1.6 12.3-.9 15.3 7.7zM115.7 3.3l2.5-2.5M117.2 6.3c1.2-.5 2.3-1 3.5-1.5M118.2 10.3c1.2-.1 2.3-.1 3.5-.5"
        fill="none"
        stroke="#e8415b"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        d="M105.3 40.2c-.9-1.1-1.5-3.1-1.6-4.6 0-1.1 0-2.3.6-3.1.6-.8 1.8-1.1 2.7-.6.9.5 1.3 1.7 1 2.7.3-.6.9-1.2 1.6-1.3.7-.2 1.4 0 1.9.4.3.2.6.6.7 1 .1.5-.2 1.1-.5 1.5-1.4 2.4-3.8 4.1-6.4 4zM134.7 61.3c-4-.7-8-1.3-12-2M115.2 57.8c-3.8-.7-7.7-1.3-11.5-2M119.2 55.3c.3-2.7.7-5.3 1-8M118.8 63.2c-.5 2.2-1 4.3-1.5 6.5M123.7 64.2c.7 1.2 1.3 2.3 2 3.5M124.7 55.3c1-.8 2-1.7 3-2.5M114.2 52.8c-.8-1.2-1.7-2.3-2.5-3.5M114.2 62.8c-1.3.8-2.7 1.7-4 2.5M122.2 87c0 7.9-6.4 14.3-14.2 14.3-7.9 0-14.3-6.4-14.3-14.3s6.4-14.3 14.2-14.3c8 .1 14.3 6.4 14.3 14.3zM108.2 93.8c-3.9 0-7-2.9-7-6.5M108.2 80.2c3.6 0 6.5 3.1 6.5 7M108.2 97.3c-5.8 0-10.5-4.5-10.5-10M108.2 76.8c5.8 0 10.5 4.7 10.5 10.5"
        fill="none"
        stroke="#ef7837"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        d="M111.3 87c0 1.8-1.5 3.2-3.3 3.2-1.8 0-3.2-1.5-3.2-3.2 0-1.8 1.5-3.3 3.2-3.3 1.8.1 3.3 1.5 3.3 3.3zM48.3 73.2s-2.7-1.1-1.7-3.5c.8-2 3.4-2.6 5.1-1.3 1.3 1.1 1.7 3.1 1.1 4.7-.7 2-3 2.8-5 2.4-2.8-.6-4.3-3.5-4-6.2.2-1.9 1.3-3.1 2.6-4.4 1.9-1.8 4.7-3.7 5.6-6.3.5-1.5 0-3.4-.8-4.7-.1-.1-.8.4-.8.4-.7.5-1.1 1.2-1.5 1.9-1.1 2.1-.9 4.2-.6 6.4.2 1.6.5 3.3.7 4.9.4 3 .8 6 1.3 8.9.3 2.1.6 4.6-1.6 5.8-.7.4-1.6.4-2.3.1-.7-.3-1.3-1.1-1.2-1.9.1-1.1 1.4-1.6 2.3-1.3.4.1.8.5.8.9"
        fill="none"
        stroke="#ef7837"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        d="M162.2 127.5s-2.8-.7-2.2-3.2c.5-2 3-3.1 4.8-2 1.5.9 2.1 2.8 1.8 4.4-.4 2-2.6 3.1-4.6 3-2.8-.2-4.8-2.8-4.8-5.5 0-1.9.9-3.2 2-4.6 1.6-2.1 4.1-4.2 4.6-6.9.3-1.5-.4-3.3-1.5-4.5-.1-.1-.7.5-.8.5-.6.6-.9 1.3-1.2 2.1-.8 2.2-.3 4.2.3 6.3.5 1.6.9 3.1 1.4 4.7.8 2.8 1.7 5.7 2.6 8.5.6 2 1.3 4.4-.8 5.9-.7.5-1.5.7-2.3.4-.7-.2-1.5-.9-1.5-1.7 0-1.1 1.1-1.8 2.1-1.6.4.1.9.3 1 .8"
        fill="none"
        stroke="#f59d1a"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        d="M50.3 103.7c.7 2.8 6.3 3.8 12.7 2.3 6.3-1.5 10.9-5 10.2-7.8-.7-2.8-6.3-3.8-12.7-2.3-6.3 1.6-10.9 5.1-10.2 7.8z"
        fill="none"
        stroke="#ef7837"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        d="M50.2 103.7l1.8 7.5c.7 2.8 6.3 3.8 12.5 2.3s10.8-5 10.1-7.8l-1.8-7.5"
        fill="none"
        stroke="#ef7837"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        fill="none"
        stroke="#ef7837"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M73.8 108.9l-5.9-4.7-3.3 9.5-7.2-6.9-2.7 7M65.5 89.2c-1 1.1-.9 2.7.1 3.5 1 .8 2.6.6 3.5-.4 1-1.1.9-2.7-.1-3.5-1-.9-2.6-.7-3.5.4zM68.7 88.8l8.5-9.6M56.4 100.2c-.4 1.3.3 2.7 1.6 3.3 1.3.6 2.7 0 3.2-1.3.4-1.3-.3-2.7-1.6-3.3-1.4-.5-2.8.1-3.2 1.3zM56.2 100.3l-16-6.1M52.2 95.3c-.6-.8-1.3-1.6-1.9-2.4.8-.3 1.8-.7 2.5-.2V89c.9.6 1.8 1.1 2.8 1.5.2.1.5.1.7 0 .1-.1.1-.2.2-.3.2-.7.5-1.3.9-1.9.6.7.9 1.5.9 2.4M74.2 91.1c.8-.4 3-1.4 3.9-1.4-.3 1.2-1.9 3.8-2.3 5 .8-.6 3.1-1.8 4-2.1.8-.3 1.6-.6 2.5-.9L78 98c1-.1 3.1 0 3.9.8-1.7.3-3.1 1.7-3.5 3.4M44.8 131.5c-1.5 2.1-10.1 3.8-20.2 3.8-10 0-18.7-1.6-20.2-3.8m12.2-1.8c-7.2.3-12.2 1-12.2 1.8 0 1.1 9 2 20.2 2s20.2-.9 20.2-2c0-.8-5.1-1.5-12.4-1.8M3.2 118.3c-.1-.7-.3-2.1.2-2.6.1-.1.2-.2.4-.2.4-.1.9-.1 1.3-.1.7 0 1.4 0 2.1.1.6 0 1.1.1 1.7.1h.2c-.1-.8-.2-1.5-.3-2.3-.5 0-1 0-1.5-.1-1.2-.1-3-.2-4.1.1-.5.1-1 .4-1.4.8-1.3 1.2-1.2 3.2-.9 4.7h0c2 7 6.9 10.6 14.2 9.6l.5-.1c-.4-.7-.9-1.4-1.4-2.1-5.7.7-9.4-2.2-11-7.9zm37.1-6.7c0 5.4-1.8 10.3-4.8 13.8-3.9 5.3-4 6.8-11 6.8-7.5 0-6.6-.7-11-6.8-2.9-3.5-4.8-8.4-4.8-13.8 0-.7 7-1.3 15.7-1.3s15.9.6 15.9 1.3zM21.5 94.8c4.6 4.5-4.4 7 0 11.4m6.9-9.8c4.6 4.5-4.4 7 0 11.4"
        className="media1"
      />
      <path
        d="M68.7 145.3c-4.4-1.6-6.6-6.3-4.9-10.5M84.7 125.2c4.4 1.6 6.6 6.3 4.9 10.5M67.2 149.8c-6.8-2.6-10.2-10.2-7.6-17M86.7 120.8c6.4 2.6 9.6 10.2 7.2 17"
        fill="none"
        stroke="#f59d1a"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        d="M88.3 145.5l-11.4 5.1c-.8.4-1.8-.1-2.2-.9-3.8-9.8-6.9-15-10.3-22.5-.4-.9-.1-1.9.7-2.2l11.4-5.1c.8-.4 1.8.1 2.2.9 2.4 9.2 6.9 15 10.3 22.5.5.9.1 1.9-.7 2.2z"
        fill="none"
        stroke="#f59d1a"
        strokeWidth={1.5}
        strokeMiterlimit={8}
        className="media1"
      />
      <path
        fill="none"
        stroke="#f59d1a"
        strokeWidth={1.5}
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M65.7 129.3l14-6.5M73.7 147.3l14-6.5"
        className="media1"
      />
      <path
        fill="none"
        stroke="#f59d1a"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M70.7 124.8l2.5-1"
        className="media1"
      />
      <path
        d="M82.2 145.9c.1.1 0 .3-.3.3-.3.1-.5 0-.7-.1-.1-.1 0-.3.3-.3.3-.1.6 0 .7.1z"
        fill="none"
        stroke="#f59d1a"
        strokeWidth={1.5}
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        fill="none"
        stroke="#f59d1a"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M80.2 133.5l-4.4 6.3-3.1-7zM139.7 111.5c-.1-1.1-1.1-1.9-2.2-1.8l-3.6.5c-1.1.2-1.8 1.2-1.7 2.3v.1l7.5-1.1h0zM146.7 133.3c0-.1 0-.1 0 0l-2.5-18.5s0 0 0 0l.5 3.6.1 1M107.2 124.8l2 13.4v.1M121.2 121.8l-14 2 .2 1M120.7 122.8c.1-.4.3-.7.5-1M146.7 134.3c.6-.3.7-.7.1-1M109.7 139.3l37.1-5.1M109.2 138.2c.1.4.3.7.5 1"
        className="media1"
      />
      <path
        d="M117.8 119.6c.1.5-.3.9-.7 1l-5.5.8c-.5.1-.9-.3-1-.7l-.3-2.1c-.1-.5.3-.9.7-1l5.5-.8c.5-.1.9.3 1 .7l.3 2.1zm8-.1c1.8-.2 3.5.2 4.9 1.1l14-1.9-.5-3.5-.1-.6c-.3-1.8-2.2-3-4.3-2.7l-7.4 1-22.2 3.1c-2.1.3-3.7 2-3.4 3.7l.6 4.1 14-1.9c1.1-1.3 2.6-2.2 4.4-2.4z"
        fill="none"
        stroke="#f59d1a"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        d="M116.5 116.8l-5.5.7c-.5.1-.8.5-.7 1l.3 2c.1.5.5.8 1 .7l5.5-.7c.5-.1.8-.5.7-1l-.3-2c-.1-.5-.6-.8-1-.7zM113.9 141.7l29.5-4.1c1.8-.2 3.1-1.7 3.3-3.4l-37 5.1c.7 1.7 2.4 2.7 4.2 2.4zM127.5 131.5c-2.9.4-5.5-1.5-5.9-4.3-.4-2.8 1.6-5.4 4.5-5.7 2.9-.4 5.5 1.5 5.9 4.3.4 2.8-1.6 5.3-4.5 5.7zm3.3-11.1c-1.4-.9-3.2-1.3-5-1.1-1.8.2-3.4 1.1-4.6 2.3-.3.3-.6.7-.8 1.1-.9 1.4-1.3 3-1 4.8.6 4 4.4 6.7 8.5 6.2 4.1-.6 7-4.2 6.4-8.2-.2-1.7-1.1-3.2-2.3-4.3-.5-.3-.8-.6-1.2-.8z"
        fill="none"
        stroke="#f59d1a"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        d="M126.1 121.3c-2.7.4-4.6 3.1-4.3 5.9.4 2.9 2.9 4.9 5.6 4.5 2.7-.4 4.6-3.1 4.3-5.9-.4-2.9-2.9-4.9-5.6-4.5zM135.3 105.8c-.2-1.5-.3-3-.5-4.5M140.7 106.8c.8-1 1.7-2 2.5-3M130.2 107.8c-1.2-1-2.3-2-3.5-3"
        fill="none"
        stroke="#f59d1a"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        fill="none"
        stroke="#fab400"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M91.2 165.8l.5-2.6M93.2 166.8l.6-4M94.2 168.8l1.1-7.6M96.2 169.8l1-9M98.2 167.8l.5-4.6M99.7 166.8l.6-2.6M101.2 168.8l1.1-6M102.7 170.8l1.1-9.6M104.2 172.2l1.6-12M106.2 170.8l1.1-9M108.2 168.8l.6-4M109.7 169.8l.6-6M111.2 171.8l1-9.6"
        className="media1"
      />
      <path
        d="M119.7 167.3c.2-9.8-12.6-13-18.6-13.1-6-.1-19.3 1.9-17.2 12.4.4 6.2 16.2 10.5 22.2 10.6 6 .1 13.4-.1 13.6-9.9z"
        fill="none"
        stroke="#fab400"
        strokeWidth={1.5}
        strokeMiterlimit={8}
        className="media1"
      />
      <path
        d="M77.7 189.2c-13.6.8-27.8-3.4-38.6-11.4s-17.9-19.6-19.4-31.5c4.8 3.3 12.6 1.8 16.6-3-.7 10.4 3.3 21.3 11 29.8 7.8 8.4 19.1 14.4 30.4 16.1zM49.2 156.7c2.3-.5 4.1-3 3.9-5.4.1 1.1.4 2.3 1.3 3.2.9.9 2.4 1.5 3.8 1.3-2.3.6-4 3-4.1 5.5-.4-2.5-2.6-4.3-4.9-4.6z"
        fill="none"
        stroke="#fab400"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        d="M70.4 165.4c-.7-.3-1.5-.2-2.1.2-.4-2.6-4.1-2.5-4.4.1-.4 2 1.4 3.8 2.2 5.5 1.7-.6 4.2-.6 5.3-2.2.8-1.2.3-3-1-3.6z"
        fill="none"
        stroke="#fab400"
        strokeWidth={1.5}
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        d="M133.6 167.3c-1-.9-2.7-.7-3.9.6-1.2 1.2-1.3 2.9-.3 3.8 1 .9 2.7.7 3.9-.6 1.1-1.2 1.3-2.9.3-3.8zM134.3 168.2l-5.1-16.4M129.2 151.8c1.1 1.2 2.5 2.1 3.9 3 1.4.9 2.7 2 3.5 3.4.8 1.4.9 3.3-.1 4.6M92.7 199.9c-.3-1.2-1.8-1.9-3.4-1.6-1.6.3-2.8 1.5-2.5 2.7.3 1.2 1.8 1.9 3.4 1.6 1.7-.2 2.8-1.4 2.5-2.7zM92.7 201.3l5.5-16.1M98.3 185.2c.2 1.5.7 3 1.2 4.4.5 1.5.9 3 .7 4.5-.2 1.5-1.1 3.1-2.5 3.5M116.2 189.9c-1.7.5-2.8 2.3-2.3 4.1.9 3.4 1.7 5.5 2.6 10.3l2.5-.7-1.8-7.1c.2 0 .5 0 .7-.1 1.7-.5 2.8-2.3 2.3-4.1-.5-1.8-2.3-2.9-4-2.4zM126.8 201.1c1.7-.5 2.8-2.2 2.3-4l-2.6-9.9-2.5.7c-.1 3.6 1.2 4.6 1.8 6.8-.2 0-.5 0-.7.1-1.7.5-2.8 2.2-2.3 4 .5 1.8 2.3 2.8 4 2.3z"
        fill="none"
        stroke="#fab400"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        d="M130.8 204l-13.5 3.6c-1.7.5-3.5-.6-4-2.4l-3.5-13.8c-.5-1.8.6-3.6 2.3-4l13.5-3.6c1.7-.5 3.5.6 4 2.4l3.5 13.8c.5 1.8-.5 3.6-2.3 4zM152.2 200.5c-.3-1.3-2.3-2-4.3-1.6-2 .4-3.4 1.8-3.1 3.1.3 1.3 2.3 2 4.3 1.6 2.1-.4 3.4-1.8 3.1-3.1zM165.2 196.7c-.3-1.4-2.3-2.2-4.3-1.8-2 .5-3.4 2-3.1 3.5.3 1.4 2.3 2.2 4.3 1.8 2.1-.5 3.4-2.1 3.1-3.5z"
        fill="none"
        stroke="#fab400"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        fill="none"
        stroke="#fab400"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M152.2 201.3v-17.6l13-3.9M152.2 190.2c4.2-3.1 7.8-3.7 12-5M165.3 197.2c0-5.8-1.1-9.2 0-17.5"
        className="media1"
      />
      <path
        d="M180.2 209.5c-.9 1.1-2.4 1-3.5 0-1.1-1.1-1.2-2.8-.4-3.9.9-1.1 2.4-1 3.5 0 1.1 1.1 1.3 2.8.4 3.9z"
        fill="none"
        stroke="#fab400"
        strokeWidth={1.5}
        strokeMiterlimit={8}
        className="media1"
      />
      <path
        fill="none"
        stroke="#fab400"
        strokeWidth={1.5}
        strokeMiterlimit={8}
        d="M180.2 209.5l11.3-12.3 13.3 5.8-11.3 12.3"
        className="media1"
      />
      <path
        d="M193.2 215c-.9 1-2.4.9-3.5 0-1.1-1-1.2-2.6-.4-3.5.9-1 2.4-.9 3.5 0 1.1 1 1.3 2.6.4 3.5z"
        fill="none"
        stroke="#fab400"
        strokeWidth={1.5}
        strokeMiterlimit={8}
        className="media1"
      />
      <path
        d="M210.7 189.2c-6.3-2.2-11.7-6.8-14.9-12.6-3.3-5.8-4.4-12.8-3-19.3-6.8 1.3-14.9-1.5-20.1-7.1 1.5 2 3.2 3.7 4.7 5.7s2.8 4.2 2.9 6.7c.2 2.5-.9 5.1-2.8 6.5 7.7 11.2 20.3 19 33.2 20.1z"
        fill="none"
        stroke="#fab400"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        className="media1"
      />
      <path
        d="M157.1 148.8c3.2.4 8.5 5.9 7.5 11-.3 1.3-.8 2.4-1.4 3.5l-.8.8 2.1 8.1-7-5.1-.3.1c-1.2.3-2.5.3-3.8 0-5.2-1-8.8-2.3-8.1-9.9.7-7.6 8.6-8.9 11.8-8.5z"
        fill="none"
        stroke="#fab400"
        strokeWidth={1.5}
        strokeMiterlimit={8}
        className="media1"
      />
      <path
        fill="none"
        stroke="#fab400"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        d="M154.3 152.8l1.4 3.2 3.6.4-2.7 2.4.7 3.5-3-1.8-3.1 1.8.7-3.5-2.7-2.4 3.6-.4z"
        className="media1"
      />
    </svg>
  );
};

export default Media;
