import React, { useEffect, useState } from "react";
import hotdeal from "../../assets/images/hotdeal.png";

const HotDeal: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 15,
    MINS: 30,
    SECS: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, MINS, SECS } = prev;

        if (SECS > 0) SECS--;
        else if (MINS > 0) {
          MINS--;
          SECS = 59;
        } else if (hours > 0) {
          hours--;
          MINS = 59;
          SECS = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          MINS = 59;
          SECS = 59;
        }

        return { days, hours, MINS, SECS };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="p-4 mt-5 lg:min-h-[600px] flex items-center"
      style={{
        backgroundImage: `url(${hotdeal})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container w-full mx-auto my-12">
        <div className="max-w-2xl mx-auto text-center  space-y-2">
          <div className="flex justify-center md:gap-4 flex-wrap gap-2">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="bg-[#D4293B] text-white rounded-full w-20 h-20 md:w-23 md:h-23  flex flex-col items-center justify-center shadow"
              >
                <span className="text-lg md:text-3xl font-bold ">{value}</span>
                <span className="text-[10px] uppercase">{unit}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl md:mt-5 font-bold text-gray-800">
            HOT DEAL THIS WEEK
          </h2>

          <p className="text-2xl text-gray-600">
            NEW COLLECTION UPTO{" "}
            <span className="text-gray-600 ">50% OFF</span>
          </p>

          <button className="bg-[#D4293B] text-white font-semibold px-6 py-2 mt-5 rounded-full hover:bg-red-700 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HotDeal;
