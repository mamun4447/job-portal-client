import { Link } from "react-router-dom";
import hiring from "../../assets/hiring.png";

const WeAreHiring = () => {
  return (
    <section className="px-5 bg-blue-100 max-w-5xl mx-auto rounded">
      <div className=" mx-auto  grid grid-cols-3 items-center justify-between gap-10">
        {/* Text */}
        <div className="flex gap-4 items-center md:text-left col-span-2 mx-auto">
          <div className="flex flex-col">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              We Are <span className="text-blue-500">Hiring Now</span>
            </h2>
            <p className="text-blue-950 mb-6 max-w-md ">
              Join our mission to connect the right people with the right jobs.
              Be part of a growing, creative team and make a real difference.
            </p>
          </div>
          <Link
            to="/jobs"
            className="btn  bg-blue-500 text-white  rounded hover:bg-blue-600 transition"
          >
            Explore Careers
          </Link>
        </div>

        {/* Image */}
        <div className="">
          <img src={hiring} className="  " />
        </div>
      </div>
    </section>
  );
};

export default WeAreHiring;
