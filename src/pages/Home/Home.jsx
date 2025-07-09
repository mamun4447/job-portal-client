import React, { useContext } from "react";
import Hero from "../../components/HomeComp/Hero";
import Categories from "../../components/HomeComp/Categories";
import HotJobs from "../../components/HomeComp/HotJobs";
import { AuthContext } from "../../context/AuthProvider";
import Spinner from "../../components/spinner/spinner";

const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Spinner />;
  }
  return (
    <div className="container mx-auto">
      <Hero />
      <Categories />
      <HotJobs />
    </div>
  );
};

export default Home;
