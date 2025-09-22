import React, { useEffect, useState } from "react";
import laptop3 from "../../assets/images/laptop/laptop3.png"; 
import headphone3 from "../../assets/images/headphone/headphone3.png";

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
          minutes--; seconds = 59;
        } else if (hours > 0) {
          hours--; minutes = 59; seconds = 59;
        } else if (days > 0) {
          days--; hours = 23; minutes = 59; seconds = 59;
        }

        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);
  

  return (
    <section  className="bg-[#e4e7ed] p-4 mt-20 mb-15">

    <div className="container w-full mx-auto my-12 grid grid-cols-1  md:grid-cols-3 items-center">

      <div className="flex justify-center bg-transparent">
        <img
          src={laptop3}
          alt="Laptop Deal"
          className="w-full max-w-sm object-cover rounded-lg bg-transparent"
        />
      </div>

      
      <div className="text-center space-y-8">
        
        <div className="flex justify-center gap-2">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div
              key={unit}
              className="bg-red-600 text-white rounded-full md:w-20 md:h-20 flex flex-col items-center justify-center font-bold shadow"
            >
              <span className="text-xs">{value}</span>
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

      
      <div className="flex justify-center bg-transparent">
        <img
          src={headphone3}
          alt="Headphone Deal"
          className="w-full max-w-sm  object-cover rounded-lg bg-transparent "
        />
      </div>
    </div>
    </section>

  );
};

export default HotDeal;
