import { Link, useLoaderData } from "react-router-dom";
import HotJobsCard from "../components/HomeComp/HotJobsCard";

const AllJobs = () => {
  const loadedData = useLoaderData();
  const jobs = loadedData?.result;
  // console.log(jobs);
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

  return (
    <div className="container mx-auto px-4 my-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">
          All Jobs are here
        </h2>
        <p className="text-gray-600">
          Explore all the jobs listings specially picked for you
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
    </div>
  );
};

export default AllJobs;
