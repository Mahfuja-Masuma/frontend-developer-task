import { useState } from "react";
import ServiceImg from "../../public/ServiceImg.png";
import Service1 from "../../public/Servicevec.png";
import Service2 from "../../public/Servicevec2.png";
import Service3 from "../../public/Servicevec3.png";
import Service4 from "../../public/Servicevec4.png";
import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa";

const WorkSectionInf = [
  {
    id: 1,
    text: "UX & Design",
    description: "Build low-fi wireframes",
    descriptiontwo: "Involve stakeholders in the design process",
    descriptionthree: "Run engaging design workshops",
    link: "#",
  },
  {
    id: 2,
    text: "Marketing",
    description:
      "Create diagrams, flowcharts, and more with our intuitive diagramming tools.",
    link: "#",
  },
  {
    id: 3,
    text: "Product Management",
    description:
      "Collaborate in real-time with your team during meetings and workshops.",
    link: "#",
  },
  {
    id: 4,
    text: "Engineering",
    description:
      "Participate in various Scrum events such as sprint planning, daily stand-ups, sprint review, and sprint retrospective.",
    link: "#",
  },
  {
    id: 5,
    text: "Consultants",
    description: "Effortlessly map out your ideas, plans, and strategies.",
    link: "#",
  },
  {
    id: 6,
    text: "Agile Coaches",
    description:
      "Conduct research and design activities collaboratively with your team.",
    link: "#",
  },
  {
    id: 7,
    text: "Sales",
    description:
      "Strategize and plan effectively for your projects and initiatives.",
    link: "#",
  },
];

const Services = () => {
  const [activeButton, setActiveButton] = useState(1); // Initialize active button to the first one

  const handleButtonClick = (id) => {
    setActiveButton(id);
  };

  const activeItem = WorkSectionInf.find((item) => item.id === activeButton);

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-8">
        Built for all kinds of teams
      </h1>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        {WorkSectionInf.map((item) => (
          <button
            key={item.id}
            className={`buttons_v_3 mb-2 md:mb-0 ${
              activeButton === item.id ? "active" : ""
            }`}
            onClick={() => handleButtonClick(item.id)}
          >
            {item.text}
          </button>
        ))}
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center text-left">
        <div className="w-full md:w-2/5 mb-8 md:mb-0 md:mr-8">
          <h2 className="text-xl font-bold mb-4">{activeItem.text}</h2>
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              <FaCheck className="text-center mt-1" />
              <p className="text-gray-600 mb-4">{activeItem.description}</p>
            </div>
            {activeItem.descriptiontwo && (
              <div className="flex gap-4">
                <FaCheck className="text-center mt-1" />
                <p className="text-gray-600 mb-4">
                  {activeItem.descriptiontwo}
                </p>
              </div>
            )}
            {activeItem.descriptionthree && (
              <div className="flex gap-4">
                <FaCheck className="text-center mt-1" />
                <p className="text-gray-600 mb-4">
                  {activeItem.descriptionthree}
                </p>
              </div>
            )}
            <Link
              to={activeItem.link}
              className="text-primary font-semibold hover:text-primary-dark"
            >
              Learn more <span className="ml-1">&#8594;</span>
            </Link>
          </div>
          <div className="mt-8 md:mt-0">
            <p>Integrate your favorite tools</p>
            <div className="flex gap-7 mt-3">
              <img src={Service1} alt="ServiceImg" className="" />
              <img src={Service2} alt="ServiceImg" className="" />
              <img src={Service3} alt="ServiceImg" className="" />
              <img src={Service4} alt="ServiceImg" className="" />
            </div>
          </div>
        </div>
        <div className="w-full md:w-3/5">
          <img src={ServiceImg} alt="ServiceImg" className="w-full" />
        </div>
      </div>
    </div>
  );
};

export default Services;
