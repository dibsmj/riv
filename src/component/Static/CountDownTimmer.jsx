/* eslint-disable no-undef */
/** @jsxImportSource @emotion/react */
import React, { useState, useEffect } from "react";

const CountdownTimer = () => {
  // Set the event date and time
  const eventDate = new Date("January 13, 2025 09:00:00").getTime();
  // Function to calculate the time left until the event
  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = eventDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return {
        days,
        hours,
        minutes,
        seconds,
      };
    }
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }
  // Initialize state for the countdown
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  // Update the countdown every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clear the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {timeLeft.days > 0 && (
        <div>
          <p className="igTimerDivPara">{timeLeft.days}</p>
          <p className="igTimmerDivName">DAYS</p>
        </div>
      )}
      <div>
        <p className="igTimerDivPara">{timeLeft.hours}</p>
        <p className="igTimmerDivName">HOURS</p>
      </div>
      <div>
        <p className="igTimerDivPara">{timeLeft.minutes}</p>
        <p className="igTimmerDivName">MINUTES</p>
      </div>
      <div>
        <p className="igTimerDivPara">{timeLeft.seconds}</p>
        <p className="igTimmerDivName">SECONDS</p>
      </div>
    </>
  );
};

export default CountdownTimer;
