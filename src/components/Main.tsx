"use client";
import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justi fy-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest test-gray-600">
            LET'S BUILD SOMETHING TOGETHER
          </p>

          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[%5651e5]"> Vinh</span>
          </h1>
          <h1 className="py-2 text-gray-700">A Full-Stack Web Developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            Experienced full-stack developer proficient in web development with
            a comprehensive understanding of front-end and back-end
            technologies. Dedicated to crafting seamless user experiences and
            adept at tackling challenges across the stack. Passionate about
            continuous learning and staying abreast of emerging technologies and
            best practices.
          </p>

          <div className="flex items-center justify-between m-auto py-4 max-w-[330px]">
            <a
              href="https://www.linkedin.com/in/khanhvinhnguyen/"
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/khanhvinhnguyen"
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <FaGithub />
            </a>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <Link
              href="/#contact"
              className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300"
            >
              <BsFillPersonLinesFill />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;