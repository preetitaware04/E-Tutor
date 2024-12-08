import Navbar from "./components/Navbar/Navbar";
import NavbarBanner from "./components/Navbar/NavbarBanner";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Index from "./components/Index/Index";
import AboutUs from "./components/AboutUs/AboutUs";
import ForStudents from "./components/ForStudents/ForStudents";
import Resources from "./components/Resources/Resources";
import ContactUs from "./components/ContactUs/ContactUs";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Router>
        <Navbar />
        <NavbarBanner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/ForStudents" element={<ForStudents />} />
          <Route path="/Resources" element={<Resources />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Routes>
        <Footer />
      </Router>
    </main>
  );
};

export default App;
