import Navbar from "./components/Navbar/Navbar";
import NavbarBanner from "./components/Navbar/NavbarBanner";
import Hero from "./components/Hero/Hero";
import NumberCounter from "./components/NumberCount/NumberCounter";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Banner from "./components/Banner/Banner";
import SubjectCards from "./components/SubjectCard/SubjectCards";
import Testimonials from "./components/Testimonial/Testimonials";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
      <NumberCounter />
      <WhyChooseUs />
      <Banner />
      <SubjectCards />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default App;
