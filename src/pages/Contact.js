import React from "react";
import Layout from "../components/Layout";

function Contact() {
  return (
    <Layout>
      <div>
        <div className="h-screen">
        <lottie-player src="https://assets5.lottiefiles.com/packages/lf20_u25cckyh.json"  background="transparent"  speed="1.5" 
         loop 
          autoplay>
        </lottie-player>
        </div>

        <div>
           <div className='w-screen flex justify-center'>

           <div className='md:w-full w-1/2 p-10 shadow-2x1 bg-gray-50'>
           <h1 className='text-2x1 font-semibold'>Contact Me</h1>
             <input type="text" placeholder='Name' className='w-full border-2  border-gray-600 rounded p-1 shadow-lg mt-5'/>
             <input type="text" placeholder='Email' className='w-full border-2  border-gray-600 rounded p-1 shadow-lg mt-5'/>
             <textarea type="text" placeholder='Message' className='w-full border-2  border-gray-600 rounded p-1 shadow-lg mt-5'/>

             <button className='bg-blue-600 rounded text-white px-5 py-1 mt-3'>SUBMIT</button>
           </div>


       </div>
        </div>
      </div>
    </Layout>
  );
}

export default Contact;
