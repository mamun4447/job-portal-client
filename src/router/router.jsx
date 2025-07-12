import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignIn from "../pages/auth/SignIn";
import Register from "../pages/auth/Register";
import Home from "../pages/Home/Home";
import JobDetails from "../pages/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/JobApply";
import ApplicantDashboard from "../pages/Dashboard/AplicantDashboard";
import AllJobs from "../pages/AllJobs";
import AddJob from "../pages/AddJob";
import ClientDashboard from "../pages/Dashboard/ClientDashboard";
import Applications from "../pages/Dashboard/Applications";
import axios from "axios";

// const homeLoader = async () => {
//   try {
//     const res = await axios.get("https://api.example.com/data");
//     return res.data; // loader must return data
//   } catch (err) {
//     throw new Response("Failed to load", { status: 500 });
//   }
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/jobs/:id",
        element: <JobDetails />,
        loader: ({ params }) =>
          fetch(`https://server-job-portal-seven.vercel.app/jobs/${params.id}`),
      },
      {
        path: "/apply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://server-job-portal-seven.vercel.app/jobs/${params.id}`),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <ApplicantDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/all-jobs",
        element: <AllJobs />,
        loader: () => fetch("https://server-job-portal-seven.vercel.app/jobs"),
      },
      {
        path: "/cilent-dashboard",
        element: (
          <PrivateRoute>
            <ClientDashboard />
          </PrivateRoute>
        ),
      },
      {
        path: "/applications/:job_id",
        element: (
          <PrivateRoute>
            <Applications />
          </PrivateRoute>
        ),
        loader: async ({ params }) => {
          const res = await axios.get(
            `https://server-job-portal-seven.vercel.app/applications/jobs/${params.job_id}`,
            { withCredentials: true }
          );
          return res.data; // ✅ only return the useful data
        },
      },
      {
        path: "/add-jobs",
        element: <AddJob />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
