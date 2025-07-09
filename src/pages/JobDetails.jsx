import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Spinner from "../components/spinner/spinner";

const JobDetails = () => {
  const { loading } = useContext(AuthContext);
  const job = useLoaderData();
  // console.log(job);
  if (loading) {
    return <Spinner />;
  }
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* MAIN CONTENT */}
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2">
            <img src={job?.company_logo} className="w-15 mb-6" alt="" />
            <div className="">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                {job?.title}
              </h1>
              <p className="text-sm text-gray-600 mb-6">
                {job?.company} · {job?.location}
              </p>
            </div>
          </div>

          {/* Tags & Salary */}
          <div className="flex items-center gap-4 text-sm mb-6">
            <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
              Full-Time
            </span>
            <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full">
              ${job?.salaryRange.min} - ${job?.salaryRange.max}/month
            </span>
            <span className="text-gray-500">3 days ago</span>
          </div>

          {/* Description */}
          <h2 className="text-xl font-semibold mb-2">Job Description</h2>
          <p className="text-gray-700 mb-6">{job?.description}</p>

          {/* Responsibilities */}
          <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>

          {job?.responsibilities?.map((res, id) => (
            <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
              <li key={id}>{res}</li>
            </ul>
          ))}

          {/* Requirements */}
          <h2 className="text-xl font-semibold mb-2">Requirements</h2>
          <ul className="list-disc pl-5 text-gray-700 space-y-2">
            {job?.requirements?.map((req, id) => (
              <li key={id}>{req}</li>
            ))}
          </ul>
        </div>

        {/* SIDEBAR */}
        <aside className="bg-white shadow-sm p-6 rounded-xl">
          <h3 className="text-lg font-semibold mb-4">Company Info</h3>
          <p className="text-gray-700 mb-2">
            <strong>Name:</strong> {job?.company}
          </p>
          <p className="text-gray-700 mb-2">
            <strong>Location:</strong> {job?.location}
          </p>
          <p className="text-gray-700 mb-6">
            <strong>HR Email:</strong> {job?.hr_email}
          </p>

          <Link
            to={`/apply/${job?._id}`}
            className="btn w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Apply Now
          </Link>
        </aside>
      </div>
    </section>
  );
};

export default JobDetails;
