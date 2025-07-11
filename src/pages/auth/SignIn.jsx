import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import SmallSpinner from "../../components/spinner/SmallSpinner";

const SignIn = () => {
  const { loading, userLogIn, googleSignIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  //===>Google Login<===//
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((res) => {
        toast.success("User successfully logged In!");
        navigate(location?.state || "/");
      })
      .catch((error) => toast.error(error.code));
  };

  //===>User Sign In<===//
  const handleSignIn = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    userLogIn(email, password)
      .then((res) => {
        toast.success(`Signed In Successfully!`);
        navigate(location?.state || "/");
      })
      .catch((error) => toast.error(error.code));
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-md">
        {/* Logo */}
        <div className="mb-6 text-center">
          <Link to="/" className="text-3xl font-bold text-blue-950">
            JobBox
          </Link>
          <p className="text-sm text-gray-500 mt-2">
            Welcome back! Please sign in.
          </p>
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
        <form onSubmit={handleSignIn} className="space-y-5">
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
              placeholder="Enter your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-blue-600" />
              Remember me
            </label>
            <Link
              to="/forgot-password"
              className="text-blue-950 hover:underline hover:text-blue-500"
            >
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="flex items-center justify-center gap-2 w-full bg-blue-950 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            {loading && <SmallSpinner />}
            Sign In
          </button>
        </form>

        {/* Register Link */}
        <p className="mt-6 text-center text-sm">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-950 hover:text-blue-600 hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
