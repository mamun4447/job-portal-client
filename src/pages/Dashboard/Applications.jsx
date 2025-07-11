import axios from "axios";
import toast from "react-hot-toast";
import { Link, useLoaderData } from "react-router-dom";

const Applications = () => {
  const { result } = useLoaderData();
  //   console.log(result);

  const handleChangeStatus = async (e, id) => {
    console.log(e.target.value, id);
    const data = { status: e.target.value };
    const res = await axios.patch(
      `http://localhost:5000/applications/${id}`,
      data,
      { withCredentials: true }
    );
    if (res?.data?.success) {
      return toast.success(res?.data?.message);
    }
    toast.error(res?.data?.message);
  };
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold mb-6">My Applications</h2>

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl shadow-sm">
            <thead className="bg-gray-100 text-left">
              <tr>
                <th className="py-3 px-4"></th>
                <th className="py-3 px-4">Applicant Email</th>
                <th className="py-3 px-4">Resume URL</th>
                <th className="py-3 px-4">Portfolio URL</th>
                <th className="py-3 px-4">Update Status</th>
              </tr>
            </thead>
            <tbody>
              {result?.map((app, idx) => (
                <tr key={idx} className="border-t">
                  <td className="py-3 px-4">{idx + 1}</td>
                  <td className="py-3 px-4">{app.email}</td>
                  <td className="py-3 px-4">
                    <Link
                      to={app?.resume}
                      className="btn btn-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      See Resume
                    </Link>
                  </td>
                  <td className="py-3 px-4">
                    <Link
                      to={app?.portfolio}
                      className="btn btn-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Portfolio
                    </Link>
                  </td>

                  <td className="py-3 px-4">
                    <select
                      onChange={(e) => handleChangeStatus(e, app?._id)}
                      className="select select-bordered w-full select-sm"
                      defaultValue={app?.status || "Change Status"}
                    >
                      <option disabled>Change Status</option>
                      <option value="Pending">Pending</option>
                      <option value="Shortlisted">Short listed</option>
                      <option value="Scheduled">Scheduled</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {result?.length === 0 && (
            <p className="text-center text-gray-500 mt-6">
              No applications found.
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Applications;
