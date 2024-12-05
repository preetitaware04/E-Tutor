import { motion } from "framer-motion";
import { FaComputer } from "react-icons/fa6";
import { SubjectCardList } from "../../mockData/data.jsx";
const SubjectCards = () => {
  return (
    <>
      <div className="container py-14 md:py-24">
        <div>
          {/* header section */}
          <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-5">
            <h1 className="uppercase font-semibold text-orange-500">
              Our tutor subjects
            </h1>
            <p className="font-semibold text-3xl">
              Find Online Tutor in Any Subject
            </p>
          </div>
          {/* cards section */}
          <div className="grid grid-cols-1 sm:gris-cols-2 md:grid-cols-4 gap-6">
            {SubjectCardList.map((subject) => {
              return (
                <>
                  <div className="border rounded-lg  border-secondary/20 p-4 flex justify-center items-center gap-4 hover:!scale-105 ">
                    <div>{subject.icon}</div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SubjectCards;
