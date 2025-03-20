'use client';
import { useState, useEffect } from "react";
import { timerStyles as styles } from './timerStyles.tailwind'
import clock from '@/assets/images/clock.png'
import Image from "next/image";

const CountdownTimer = ({ initialTime = 3600 }) => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time <= 0) return;
    const timer = setInterval(() => setTime((prev) => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [time]);

  const formatTime = (seconds: number) => {
    const hrs = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hrs} : ${mins} : ${secs}`;
  };

  return (
    <div className={styles.outerContainer}>
      {/* Label */}
      <span className={styles.heading}>
        Time Remaining
      </span>

      {/* Timer Box */}
      <div className={styles.timerContainer}>
        <span className={styles.time}>{formatTime(time)}</span>

        {/* Clock Icon */}
        <Image src={clock} alt="Clock" className={styles.clockIcon} />
      </div>
    </div>
  );
};

export default CountdownTimer;
