'use client'
import React, { useState, useEffect } from 'react';
import { timerStyles as styles } from './timerStyles.tailwind';

const TimerComponent = () => {
  // Set the launch time when the component initializes (NOT inside useEffect)
  const [launchTime] = useState<number>(() => new Date().getTime() + 3600 * 1000);
  const [time, setTime] = useState({ hours: "00", minutes: "00", seconds: "00", timeLeft: 0 });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const timeLeft = launchTime - now;

      if (timeLeft <= 0) {
        return { hours: "00", minutes: "00", seconds: "00", timeLeft: 0 };
      }

      const hours = String(Math.floor((timeLeft / (1000 * 60 * 60)) % 24)).padStart(2, '0');
      const minutes = String(Math.floor((timeLeft / (1000 * 60)) % 60)).padStart(2, '0');
      const seconds = String(Math.floor((timeLeft / 1000) % 60)).padStart(2, '0');

      return { hours, minutes, seconds, timeLeft };
    };

    setTime(calculateTimeLeft()); // Update time immediately

    const timer = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [launchTime]); // Dependency array contains only launchTime (which never changes)

  return (
    <div className={styles.wrapper}>
      <div className={styles.timerContainer}>
        <span className={styles.time}>{time.hours} : {time.minutes} : {time.seconds}</span>
        <span className={styles.label}> hours to Launch</span>
      </div>
    </div>
  );
};

export default TimerComponent;
