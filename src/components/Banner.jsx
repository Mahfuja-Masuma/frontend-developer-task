import bannerimg from "../../public/headerimage.png";
import { SiG2 } from "react-icons/si";
import Stars from "./Stars";
import { useState } from "react";

const Banner = () => {
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
    <footer className="py-6 lg:py-[60px]">
      <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center lg:text-left lg:w-[40%] pr-4">
          <h1 className="heading lg:w-[437px] mx-auto lg:mx-0">
            Take ideas from better to best
          </h1>
          <p className="pera lg:w-[428px] mx-auto lg:mx-0 mt-4 lg:mt-0">
            Miro is your team's visual platform to connect, collaborate, and
            create — together.
          </p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="rounded-[32px] w-full p-3  border items-center mt-8 lg:mt-5"
            type="email"
            placeholder="Enter your work email"
          />
          {emailError && <div className="text-red-500">{emailError}</div>}
          <div className="group mt-2 lg:mt-3">
            <button onClick={handleSignUp} className="buttons_v_1">
              Sign up free
              <span className="arrow ml-2">&rarr;</span>
            </button>
          </div>
          <p className="pera mt-5">Collaborate with your team within minutes</p>
          <div className="w-full  lg:w-[500px] bg-six mt-[41px] rounded-md p-[14px] flex flex-col lg:flex-row items-center justify-between mx-auto lg:mx-0">
            <div className="bg-white mb-2 lg:mb-0">
              <Stars />
              <p className="font-bold">Based on 5149+ reviews:</p>
            </div>
            <div className="flex gap-3">
              <SiG2 className="text-black" size={25} />
              <h2 className="font-extrabold text-xl">GetApp</h2>
              <h2 className="font-extrabold text-xl">CapTerra</h2>
            </div>
          </div>
        </div>
        <div className="lg:w-[50%] lg:ml-10">
          <img
            src={bannerimg}
            alt="banner image"
            className="mx-auto lg:mx-0 mb-4 lg:mb-0"
          />
        </div>
      </div>
    </footer>
  );
};

export default Banner;
