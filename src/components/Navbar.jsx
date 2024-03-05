import { Link, NavLink } from "react-router-dom";
import logo from "../../public/Vector.png";
import { CiGlobe } from "react-icons/ci";
import { useState } from "react";
import { HiMiniBarsArrowDown } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";



const MenuItems = [
  {
    id: 1,
    title: "Product",
    link: "/",
  },
  {
    id: 2,
    title: "Solutions",
    link: "/solutions",
  },
  {
    id: 3,
    title: "Resources",
    link: "/resources",
  },
  {
    id: 4,
    title: "Enterprise",
    link: "/enterprise",
  },
  {
    id: 5,
    title: "Pricing",
    link: "/pricing",
  },
];

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


  return (
    <nav className="py-6">
     <div className="container  mx-auto flex justify-between items-center">
     <div className="flex gap-6 items-center">
        <div>
          <Link to="/">
            <img src={logo} alt="main-logo"  />
          </Link>
        </div>
     
        <div className="hidden lg:flex">
          {/* Regular menu for larger screens */}
          <ul className="flex gap-[22px] text-center">
            {MenuItems.map((item) => (
              <li
                key={item.id}
                className="text-fourth text-[18px] mt-2 flex gap-2 items-center"
               
              >
                <NavLink
                  to={item.link}
                  className={({ isActive}) =>isActive ? "font-bold text-primary transition-all duration-75" :""}
                >
                  {item.title}
                </NavLink>
               
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="lg:hidden">
          {/* Hamburger menu icon for small screens */}

          {
            isOpen?
            <button onClick={toggleMenu} className="text-black">
             <IoMdClose className="text-3xl text-primary"/>
            </button>
            :
            <button onClick={toggleMenu} className="text-black">
           <HiMiniBarsArrowDown className="text-3xl text-primary "/>
          </button>
          }
          
        </div>
      <div className="hidden lg:flex items-center gap-4">
        <div className="flex gap-2 items-center text-xl font-bold">
          <CiGlobe size={25} />
          <h3>EN</h3>
        </div>
        <div className="flex items-center gap-6">
          <Link className="text-[16px]">Contact Sales</Link>
          <Link className="text-[16px]">Login</Link>
        </div>
        <div className="group">
          <button className="buttons_v_1">
            Sign up free
            <span className="arrow ml-2">&rarr;</span>
          </button>
        </div>

      
      </div>
     
      
     </div>

     {/* Collapsed menu for small screens */}
     {isOpen && (
        <div className="lg:hidden  mt-3">
          <ul className="flex flex-col items-center">
            {MenuItems.map((item) => (
              <li key={item.id} className="text-fourth text-[18px] mt-2 flex gap-2 items-center text-center">
                <NavLink
                  to={item.link}
                  activeClassName="font-bold"
                  exact
                  onClick={toggleMenu}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;