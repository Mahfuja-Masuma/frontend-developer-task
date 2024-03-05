import React from "react";
import Integrationsimg from "../../public/integrations.png";
import { Link } from "react-router-dom";

const Integrations = () => {
  return (
    <div className="py-8 md:py-12 lg:py-16 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row gap-6 md:gap-11 lg:gap-[180px] items-center">
        <div className="w-full md:w-[35%] lg:w-[45%]">
          <img
            src={Integrationsimg}
            alt="Miro Logo"
            className="w-full md:max-w-[400px] lg:max-w-none mx-auto"
          />
        </div>
        <div className="w-full lg:w-[40%] text-center md:text-left lg:text-left">
          <h1 className="capitalize font-bold text-fourth mb-7 text-3xl md:text-[45px] lg:text-[46px] lg:leading-[3rem] max-w-[325px] md:max-w-[345px] mx-auto lg:mx-0">
            Connect your tools, close your tabs
          </h1>
          <p className="pera text-sm md:text-base lg:text-lg max-w-[450px] mx-auto lg:mx-0 mt-2">
            Whether you want to edit your Google Docs, resolve Jira issues, or
            collaborate over Zoom, Miro has 100+ integrations with tools you
            already use and love.
          </p>
          <a
            href="#"
            className="block text-primary font-semibold mt-4 lg:mt-[52px] hover:text-primary-dark mx-auto lg:mx-0 lg:text-left"
          >
            <span className="underline">Learn more </span><span className="transition-all ml-1">&#8594;</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Integrations;
