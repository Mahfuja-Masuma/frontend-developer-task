import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { FaSquareYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { GoDash } from "react-icons/go";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleSignUp = (e) => {
    e.preventDefault();
    if (email === "") {
      setEmailError("Enter your email");
    } else {
      alert("Success");
      setEmail("");
      setEmailError("");
    }
  };

  return (
    <div className="py-[30px] md:py-[96px] bg-fourth">
      <div className="container mx-auto  flex-wrap  flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-[50%] lg:w-[30%] mb-8 md:mb-0 text-center md:text-left">
          <h3 className="text-white text-xl font-semibold">
            Scan. Detect. Remove.
          </h3>
          <div className="flex gap-8 justify-center md:justify-start my-9">
            <FaTwitterSquare size={30} className="text-white" />
            <FaFacebookSquare size={30} className="text-white" />
            <FaSquareYoutube size={30} className="text-white" />
          </div>
          <div className="flex gap-5 mb-9 justify-center md:justify-start">
            <Link className="underline text-white text-sm">Privacy Policy</Link>
            <Link className="underline text-white text-sm">
              Terms of Service
            </Link>
          </div>
          <p className="text-white text-sm mb-5 md:w-[420px] md:text-left">
            Copyright © 2022 Certo Software Limited | Registered in England &
            Wales No. 10072356
          </p>
          <p className="text-white text-sm md:text-left">
            Designed & developed by{" "}
            <span className="underline">Bigger Picture</span>
          </p>
        </div>

        <div className="w-full md:w-[50%] lg:w-[30%] md:mb-0 text-center md:text-left ">
          <div className="relative  text-center md:text-left">
            <h3 className="text-white font-bold text-2xl relative z-10 w-[100px] mx-auto md:mx-0 pb-5 border-b border-white">
              Miro.
            </h3>
          </div>

          <div className="flex flex-col gap-4 text-center md:text-left mt-10 md:mt-5">
            <Link className="flex items-center justify-center md:justify-start text-secodary text-base font-semibold">
              <GoDash size={30} className="text-secodary mr-2" />
              iPhone
            </Link>
            <Link className="flex items-center justify-center md:justify-start text-secodary text-base font-semibold">
              <GoDash size={30} className="text-secodary mr-2" />
              Android
            </Link>
            <Link className="flex items-center justify-center md:justify-start text-secodary text-base font-semibold">
              <GoDash size={30} className="text-secodary mr-2" />
              Help
            </Link>
            <Link className="flex items-center justify-center md:justify-start text-secodary text-base font-semibold">
              <GoDash size={30} className="text-secodary mr-2" />
              About
            </Link>
            <Link className="flex items-center justify-center md:justify-start text-secodary text-base font-semibold">
              <GoDash size={30} className="text-secodary mr-2" />
              Insights
            </Link>
          </div>
        </div>
        {/* Sign up to our newsletter start */}
        <div className="w-full md:w-[100%] px-5 md:px-0 lg:w-[30%] mt-8 md:mt-0 mb-8 md:mb-0">
          <div className="w-full md:w-auto bg-secodary rounded-[42px] py-8 px-9 mb-3 md:mb-0 items-center">
            <h2 className="text-fourth text-xl font-bold mb-3">
              Sign up to our newsletter
            </h2>
            <p className="text-white mb-3">
              Receive the latest mobile security news, exclusive discounts &
              offers straight to your inbox!
            </p>
            <div className="flex justify-center md:justify-start">
              <input
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                type="email"
                placeholder="Email address"
                className="w-full rounded-l-full px-4 py-2 outline-none bg-white text-fourth"
              />
              <button
                onClick={handleSignUp}
                className="rounded-r-full px-6 py-2 bg-fourth outline-none text-white text-sm"
              >
                Submit
              </button>
            </div>
            {emailError && <div className="text-red-500">{emailError}</div>}
          </div>
        </div>
        {/* Sign up to our newsletter start */}
      </div>
      <div className="container mx-auto">
      <p className="text-white max-w-[90%] md:max-w-[80%] lg:max-w-[60%] mt-10 md:mt-16 lg:mt-20 p-4 md:p-0">
        Apple, the Apple logo, and iPhone are trademarks of Apple Inc.,
        registered in the U.S. and other countries. App Store is a service mark
        of Apple Inc. Android, Google Play and the Google Play logo are
        trademarks of Google LLC.
      </p>
      </div>
    </div>
  );
};

export default Footer;
