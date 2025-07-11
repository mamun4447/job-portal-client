import { useContext, useState } from "react";
import {
  Navigate,
  useLoaderData,
  useNavigate,
  useParams,
} from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import axios from "axios";
import Spinner from "../components/spinner/spinner";
import toast from "react-hot-toast";
import SmallSpinner from "../components/spinner/SmallSpinner";

const JobApply = () => {
  const { user, loading } = useContext(AuthContext);
  const jobs_data = useLoaderData();
  const { id } = useParams();
  const navigate = useNavigate();
  // console.log(jobs_data);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const linkedIn = data.get("linkedIn");
    const gitHub = data.get("gitHub");
    const resume = data.get("resume");
    const portfolio = data.get("portfolio");
    const coverLetter = data.get("coverLetter");
    const application = {
      job_id: id,
      email: user?.email,
      linkedIn,
      gitHub,
      resume,
      portfolio,
      coverLetter,
      status: "Pending",
    };
    // console.log(application);

    try {
      const res = await axios.post("http://localhost:5000/apply", application, {
        withCredentials: true,
      });
      if (res?.data?.success) {
        navigate("/dashboard");
        return toast.success(res?.data?.message);
      }
      toast.error(res?.data?.message);
    } catch (err) {
      console.error(err);
      toast.error(err.code);
    }
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto bg-white p-6 rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-xl text-center font-bold text-gray-800 mb-4">
        Apply for{" "}
        <span className="text-blue-500">{jobs_data?.result?.title}</span>
      </h2>
      <p>For testing purpose, empty fields are allowed!</p>

      <div>
        <label className="block mb-1 text-sm">LinkedIn URL</label>
        <input
          type="url"
          name="linkedIn"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm">GitHub URL</label>
        <input
          type="url"
          name="gitHub"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div>
        <label className="block mb-1 text-sm">Portfolio URL</label>
        <input
          type="url"
          name="portfolio"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block mb-1 text-sm">Resume URL</label>
        <input
          type="url"
          name="resume"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <label className="block mb-1 text-sm">Cover Letter</label>
        <textarea
          name="coverLetter"
          rows="4"
          className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        ></textarea>
      </div>

      <button
        type="submit"
        className=" flex items-center justify-center w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
      >
        {loading && <SmallSpinner />} <span>Submit Application</span>
      </button>
    </form>
  );
};

export default JobApply;
