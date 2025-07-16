import { Outlet } from "react-router-dom";
import Navbar from "./components/share/Navbar";
import Footer from "./components/share/Footer";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <ScrollToTop>
      <Navbar />
      <Outlet />
      <Footer />
    </ScrollToTop>
  );
}

export default App;
