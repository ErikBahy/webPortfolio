/* eslint-disable react/jsx-filename-extension */
import React from "react";

import Fade from "react-reveal/Fade";

import Button from "elements/Button";

import BuildWebsite from "assets/images/Startup.jpg";

export default function Hero() {
  const imageStyle = {
    transform: `scale(1.1)`,
  };

  return (
    <section className="hero">
      <Fade bottom>
        <div className="w-full lg:w-1/2 xl:pl-12 sm:pr-2 mt-8">
          <h2 className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-1">
            Let&apos;s build the future
          </h2>

          <h1
            className="text-5xl sm:text-6xl text-theme-blue font-bold leading-tight mb-5"
            style={{ color: "#2a8041" }}
          >
            TOGETHER!
            <br />
            <br />
          </h1>

          <p className="font-normal text-xl text-gray-400 leading-relaxed mb-16">
            Discover unparalleled opportunities with our esteemed professional
            services and comprehensive software development courses.
            <br />
            We make complex challenges fun and easy to overcome.
          </p>
          <br />

          <Button
            href="/project"
            type="link"
            className="flex w-72 h-18 items-center px-14 py-5 text-white text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200"
            style={{ backgroundColor: "#2a8041", width: 320 }}
          >
            What we offer.
            <svg
              className="ml-2 w-7 h-7 text-white animate-bounce-x"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>
      </Fade>

      <Fade bottom>
        <div className="flex pt-5 w-full justify-center items-center order-first md:w-full lg:order-last lg:w-1/2">
          <img
            className=""
            style={imageStyle}
            src={BuildWebsite}
            alt="Build Website"
          />
        </div>
      </Fade>
    </section>
  );
}
