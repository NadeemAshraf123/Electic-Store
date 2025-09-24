import React, { useEffect, useState } from "react";
import hotdeal from "../../assets/images/hotdeal.png";

const HotDeal: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 15,
    minutes: 30,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) seconds--;
        else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else if (days > 0) {
          days--;
          hours = 23;
          minutes = 59;
          seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="p-4 mt-5 min-h-[400px] flex items-center"
      style={{
        backgroundImage: `url(${hotdeal})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container w-full mx-auto my-12">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div className="flex justify-center gap-2">
            {Object.entries(timeLeft).map(([unit, value]) => (
              <div
                key={unit}
                className="bg-red-600 text-white rounded-full w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center font-bold shadow"
              >
                <span className="text-sm md:text-base">{value}</span>
                <span className="text-xs uppercase">{unit}</span>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold uppercase text-gray-800">
            Hot Deal This Week
          </h2>

          <p className="text-lg text-gray-600">
            New Collection Up to{" "}
            <span className="text-red-600 font-semibold">50% OFF</span>
          </p>

          <button className="bg-red-600 text-white font-semibold px-6 py-2 rounded-full hover:bg-red-700 transition">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HotDeal;
