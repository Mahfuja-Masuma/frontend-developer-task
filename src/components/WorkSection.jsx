import { useState } from 'react';
import WorkSectionImg from '../../public/WorkSection.png';
import { Link } from 'react-router-dom';

const WorkSectionInf = [
    {
        id: 1,
        text: "Brainstorming",
        description: "Unleash creative ideas and build on them with the help of sticky notes, images, mind maps, videos, drawing capabilities — the list goes on.",
        link: "#",
    },
    {
        id: 2,
        text: "Diagramming",
        description: "Create diagrams, flowcharts, and more with our intuitive diagramming tools.",
        link: "#",
    },
    {
        id: 3,
        text: "Meetings & Workshops",
        description: "Collaborate in real-time with your team during meetings and workshops.",
        link: "#",
    },
    {
        id: 4,
        text: "Scrum Events",
        description: "Participate in various Scrum events such as sprint planning, daily stand-ups, sprint review, and sprint retrospective.",
        link: "#",
    },
    {
        id: 5,
        text: "Mapping",
        description: "Effortlessly map out your ideas, plans, and strategies.",
        link: "#",
    },
    {
        id: 6,
        text: "Research & Design",
        description: "Conduct research and design activities collaboratively with your team.",
        link: "#",
    },
    {
        id: 7,
        text: "Strategic Planning",
        description: "Strategize and plan effectively for your projects and initiatives.",
        link: "#",
    },
];

const WorkSection = () => {
    const [activeButton, setActiveButton] = useState(1); // Initialize active button to the first one

    const handleButtonClick = (id) => {
        setActiveButton(id);
    };

    const activeItem = WorkSectionInf.find(item => item.id === activeButton);

    return (
     <div className='px-4 md:px-8 lg:px-16'>
           <div className="container mx-auto py-8 ">
            <h1 className="text-3xl font-bold text-gray-800 mt-4 mb-8">Built for the way you work</h1>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                {WorkSectionInf.map((item) => (
                    <button
                        key={item.id}
                        className={`buttons_v_3 mb-2 md:mb-0 ${activeButton === item.id ? 'active' : ''}`}
                        onClick={() => handleButtonClick(item.id)}
                    >
                        {item.text}
                    </button>
                ))}
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-between items-center text-left">
                <div className="mb-8 md:w-2/5 md:mr-8">
                    <h2 className="text-xl font-bold mb-4">{activeItem.text}</h2>
                    <p className="text-gray-600 mb-4 w-[310px]">
                        {activeItem.description}
                    </p>
                    <Link to={activeItem.link} className="text-primary font-semibold hover:text-primary-dark">
                        Learn more <span className="ml-1">&#8594;</span>
                    </Link>
                </div>

                <div className="md:w-3/5">
                    <img src={WorkSectionImg} alt="WorkSectionImg" className="w-full" />
                </div>
            </div>
        </div>
     </div>
    );
};

export default WorkSection;
