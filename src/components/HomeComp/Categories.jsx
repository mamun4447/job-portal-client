import WeAreHiring from "./WeAreHiring";
import { motion } from "motion/react";

const categories = [
  {
    title: "Design",
    jobs: 235,
    icon: "🎨", // Replace with icons if needed
  },
  {
    title: "Development",
    jobs: 452,
    icon: "💻",
  },
  {
    title: "Marketing",
    jobs: 189,
    icon: "📢",
  },
  {
    title: "Accounting",
    jobs: 134,
    icon: "📊",
  },
  {
    title: "Writing",
    jobs: 210,
    icon: "✍️",
  },
  {
    title: "Customer Support",
    jobs: 98,
    icon: "🎧",
  },
  {
    title: "Human Resources",
    jobs: 75,
    icon: "🧑‍💼",
  },
  {
    title: "Healthcare",
    jobs: 160,
    icon: "🩺",
  },
];

const Categories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Browse by Category
          </h2>
          <p className="text-gray-600">
            Explore top job categories to start your career journey
          </p>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat, index) => (
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              key={index}
              className="bg-blue-50 hover:bg-blue-100 transition rounded-xl p-6 flex flex-col items-center text-center shadow-sm cursor-pointer"
            >
              <div className="text-4xl mb-3">{cat.icon}</div>
              <h3 className="font-semibold text-gray-800 text-lg">
                {cat.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{cat.jobs} Jobs</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="container mx-auto m-5">
        <WeAreHiring />
      </div>
    </section>
  );
};

export default Categories;
