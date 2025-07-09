import { Outlet } from "react-router-dom";
import Navbar from "./components/share/Navbar";
import Footer from "./components/share/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
