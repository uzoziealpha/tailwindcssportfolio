import React from "react";
//import { FaReact } from "react-icons/fa";
import Layout from "../components/Layout";
import {
  FaBootstrap,
  FaJsSquare,
  FaNodeJs,
  FaReact,
  FaEthereum,
  FaPython,
} from "react-icons/fa";
import {
  DiRubyRough,
  DiDocker,
  DiGithubBadge,
  DiSass,
  DiMongodb,
} from "react-icons/di";

function Home() {
  return (
    <Layout>
      <div>
        {/* Intro section */}
        <div className="h-screen bg-theme">
          <div
            className="grid md:grid-cols-1 grid-cols-2 h-screen items-center border-4 md:border-0
            mx-10 z-10 bg-theme
          border-white transform rotate-12 md:rotate-0"
          >
            <div className="h-1/2">
              <lottie-player
                src="https://assets1.lottiefiles.com/packages/lf20_dvl7j8ix.json"
                background="transparent"
                speed="1"
                loop
                autoplay
              ></lottie-player>
            </div>

            <div className="font-bold text-black md:px-5">
              <h1 className="text-7xl md:text-4xl">
                Hi, I'm <b className="text-yellow-500">Obi </b>
              </h1>
              <h1 className="text-4xl md:text-xl">
                A FullStack <b className="text-purple-500">Developer</b>
              </h1>
            </div>
          </div>
        </div>

        {/* Technologes Used */}

        <div className='mt-19'>
            <h1 className='text-4xl text-black-800 font-bold text-center my-8'> Technologies I USE</h1>
          <div className='grid md:grid-cols-1 grid-cols-4'>
            <FaReact size={140} color="cyan" className="w-full text-center animate-bounce" />
            <FaBootstrap
              size={140}
              color="blue"
              className="w-full text-center mt-19"
            />
            <FaJsSquare
              size={140}
              color="yellow"
              className="w-full text-center mt-19"
            />
            
            <FaNodeJs size={140} color="green" className="w-full text-center mt-19 animate-bounce" />
            
            <DiRubyRough
              size={140}
              color="red"
              className="w-full text-center mt-19"
            />
            
            <DiDocker size={140} color="cyan" className="w-full text-center mt-19" />
            
            <FaPython
              size={140}
              color="green"
              className="w-full text-center mt-19"
            />{" "}
            
            <DiGithubBadge
              size={140}
              color="black"
              className="w-full text-center mt-19"
            />
            
            <DiSass size={140} color="pink" className="w-full text-center mt-19" />
            
            <DiMongodb size={140} color="green" className="w-full text-center mt-19" />
        
            <FaEthereum
              size={140}
              color="purple"
              className="w-full text-center mt-20 animate-bounce"
            />
            
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
