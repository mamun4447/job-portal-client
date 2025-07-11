import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import SmallSpinner from "../../components/spinner/SmallSpinner";
import Spinner from "../../components/spinner/spinner";
import axios from "axios";

const Register = () => {
  const { createUser, googleSignIn, loading } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  // if (loading) {
  //   return <Spinner />;
  // }

  //===>Google Login<===//
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        toast.success("User successfully logged In!");
        navigate(location?.state || "/");
      })
      .catch((error) => toast.error(error.code));
  };

  //===>Handle User Register<===//
  const handleCreateUser = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const password = formData.get("password");
    const confirmPassword = formData.get("confirmPassword");

    createUser(email, password)
      .then((res) => {
        toast.success(`${name}'s Account Registered Successfully!`);
        navigate(location?.state || "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        {/* Logo and Heading */}
        <div className="mb-6 text-center">
          <Link to="/" className="text-3xl font-bold text-blue-950">
            Start for free Today
          </Link>
          <p className="text-sm text-gray-500 mt-2">Create your account</p>
        </div>

        {/* Google Sign Up */}
        <button
          onClick={handleGoogleSignIn}
          className="w-full flex items-center justify-center border rounded-lg py-2 mb-4 hover:bg-gray-100 transition"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          <span className="text-sm text-gray-700 font-medium">
            Sign up with Google
          </span>
        </button>

        <div className="flex items-center my-4">
          <div className="flex-grow h-px bg-gray-300"></div>
          <span className="px-2 text-sm text-gray-500">or</span>
          <div className="flex-grow h-px bg-gray-300"></div>
        </div>

        {/* Form */}
        <form onSubmit={handleCreateUser} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* ===check box=== */}
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" className="accent-blue-500" />
            <p>
              I agree to the{" "}
              <Link
                to="/terms"
                className="text-blue-900 hover:underline hover:text-blue-600"
              >
                terms and conditions
              </Link>
            </p>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-950 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {loading && <SmallSpinner />} Create Account
          </button>
        </form>

        {/* Login Link */}
        <p className="mt-6 text-center text-sm">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-blue-900 hover:underline hover:text-blue-600"
          >
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
