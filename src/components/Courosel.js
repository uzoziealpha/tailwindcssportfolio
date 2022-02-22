import React from "react";
import "../stylesheet/coursel.css";
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

function Courosel() {
  return (
    <div>
      <div className="courosel-parent position-relative">
        <h1 className="position-absolute top-0 start-0 end-0 text-center mt-8">
          Technologies I Use
        </h1>

        <div className="gallery">

          <span style={{'--i' : 1}}>
            <FaReact color="cyan" />
          </span>

          <span style={{'--i' : 2}}>
            <FaBootstrap color="blue" />
          </span>

          <span style={{'--i' : 3}}>
            <FaJsSquare />
          </span>

          <span style={{'--i' : 4}}>
            <FaNodeJs color="green" />
          </span>

          <span style={{'--i' : 5}}>
            <DiRubyRough />
          </span>

          <span style={{'--i' : 6}}>
            <DiDocker />
          </span>

          <span style={{'--i' : 7}}>
            <FaPython />
          </span>

          <span style={{'--i' : 8}}>
            <DiGithubBadge />
          </span>

          <span style={{'--i' : 9}}>
            <DiSass />
          </span>

          <span style={{'--i' : 10}}>
            <DiMongodb color="green" />
          </span>

          <span style={{'--i' : 11}}>
            <FaEthereum color="purple" />
          </span>
        </div>
      </div>
    </div>
  );
}

export default Courosel;
