import React from "react";
import { Buttons_v_2 } from "./Buttons";

const WorkBanner = () => {
  return (
    <div className="bg-gray-100 py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
      <div className="w-full lg:w-1/2 bg-gray-200"></div>
       
        <div className="w-full lg:w-1/2">
          <div className="text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-4xl font-semibold text-gray-800 mt-4">
              The Ways We Work
            </h1>
            <p className="text-gray-600 mt-2">
              How has our relationship with work changed?
            </p>
            <div className="mt-8">
              <Buttons_v_2 className="buttons_v_2">
                View the report{" "}
                <span className="arrow ml-2">&rarr;</span>
              </Buttons_v_2>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default WorkBanner;
