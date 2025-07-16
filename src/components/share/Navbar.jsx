import { Link, NavLink } from "react-router-dom";
import navlogo from "../../assets/jobhub-logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);

  const navLnks = [
    { title: "Home", link: "/" },
    { title: "All Jobs", link: "/all-jobs" },
    { title: "Dashboard", link: "/dashboard" },
    { title: "Post New Job", link: "/add-jobs" },
    { title: "Client Dashboard", link: "/cilent-dashboard" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          onClick={() => setActive("")}
          to="/"
          className="text-2xl font-bold text-blue-500"
        >
          <img src={navlogo} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex space-x-6 text-gray-700 font-medium">
          <ul className="list-none hidden lg:flex flex-row gap-10">
            {navLnks?.map((nav, id) => (
              <li
                key={id}
                className={`${
                  active === nav.title ? "text-blue-500" : "text-blue-950"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <Link to={nav?.link} className="hover:text-blue-500">
                  {nav?.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex flex-row-reverse gap-4">
          {/* Right Buttons */}
          <div>
            {user ? (
              <button
                onClick={logOut}
                className="bg-blue-500 text-white  btn rounded-lg hover:bg-blue-600 transition"
              >
                Sign Out
              </button>
            ) : (
              <div className=" md:flex items-center space-x-4">
                <Link
                  to="/register"
                  className="text-sm font-semibold hover:text-blue-600 underline"
                >
                  Register
                </Link>

                <Link
                  to="/signin"
                  className="bg-blue-500 text-white  btn rounded-lg hover:bg-blue-600 transition"
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu (optional placeholder) */}
          <div className="lg:hidden flex flex-1 justify-end items-center">
            {/* You can use a mobile menu button + drawer here */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 transition"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
            <div
              className={`${
                !isOpen ? "hidden" : "flex"
              } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
            >
              <div
                className={`${
                  !isOpen ? "hidden" : "flex"
                } p-6 bg-gray-200 absolute -top-10 -right-5 mx-4 my-2 min-w-[140px] z-20 rounded-xl`}
              >
                <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
                  {navLnks?.map((nav, id) => (
                    <li
                      key={id}
                      className={`font-poppins font-medium cursor-pointer text-[16px] ${
                        active === nav.title ? "text-blue-500" : "text-blue-950"
                      }`}
                      onClick={() => {
                        setIsOpen(!isOpen);
                        setActive(nav.title);
                      }}
                    >
                      <Link
                        to={nav?.link}
                        className="block text-blue-950 hover:text-blue-500"
                      >
                        {nav?.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
