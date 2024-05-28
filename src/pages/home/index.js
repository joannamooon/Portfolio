import "./style.css";

import { Helmet, HelmetProvider } from "react-helmet-async";
import { introdata, meta } from "../../content_option";
import { About } from '../about'
import { Link } from "react-router-dom";
import { Projects } from "../projects";
import React from "react";
import Typewriter from "typewriter-effect";

export const Home = () => {
  return (
    <HelmetProvider>
      <section id="home" className="home ">
        <Helmet>
          <meta charSet="utf-8" />
          <title> {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <div className="intro_sec d-block d-lg-flex align-items-center ">
          <div className="text order-2 order-lg-1 h-100 d-lg-flex justify-content-center">
            <div className="align-self-center ">
            <br/>                <br/>
              <div className="intro mx-auto">
             
                <h2 className="mb-1x">{introdata.title}</h2>
                <h6 className="fluidz-48 mb-1x">
                  <Typewriter
                    options={{
                      strings: [
                        introdata.animated.first,
                        introdata.animated.second,
                        introdata.animated.third,
                      ],
                      autoStart: true,
                      loop: true,
                      deleteSpeed: 10,
                    }}
                  />
                </h6>
                <br/>
                <p className="mb-1x">
                    I am currently a second year <b>Statistics and Computer Science (BS) student at the University of Waterloo</b>. My interests lie in Natural Language Processing and Human AI Interaction. I am passionate about exploring how AI can enhance communication and create more intuitive interactions between humans and machines. I aspire to research and develop innovative NLP solutions that improve user experiences and make technology more accessible. Through my studies and internships, I aim to contribute to advancements in AI that bridge the gap between human needs and technological capabilities.
                </p>
              </div>
            </div>
          </div>

     
          
        </div>
      </section>
      <About></About>
      <Projects/>
    </HelmetProvider>
  );

};
