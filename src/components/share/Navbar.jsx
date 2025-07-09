import { Link } from "react-router-dom";
import navlogo from "../../assets/jobhub-logo.svg";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";
import SmallSpinner from "../spinner/SmallSpinner";

const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContext);
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-500">
          <img src={navlogo} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <Link to="/" className="hover:text-blue-600">
            Home
          </Link>
          <Link to="/jobs" className="hover:text-blue-600">
            Jobs
          </Link>
          <Link to="/dashboard" className="hover:text-blue-600">
            Dashboard
          </Link>
          <Link to="/about" className="hover:text-blue-600">
            About
          </Link>
          <Link to="/contact" className="hover:text-blue-600">
            Contact
          </Link>
        </nav>

        {/* Right Buttons */}
        <div className="">
          {user ? (
            <button
              onClick={logOut}
              className="bg-blue-500 text-white  btn rounded-lg hover:bg-blue-600 transition"
            >
              {loading && <SmallSpinner />} Sign Out
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
                {loading && <SmallSpinner />} Sign In
              </Link>
            </div>
          )}
        </div>

        {/* Mobile Menu (optional placeholder) */}
        <div className="md:hidden">
          {/* You can use a mobile menu button + drawer here */}
          <button className="text-gray-600">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
