import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import SmallSpinner from "../components/spinner/SmallSpinner";
import toast from "react-hot-toast";
import { Navigate, useNavigate } from "react-router-dom";

const AddJob = () => {
  const { user } = useContext(AuthContext);
  const { loading } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    company: "",
    company_logo: "",
    location: "",
    category: "",
    jobType: "",
    salaryRange: { min: "", max: "", currency: "bdt" },
    applicationDeadline: "",
    hr_name: "",
    hr_email: `${user?.email}`,
    description: "",
    requirements: [],
    responsibilities: [],
    status: "active",
  });
  const navigate = useNavigate();

  const [reqInput, setReqInput] = useState("");
  const [respInput, setRespInput] = useState("");
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes("salary")) {
      setFormData((prev) => ({
        ...prev,
        salaryRange: {
          ...prev.salaryRange,
          [name.split(".")[1]]: value,
        },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addTag = (type) => {
    if (type === "requirements" && reqInput) {
      setFormData((prev) => ({
        ...prev,
        requirements: [...prev.requirements, reqInput],
      }));
      setReqInput("");
    }
    if (type === "responsibilities" && respInput) {
      setFormData((prev) => ({
        ...prev,
        responsibilities: [...prev.responsibilities, respInput],
      }));
      setRespInput("");
    }
  };

  const removeTag = (type, index) => {
    setFormData((prev) => ({
      ...prev,
      [type]: prev[type].filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/jobs", formData);
      if (res?.data?.success) {
        navigate("/cilent-dashboard");
        return toast.success(res?.data?.message);
      }
      toast.error(res?.data?.message);
    } catch (err) {
      toast.error(err.code);
      console.log(err);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow space-y-6"
    >
      <h2 className="text-2xl font-bold">Post a New Job</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Job Title */}
        <div>
          <p>Job Title</p>
          <input
            type="text"
            name="title"
            placeholder="Job Title"
            value={formData.title}
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* Company name */}
        <div>
          <p>Company name</p>
          <input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* Company logo url */}
        <div>
          <p>Company Logo</p>
          <input
            type="url"
            name="company_logo"
            placeholder="Company Logo URL"
            value={formData.company_logo}
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* Location  */}
        <div>
          <p>Company location</p>
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={formData.location}
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* Catagories */}
        <div>
          <p>Category</p>
          <select
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="input"
          >
            <option disabled defaultValue="Select a category">
              Select a category
            </option>
            {Categories?.map((category, id) => (
              <option key={id} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* job Type */}
        <div>
          <p>Job Type</p>
          <input
            type="text"
            name="jobType"
            placeholder="Job Type (e.g. Remote, Hybrid)"
            value={formData.jobType}
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* Minimum Salary */}
        <div>
          <p>Min Salary</p>
          <input
            name="salary.min"
            placeholder="Salary Min"
            type="number"
            value={formData.salaryRange.min}
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* Max salary */}
        <div>
          <p>Mas Salary</p>
          <input
            name="salary.max"
            placeholder="Salary Max"
            type="number"
            value={formData.salaryRange.max}
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* Currency */}
        <div>
          <p>Currency</p>
          <input
            type="text"
            name="salary.currency"
            placeholder="Currency"
            value={formData.salaryRange.currency}
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* Application Deadline */}
        <div>
          <p>Application Deadline</p>
          <input
            name="applicationDeadline"
            placeholder="Application Deadline"
            type="date"
            value={formData.applicationDeadline}
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* HR name */}
        <div>
          <p>HR Name</p>
          <input
            type="text"
            name="hr_name"
            placeholder="HR Name"
            value={formData.hr_name}
            onChange={handleChange}
            className="input"
          />
        </div>

        {/* HR Email */}
        <div>
          <p>HR Email</p>
          <input
            type="email"
            name="hr_email"
            // placeholder="HR Email"
            // defaultValue={user?.email}
            value={formData.hr_email}
            onChange={handleChange}
            className="input"
          />
        </div>
      </div>

      {/* Description */}
      <div className="w-full pr-2">
        <p>Description</p>
        <textarea
          type="text"
          name="description"
          placeholder="Job Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="w-full border rounded-lg px-4 py-2"
        ></textarea>
      </div>

      {/* Requirements */}
      <div>
        <label className="block font-medium">Requirements</label>
        <div className="flex gap-2 mt-1">
          <input
            type="text"
            value={reqInput}
            onChange={(e) => setReqInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" && (e.preventDefault(), addTag("requirements"))
            }
            placeholder="Type and press Enter"
            className="input w-full"
          />
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {formData.requirements.map((tag, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm flex items-center"
            >
              {tag}
              <button
                onClick={() => removeTag("requirements", index)}
                className="ml-2 font-bold text-blue-500 hover:text-red-500"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      {/* Responsibilities */}
      <div>
        <label className="block font-medium">Responsibilities</label>
        <div className="flex gap-2 mt-1">
          <input
            type="text"
            value={respInput}
            onChange={(e) => setRespInput(e.target.value)}
            onKeyDown={(e) =>
              e.key === "Enter" &&
              (e.preventDefault(), addTag("responsibilities"))
            }
            placeholder="Type and press Enter"
            className="input w-full"
          />
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {formData.responsibilities.map((tag, index) => (
            <span
              key={index}
              className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm flex items-center"
            >
              {tag}
              <button
                onClick={() => removeTag("responsibilities", index)}
                className="ml-2 font-bold text-green-500 hover:text-red-500"
              >
                ×
              </button>
            </span>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="flex gap-2 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
      >
        {loading && <SmallSpinner />}
        Post Job
      </button>
    </form>
  );
};

export default AddJob;
