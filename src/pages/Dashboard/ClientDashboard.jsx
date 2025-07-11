import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../context/AuthProvider";
import toast from "react-hot-toast";
import { useState } from "react";
import { Link } from "react-router-dom";

const ClientDashboard = () => {
  const [myPostedJobs, setMyPostedJobs] = useState([]);
  const { user } = useContext(AuthContext);
  // console.log(myPostedJobs);

  useEffect(() => {
    const fetchPostedJobs = async () => {
      try {
        const myJobs = await axios.get(
          `http://localhost:5000/allJobs?email=${user?.email}`,
          { withCredentials: true }
        );
        if (myJobs?.data?.success) {
          // console.log(myJobs?.data);
          return setMyPostedJobs(myJobs?.data?.result);
        }
        toast.error(myJobs?.data?.message);
      } catch (error) {
        toast.error(error.code);
      }
    };
    fetchPostedJobs();
  }, [user?.email]);

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
                <th className="py-3 px-4">Deadline</th>
                <th className="py-3 px-4">Applications</th>
              </tr>
            </thead>
            <tbody>
              {myPostedJobs.map((post, idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-3 px-4">{idx + 1}</td>
                  <td className="py-3 px-4">{post.title}</td>
                  <td className="py-3 px-4">{post?.applicationDeadline}</td>
                  <td className="py-3 px-4">
                    <Link
                      to={`/applications/${post?._id}`}
                      // state={post?.applied}
                      className="btn btn-link text-blue-500 hover:underline"
                    >
                      See {post?.applied?.length} applications
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {myPostedJobs?.length === 0 && (
            <p className="text-center text-gray-500 mt-6">
              No applications found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default ClientDashboard;
