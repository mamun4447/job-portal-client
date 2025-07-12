import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../context/AuthProvider";
import toast from "react-hot-toast";

const axiosInstance = axios.create({
  baseURL: "https://server-job-portal-seven.vercel.app",
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useContext(AuthContext);

  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (response) => {
        // console.log("Working");
        return response;
      },
      (error) => {
        // console.log(error);
        if (error.status === 401 || error.status === 403) {
          logOut()
            .then(() => toast.error(error.message))
            .catch((err) => toast.error(err.message));
        } else {
          toast.error(error.code);
        }
      }
    );
  }, [logOut]);

  return axiosInstance;
};

export default useAxiosSecure;
