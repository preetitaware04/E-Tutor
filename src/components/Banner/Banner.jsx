import { BannerData } from "../../mockData/data";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";
const Banner = () => {
  return (
    <div className="bg-[#f9f9f9] pb-14">
      <div className="container">
        {BannerData.map((item) => {
          return (
            <div
              key={""}
              className="grid grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0"
            >
              {/* Banner image section */}
              <div
                className={`flex justify-start items-center ${
                  item.reverse && "md:order-last md:justify-end"
                }`}
              >
                <motion.img
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
                  src={item.image}
                  alt="bannerImg"
                  className="w-[400px] h-full object-covrer"
                />
              </div>
              {/* Banner text section */}
              <div className="flex flex-col justify-center text-center md:text-left space-y-4 lg:max-w-[500px]">
                <motion.p
                  variants={SlideUp(0.5)}
                  initial="hidden"
                  whileInView={"visible"}
                  className="text-sm text-orange-600 font-semibold capitalize"
                >
                  {item.tag}
                </motion.p>
                <motion.p
                  variants={SlideUp(0.7)}
                  initial="hidden"
                  whileInView={"visible"}
                  className="text-xl lg:text-2xl font-semibold capitalize"
                >
                  {item.title}
                </motion.p>
                <motion.p
                  variants={SlideUp(0.9)}
                  initial="hidden"
                  whileInView={"visible"}
                  className="text-sm text-slate-500"
                >
                  {item.subtitle}
                </motion.p>
                <motion.div
                  variants={SlideUp(1.1)}
                  initial="hidden"
                  whileInView={"visible"}
                  className="flex justify-center md:justify-start"
                >
                  <button className="primary-btn !mt-5">Get Started</button>
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;
