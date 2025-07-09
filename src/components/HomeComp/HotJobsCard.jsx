import { CiLocationOn } from "react-icons/ci";
import { MdOutlineWatchLater } from "react-icons/md";
import { TbCategory } from "react-icons/tb";
import { Link } from "react-router-dom";
import { motion } from "motion/react";

const HotJobsCard = ({ job, id }) => {
  //   console.log(id);
  return (
    <motion.section
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      // exit={{ opacity: 0 }}
      transition={{ duration: id / 10 + 0.1 }}
      className="card border border-gray-200 rounded-2xl py-6 p-4 hover:shadow-xl hover:border-gray-300 hover:transition hover:duration-400"
    >
      {/* ===>Company Details<=== */}
      <div className="flex gap-2 items-center">
        <img src={job?.company_logo} className="w-12" />
        <div>
          <h3 className="text-lg font-bold">{job?.company} </h3>
          <span className="flex items-center gap-2 text-gray-400">
            <CiLocationOn />
            {job?.location}
          </span>
        </div>
      </div>

      {/* ===>Job Details<=== */}
      <div className="my-4">
        <h4 className="text-lg">{job?.title}</h4>
        <p className="flex items-center gap-2 text-gray-400 text-xs">
          <span className="flex gap-1 items-center">
            <TbCategory /> {job?.category}
          </span>
          <span className="flex gap-1 items-center">
            <MdOutlineWatchLater />
            {job?.applicationDeadline}
          </span>
        </p>
      </div>
      {/* Description */}
      <p>
        {job?.description.slice(0, 100)}..
        <Link
          to={`/jobs/${job?._id}`}
          className="underline hover:text-blue-500"
        >
          Details
        </Link>
      </p>

      {/* ===>Requirments<=== */}
      <div className="flex gap-1 my-2 flex-wrap">
        {job?.requirements?.map((req, id) => (
          <span
            key={id}
            className="bg-gray-300 rounded-full py-1 px-2 text-xs btn btn-sm"
          >
            {req}
          </span>
        ))}
      </div>

      {/* ===>Price and Button<=== */}
      <div className=" justify-end">
        <div className="flex justify-between items-center ">
          <span className="text-lg text-blue-5000">
            {job?.salaryRange?.max} BDT
          </span>
          <Link
            to={`/apply/${job?._id}`}
            className="btn bg-blue-500 text-white rounded hover:bg-blue-600 hover:text-white"
          >
            Apply
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default HotJobsCard;
