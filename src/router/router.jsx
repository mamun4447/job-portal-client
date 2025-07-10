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
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/apply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
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
        loader: () => fetch("http://localhost:5000/jobs"),
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
        loader: ({ params }) =>
          fetch(`http://localhost:5000/applications/jobs/${params.job_id}`),
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
