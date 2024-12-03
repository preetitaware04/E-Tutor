import Navbar from "./components/Navbar/Navbar";
import NavbarBanner from "./components/Navbar/NavbarBanner";
import Hero from "./components/Hero/Hero";
import NumberCounter from "./components/NumberCount/NumberCounter";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Banner from "./components/Banner/Banner";
import { BannerData, BannerData2 } from "./mockData/data";

const App = () => {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <NavbarBanner />
      <Hero />
      <NumberCounter />
      <WhyChooseUs />
      <Banner {...BannerData} />
      <Banner {...BannerData2} reverse={true} />
    </main>
  );
};

export default App;
