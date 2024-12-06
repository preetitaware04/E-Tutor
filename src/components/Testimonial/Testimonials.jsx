import Slider from "react-slick";
import { TestimonialsData } from "../../mockData/data";

const Testimonials = () => {
  const setting = {
    dots: true,
    arrow: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="container py-14 md:py-24">
      <div>
        {/* header section */}
        <div className="space-y-4 p-6 text-center max-w-[600px] mx-auto mb-6">
          <h1 className="uppercase font-semibold text-orange-600">
            Our Testimonials
          </h1>
          <p className="font-semibold text-3xl">
            What Our Students Say About Us
          </p>
        </div>
        {/* Testimonial cards section */}
        <div>
          <Slider {...setting}>
            {TestimonialsData.map((item) => {
              return (
                <div key={item.id}>
                  <div className="flex flex-col gap-4 p-8 shadow-lg mx-4 rounded-xl bg-secondary/10">
                    {/* upper section */}
                    <div className="flex justify-start items-center gap-5">
                      <img
                        src={item.img}
                        alt="name"
                        className="w-16 h-16 rounded-full"
                      />
                      <div>
                        <p className="text-xl font-bold text-black/80">
                          {item.name}
                        </p>
                        <p>{item.name}</p>
                      </div>
                    </div>
                    {/* bottom section */}
                    <div className="py-6 px-3 space-y-4">
                      <p className="text-sm text-gray-500">{item.feedback}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
