import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div id='about' className="h-screen">
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center max-md:pt-16">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/aboutquiz.png"
              height={500}
              width={500}
            />
          </div>
          <div className="container mx-auto px-5 md:flex-row lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-center items-center text-center">
            <div className="">
              <h1 className="font-bold sm:text-4xl text-3xl mb-4 text-[#FED766] font-primary">
                About the Quiz
              </h1>
              <p className="mb-8 leading-relaxed text-white font-medium font-secondary text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="container mx-auto flex px-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-center md:text-center items-center text-center">
            <h1 className="font-primary font-bold sm:text-4xl text-3xl mb-4 text-[#FED766]">
              About CSI
            </h1>
            <p className="mb-8 leading-relaxed text-white font-medium font-secondary text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
    </div>
  );
};

export default About;
