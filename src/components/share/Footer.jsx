import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + About */}
        <div>
          <Link
            to="/"
            className="text-2xl font-bold text-white mb-4 inline-block"
          >
            JobBox
          </Link>
          <p className="text-sm">
            JobBox is the easiest way to find your dream job. We help connect
            talented people with great companies.
          </p>
          {/* Socials */}
          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-white">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-white">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-white">
              <FaLinkedinIn />
            </a>
            <a href="#" className="hover:text-white">
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/jobs" className="hover:underline">
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
          <h3 className="text-white font-semibold mb-4">Categories</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/jobs?category=Design" className="hover:underline">
                Design
              </Link>
            </li>
            <li>
              <Link to="/jobs?category=Development" className="hover:underline">
                Development
              </Link>
            </li>
            <li>
              <Link to="/jobs?category=Marketing" className="hover:underline">
                Marketing
              </Link>
            </li>
            <li>
              <Link to="/jobs?category=Accounting" className="hover:underline">
                Accounting
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="text-sm space-y-2">
            <li>📍 Dhaka, Bangladesh</li>
            <li>📞 +880 1234-567890</li>
            <li>✉️ support@jobbox.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="text-center text-sm text-gray-500 mt-10 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} JobBox. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
