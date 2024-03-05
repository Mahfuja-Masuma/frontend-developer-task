import Walmart from "../../public/Walmart_Index_Only.svg.png";
import Cisco from "../../public/cisco.svg.png";
import Volvo from "../../public/Volvo_Index_Only.svg.png";
import Deloitte from "../../public/deloitte.svg.png";
import Okta from "../../public/okta.svg.png";

const Trusted = [
  {
    img: Walmart,
    alt: "Walmart",
  },
  {
    img: Cisco,
    alt: "Cisco",
  },
  {
    img: Volvo,
    alt: "Volvo",
  },
  {
    img: Deloitte,
    alt: "Deloitte",
  },
  {
    img: Okta,
    alt: "Okta",
  },
];

const TrustedSection = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="sm:py-8 py-[72px] sm:px-3 container mx-auto">
        <p className="items-center text-center sm:mb-8 mb-[60px]">
          Trusted by 45M+ users
        </p>
        <div className="flex justify-between sm:gap-3 gap-9 ">
          {Trusted.map((item, i) => (
            <div key={i}>
              <img
                src={item.img}
                alt={item.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedSection;
