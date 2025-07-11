import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const ApplicantDashboard = () => {
  const { user } = useContext(AuthContext);
  const [applications, setApplications] = useState([]);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await axiosSecure.get(`/applications?email=${user?.email}`);
        if (res?.data?.success) {
          return setApplications(res?.data?.result);
        }
        toast.error(res?.data?.message);
      } catch (error) {
        toast.error(error?.code);
      }
    };

    fetchApplications();
  }, [user?.email, axiosSecure]);

  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">My Applications</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="py-3 px-4"></th>
                <th className="py-3 px-4">Job Title</th>
                <th className="py-3 px-4">Company</th>
                <th className="py-3 px-4">Status</th>
                <th className="py-3 px-4">Resume</th>
                <th className="py-3 px-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((app, idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-3 px-4">{idx + 1}</td>
                  <td className="py-3 px-4">{app.title}</td>
                  <td className="py-3 px-4">{app.company}</td>
                  {/* <td className="py-3 px-4">
                    {new Date(app.applicationDeadline).toLocaleDateString()}
                  </td> */}
                  <td className="py-3 px-4">
                    <span
                      className={`px-3 py-2 rounded-full text-sm font-medium ${
                        app.status === "Pending"
                          ? "bg-yellow-100 text-yellow-800"
                          : app.status === "Shortlisted"
                          ? "bg-green-100 text-green-700"
                          : app.status === "Scheduled"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {app?.status}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    {app?.resume ? (
                      <Link
                        to={app?.resume}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View
                      </Link>
                    ) : (
                      "N/A"
                    )}
                  </td>
                  <td className="py-3 px-4">
                    <button className="btn btn-error">Delete</button>
                    {app?.status === "Pending" && (
                      <Link className="btn btn-accent">Update</Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {applications.length === 0 && (
            <p className="text-center text-gray-500 mt-6">
              No applications found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ApplicantDashboard;
