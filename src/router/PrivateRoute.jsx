import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "../components/spinner/spinner";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Spinner />;
  }
  if (!user) {
    return <Navigate to={"/signin"} state={location?.pathname} />;
  }
  //
  return children;
};

export default PrivateRoute;
