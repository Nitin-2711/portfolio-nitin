"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { EyeIcon, SparklesIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";
import MagicButton from "./MagicButton";
import Lottie from "react-lottie";
import animationData from "./confetti.json"
import DevImg from "../ui/DevImg";
import Link from "next/link";

const HeroContent = () => {
  const [copied, setCopied] = useState(false)
  const [showResume, setShowResume] = useState(false)
  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleViewResume = () => {
    setShowResume(true);
  }
  const handleCopy = () => {
    setCopied(true)
    // Create a link element
    const link = document.createElement("a");

    // Set the link's href to the resume PDF file in the public folder
    link.href = "/resume.pdf";

    // Set the download attribute to trigger the download
    link.download = "resume.pdf";

    // Append the link to the document body
    document.body.appendChild(link);

    // Programmatically click the link to trigger the download
    link.click();

    // Remove the link from the document
    document.body.removeChild(link);
  };
  return (
    <>
      {showResume &&
        <motion.div
          initial="hidden"
          animate="visible"
          className="h-[80vh] md:w-[60vw] w-[90vw] overflow-y-scroll resume-modal fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col z-50 backdrop-blur-md bg-black/20 rounded-lg"
        >
          <XMarkIcon className="w-6 h-6 text-white ml-auto cursor-pointer fixed right-8 top-8" onClick={() => setShowResume(false)} />
          <img
            src="/resume.png"
            alt="resume"
            className="w-full"
          />
        </motion.div>
      }
      <motion.div
        initial="hidden"
        animate="visible"
        className="flex flex-row items-center justify-center md:px-20 px-4 mt-40 w-full z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
          <motion.div
            variants={slideInFromTop}
            className="Welcome-box mx-auto md:mx-0 py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">
              Android Developer Portfolio
            </h1>
          </motion.div>
          <div className="mx-auto md:hidden md:justify-center md:items-center  flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_dark h-[120px] w-[120px] bg-no-repeat relative"
              imgSrc="/logo.png"
            />
          </div>
          <motion.div
            variants={slideInFromLeft(0.5)}
            className="flex flex-col gap-6 mt-6 md:text-6xl text-2xl text-center md:text-left font-bold text-white md:max-w-[600px] md:w-auto w-full h-auto"
          >
            <span>
              Hi, I&apos;m
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                {" "}
                Nitin,{" "}
              </span>
              an Android Developer!
            </span>
          </motion.div>

          <motion.p
            variants={slideInFromLeft(0.8)}
            className="text-lg text-center md:text-left text-gray-400 my-5 max-w-[600px]"
          >
            Delivering dynamic and engaging user experiences. Check out my projects and skills.
          </motion.p>

          <motion.div
            variants={slideInFromLeft(1)}
            className="mx-auto md:mx-0 flex flex-col relative sm:flex-row gap-2"
          >
            <div className="sm:w-1/2 relative z-10 md:w-fit">
              <Link href="/resume">
                <MagicButton
                  title="View Resume"
                  icon={<EyeIcon className="h-5 w-5 " />}
                  position="left"
                  otherClasses="!bg-indigo-500"
                />
              </Link>
            </div>
            <div className="sm:w-1/2 z-0 relative">
              <div
                className={` absolute -top-10`}
              >
                {/* <img src="/confetti.gif" alt="confetti" /> */}
                <Lottie options={defaultOptions} height={140} width={240} />
              </div>
              <MagicButton
                title="Download Resume"
                icon={<FaDownload />}
                position="left"
                handleClick={handleCopy}
                otherClasses="!bg-[#161A31]"
              />
            </div>
          </motion.div>

        </div>

        <motion.div
          variants={slideInFromRight(0.8)}
          className="w-full h-full hidden md:flex justify-center items-center relative"
        >
          <Image
            src="/mainIconsdark.svg"
            alt="work icons"
            height={650}
            width={650}
          />
        </motion.div>
      </motion.div >
    </>
  );
};


export default HeroContent;
