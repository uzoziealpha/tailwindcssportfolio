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

import {
  SiTailwindcss
} from "react-icons/si"

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
            <FaReact size={130} color="cyan" className="w-full text-center animate-bounce" />
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
           
            <SiTailwindcss 
            size={140}
            color="skyblue"
            className="w-full text-center mt-20 animate-bounce"/>
          </div>


        {/* Interest Banner */}
           <div className="my-20">
            <div className='text-center h-19 bg-banner'>
               <h1 className="text-white font-bold text-4xl py-10">My Tech Interests</h1>
            </div>
            <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 mt-20 rounded-lg hover:bg-gray-700 hover:text-white'>
            <div className='h-96'>
            <lottie-player 
             src="https://assets7.lottiefiles.com/packages/lf20_vbhx85ve.json" 
             background="transparent"  
             speed="0.5"  
             loop 
             autoplay>
            </lottie-player>
            </div>

            <p className='text-xl my-5 font-semibold md:px-5 px-14 py-10'>
              My 2022 interests are in Solidity, Truffle and Web3 for NFTs (Non-Fungible-Tokens) - Blockchain  Machine learning , A.I , NLP, RPA and Deep Learning
            </p>
        </div>

                {/* Dev Stack Banner */}
                <div className="my-20">
                <div className='text-center h-19 bg-banner'>
                <h1 className="text-white font-bold text-4xl py-10">Dev Stack I Use</h1>
                </div>
                <div className='md:mx-5 mx-32 shadow-2xl bg-gray-50 mt-20 rounded-lg hover:bg-gray-700 hover:text-white'>
                <div className='h-96'>
                <lottie-player 
                   src="https://assets1.lottiefiles.com/packages/lf20_aptscmnx.json"  
                   background="transparent"  
                   speed="1"  
                   loop 
                   autoplay>
                </lottie-player>
                </div>

             <div className="grid md:grid-cols-1 grid-cols-3 p-5">

               <div className='text-left'>
                 <h1 className='text-xl font-bold'>Front End</h1>
                 <hr/>
                <p className='font semi-bold mt-2'>HTML/CSS</p>
                <p className='font semi-bold mt-2'>React</p>
                <p className=' font semi-bold mt-2'>Javascript</p>
                <p className=' font semi-bold mt-2'>Redux</p>
               </div>
           
               <div className='text-center'>
                 <h1 className='text-xl font-bold'>UI / UX</h1>
                 <hr/>
                <p className='font semi-bold mt-2'>Saas</p>
                <p className='font semi-bold mt-2'>Bootstrap</p>
                <p className=' font semi-bold mt-2'>Tailwind Css</p>
                <p className=' font semi-bold mt-2'>Ant Design</p>
                <p className=' font semi-bold mt-2'>Material Ui</p>
                <p className=' font semi-bold mt-2'>Animation</p>
                <p className=' font semi-bold mt-2'>Framer Motion</p>
               </div>

               <div className='text-right'>
                 <h1 className='text-xl font-bold'>Backend and DB</h1>
                 <hr/>
                <p className='font semi-bold mt-2'>Mongo DB</p>
                <p className='font semi-bold mt-2'>AWS S2</p>
                <p className=' font semi-bold mt-2'>My Sql</p>
                <p className=' font semi-bold mt-2'>Node Js</p>
                <p className=' font semi-bold mt-2'>Express Js</p>
               </div>
               </div>
               </div>
             </div>


            {/*   MY info*/}
            <div>
              <h1 className='text-4xl text-gray-500 text-center font-bold'>
              About
            </h1>
           


            <div className='h-screen relative text-gray-800'>
              <div className='h-full'>
              <lottie-player 
              src="https://assets8.lottiefiles.com/packages/lf20_wwgmlwlh.json" 
              mode="bounce" 
              background="transparent"  
              speed="4"  
               loop
               autoplay>
             </lottie-player>
              </div>
              <div className='absolute inset-0 flex flex-col items-center justify-center'>
                   <h1 className='text-2xl font-bold '>Hi, Hello, Bonjour, 你好, Привет</h1>

                   <hr/>

                   <pre className='text xl md:text-sm my-5 font-pop font-semibold text-white'>
                     {JSON.stringify({
                         name: 'Obi Uzozie',
                         age: null,
                         gender: 'male',
                         country: 'Nigerian/American',
                         Hobbies: ['3d Sculpting, Researching, Fitness']
                     }, null, 2)}
                   </pre>
              </div>
            </div>
          </div>
          </div>
         </div>
       </div>
      
    </Layout>
  );
}

export default Home;
