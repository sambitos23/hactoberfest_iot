import React, { useEffect, useState } from "react";

function CountDown() {
  const calculateTimeLeft = () => {
    let year = new Date().getFullYear();
    const difference = +new Date(`${year}-10-9`) - +new Date();
    let timeLeft = {};    

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]}
      </span>
    );
  });
  return (
    <div className="flex items-center justify-center px-5 py-5">
      {timerComponents.length ? (
        <div className="text-yellow-500">
          <div className=" text-xl lg:text-6xl text-center flex w-full items-center justify-center">
            <div className="w-18 lg:w-24 mx-1 p-2 bg-white rounded-lg">
              <div className="font-mono leading-none">
                {timeLeft.days}
              </div>
              <div className="font-mono text-xs lg:text-sm leading-none">
                Days
              </div>
            </div>
            <div className="w-18 lg:w-24 mx-1 p-2 bg-white rounded-lg">
              <div className="font-mono leading-none" >
                {timeLeft.hours}
              </div>
              <div className="font-mono text-xs lg:text-sm leading-none">
                Hours
              </div>
            </div>
            <div className="w-18 lg:w-24 mx-1 p-2 bg-white rounded-lg">
              <div className="font-mono leading-none">
                {timeLeft.minutes}
              </div>
              <div className="font-mono text-xs lg:text-sm leading-none">
                Minutes
              </div>
            </div>
            <div className=" text-lg lg:text-2xl font-bold mx-2">and</div>
            <div className="w-18 lg:w-24 mx-1 p-2 bg-white rounded-lg">
              <div className="font-mono leading-none">
                {timeLeft.seconds}
              </div>
              <div className="font-mono text-xs lg:text-sm leading-none">
                Seconds
              </div>
            </div>
          </div>
        </div>
      ) : (
        <span className="text-xl font-extrabold mx-1">Registration Time's up!</span>
      )}
    </div>
  );
}

export default CountDown;
