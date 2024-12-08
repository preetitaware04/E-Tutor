import { useState } from "react";
import { NavbarMenu } from "../../mockData/data.jsx";
import { MdComputer, MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
import ResponsiveMenu from "./ResponsiveMenu.jsx";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <div className="container flex justify-between items-center py-6">
          {/* Logo section */}
          <div className="text-2xl flex items-center gap-2 font-bold">
            <MdComputer className="text-3xl text-primary" />
            <p>E-Tutor</p>
          </div>
          {/* Menu section */}
          <div className="hidden lg:block">
            <ul className="flex items-center gap-6">
              {NavbarMenu.map((item) => {
                return (
                  <li key={item.id}>
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        `inline-block text-sm xl:text-base py-1 px-2 xl:px-3 font-semibold transition-all duration-300 ${
                          isActive ? "text-secondary" : "text-gray-600"
                        }`
                      }
                    >
                      {item.title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </div>
          {/* CTA button section  */}
          <div className="hidden lg:block space-x-6">
            <button className="font-semibold">Sign in</button>
            <button className="text-white bg-primary hover:shadow-xl font-semibold rounded-full px-6 py-2">
              Register
            </button>
          </div>
          {/* mobile hamburger menu */}
          <div
            className="lg:hidden cursor-pointer"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </motion.div>
      {/* mobile sidebar section */}
      <ResponsiveMenu isOpen={isOpen} />
    </>
  );
};

export default Navbar;
