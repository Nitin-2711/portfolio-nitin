"use client"
import React from "react";
import {
    RxDiscordLogo,
    RxGithubLogo,
    RxInstagramLogo,
    RxTwitterLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

import Link from "next/link";

const Footer = () => {
    return (
        <div className="w-full z-50 relative h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">


                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px] pt-4">Community</div>
                        {/* <p className="flex flex-row items-center mt-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px]">Youtube</span>    
                    </p> */}
                        <Link href="https://github.com/Nitin-2711">
                            <p className="flex flex-row items-center mt-[15px] cursor-pointer">
                                <RxGithubLogo />
                                <span className="text-[15px] ml-[6px]">Github</span>
                            </p>
                        </Link>
                        <Link href="">
                            <p className="flex flex-row items-center mt-[15px] cursor-pointer">
                                <RxDiscordLogo />
                                <span className="text-[15px] ml-[6px]">Discord</span>
                            </p>
                        </Link>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px] pt-4">Social Media</div>
                        <Link href="https://www.instagram.com/its.nitin_27">
                            <p className="flex flex-row items-center mt-[15px] cursor-pointer">
                                <RxInstagramLogo />
                                <span className="text-[15px] ml-[6px]">Instagram</span>
                            </p>
                        </Link>
                        {/* <p className="flex flex-row items-center mt-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <span className="text-[15px] ml-[6px]">Twitter</span>    
                    </p> */}
                        <Link href="https://linkedin.com/in/27nitinkumar">
                            <p className="flex flex-row items-center mt-[15px] cursor-pointer">
                                <RxLinkedinLogo />
                                <span className="text-[15px] ml-[6px]">Linkedin</span>
                            </p>
                        </Link>
                    </div>
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px] pt-4">About</div>
                        {/* <p className="flex flex-row items-center mt-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p> */}
                        <Link href="/resume">
                            <p className="flex flex-row items-center mt-[15px] cursor-pointer">
                                <span className="text-[15px] ml-[6px]">Resume</span>
                            </p>
                        </Link>
                        <Link href="mailto:2711nitinkumar@gmail.com">
                            <p className="flex flex-row items-center mt-[15px] cursor-pointer">

                                <span className="text-[15px] ml-[6px]">Email</span>
                            </p>
                        </Link>
                    </div>
                </div>

                <div className="my-[20px] text-[15px] text-center">
                    &copy; Nitin Kumar 2025. All rights reserved
                </div>
            </div>
        </div>
    )
}

export default Footer
