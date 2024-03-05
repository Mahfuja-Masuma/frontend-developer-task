import React from "react";
import banner2 from "../../public/hybridwork.png";
import { Link } from "react-router-dom";

const MiroBanner = () => {
  return (
    <div className="py-8 md:py-12 lg:py-14 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row justify-between items-center">
        
        <div className="text-center lg:text-left">
          <h1 className="heading max-w-[550px] lg:text-left">
            Work together, wherever you work
          </h1>
          <p className="pera max-w-[450px] lg:text-left mt-2">
            In the office, remote, or a mix of the two, with Miro, your team can
            connect, collaborate, and co-create in one space no matter where you
            are.
          </p>
          <a to="#" className="block text-primary font-semibold mt-4 lg:mt-6 lg:text-left hover:text-primary-dark">
            <span className="underline">Learn more</span> <span className="transition-all ml-1">&#8594;</span>
            </a>
        </div>
        <div className="lg:mr-8">
          <img
            src={banner2}
            alt="Miro Logo"
            className="w-full md:max-w-[400px] lg:max-w-none"
          />
        </div>
      </div>
    </div>
  );
};

export default MiroBanner;
