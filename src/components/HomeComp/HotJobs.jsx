import { useEffect, useState } from "react";
import HotJobsCard from "./HotJobsCard";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const HotJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [allJobs, setAllJobs] = useState([]);
  const Categories = [
    "Engineering",
    "Marketing",
    "Finance",
    "Teaching",
    "Management",
    "Data Science",
    "Design",
    "Development",
  ];

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          setAllJobs(data?.result);
          return setJobs(data?.result.slice(0, 6));
        }
        toast.error(data?.message);
      });
  }, []);
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center ">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Jobs of the Day
          </h2>
          <p className="text-gray-600">
            Explore the top job listings specially picked for you
          </p>
        </div>

        {/* ===>Category Section<=== */}
        <div className="flex gap-2 justify-center my-10">
          {Categories?.map((category, id) => (
            <Link
              key={id}
              className="btn hover:border-blue-500 hover:text-blue-500"
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Job Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobs?.map((job, id) => (
            <HotJobsCard key={id} job={job} id={id} />
          ))}
        </div>
        <div className="text-center my-4">
          <Link
            to={"/all-jobs"}
            className="btn bg-blue-500 text-white hover:bg-blue-600"
          >
            All Jobs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HotJobs;
