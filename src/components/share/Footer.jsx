import { Link } from "react-router-dom";
import { TiWorld } from "react-icons/ti";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-gray-200 text-blue-950 pt-16 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <Link to="/" className="text-2xl font-bold  mb-4 inline-block">
            JobBox
          </Link>
          <p className="text-sm">
            JobBox is the easiest way to find your dream job. We help connect
            talented people with great companies.
          </p>
          {/* Socials */}
          <div className="flex space-x-4 mt-6">
            <Link
              to={"https://www.facebook.com/abdullah.al.mamun.695194/"}
              className="hover:text-white"
            >
              <FaFacebookF />
            </Link>

            <Link
              to={"https://www.linkedin.com/in/al-mamun-abdullah/"}
              className="hover:text-white"
            >
              <FaLinkedinIn />
            </Link>
            <Link
              to={"https://abdullah-mamun.web.app/"}
              className="hover:text-white"
            >
              <TiWorld />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className=" font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="https://abdullah-mamun.web.app/"
                className="hover:underline"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="https://abdullah-mamun.web.app"
                className="hover:underline"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link to="/all-jobs" className="hover:underline">
                Browse Jobs
              </Link>
            </li>
            <li>
              <Link to="/signin" className="hover:underline">
                Sign In
              </Link>
            </li>
          </ul>
        </div>

        {/* Categories */}
        <div>
          <h3 className="font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/all-jobs" className="hover:underline">
                Design
              </Link>
            </li>
            <li>
              <Link to="/all-jobs" className="hover:underline">
                Development
              </Link>
            </li>
            <li>
              <Link to="/all-jobs" className="hover:underline">
                Marketing
              </Link>
            </li>
            <li>
              <Link to="/all-jobs" className="hover:underline">
                Accounting
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className=" font-semibold mb-4">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>📍 Dhaka, Bangladesh</li>
            <li>✉️ abdullah.mamun67896@gmail.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-300 pt-6">
        © {new Date().getFullYear()} JobBox. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
