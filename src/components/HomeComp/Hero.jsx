import heroLottie from "../../assets/HeroAni.json";
import Lottie from "lottie-react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row   mx-auto items-center  py-4">
      <div className="container mx-auto px-4 ">
        {/* Headline */}
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          // exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl text-center md:text-left md:text-5xl font-bold text-blue-950 mb-4 leading-tight"
        >
          Find Your <span className="text-blue-500">Dream Job</span> Easily
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          // exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="hidden md:block ml-0 text-gray-600 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
        >
          Discover thousands of job opportunities, with all the information you
          need. It's your future. Come find it.
        </motion.p>

        {/* Search Bar */}
        <div className="bg-white rounded-lg shadow-lg p-4 md:p-6 max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-4">
          <input
            type="text"
            placeholder="Job title or keyword"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
          />
          <input
            type="text"
            placeholder="Location"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none w-full"
          />
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition w-full md:w-auto">
            Search
          </button>
        </div>

        {/* Optional: Popular Searches */}
        <div className="mt-6 text-sm text-gray-500">
          <span>Popular Search: </span>
          <button className="hover:underline text-blue-500">
            Designer
          </button>,{" "}
          <button className="hover:underline text-blue-500">Developer</button>,{" "}
          <button className="hover:underline text-blue-500">React</button>
        </div>
      </div>
      <div className="max-w-lg md:w-full">
        <Lottie animationData={heroLottie} />
      </div>
    </section>
  );
};

export default Hero;
