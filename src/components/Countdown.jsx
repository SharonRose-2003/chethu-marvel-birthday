import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TARGET_DATE = new Date("2026-08-18T00:00:00+05:30");

function getRemainingTime() {
  const difference = TARGET_DATE.getTime() - Date.now();

  if (difference <= 0) {
    return {
      unlocked: true,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    unlocked: false,
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

export default function Countdown({ onUnlock }) {
  const [time, setTime] = useState(getRemainingTime());

  useEffect(() => {
    if (time.unlocked) {
      onUnlock();
      return;
    }

    const timer = setInterval(() => {
      const updated = getRemainingTime();
      setTime(updated);

      if (updated.unlocked) {
        clearInterval(timer);
        onUnlock();
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time.unlocked, onUnlock]);

  const units = [
    { value: time.days, label: "DAYS" },
    { value: time.hours, label: "HOURS" },
    { value: time.minutes, label: "MINUTES" },
    { value: time.seconds, label: "SECONDS" },
  ];

  return (
    <main className="countdown-screen">

      <div className="stars"></div>

      <motion.div
        className="classified"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        CLASSIFIED TRANSMISSION
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        AVENGERS DATABASE
      </motion.h1>

      <motion.div
        className="access"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="status-dot"></span>
        IDENTITY CONFIRMED
      </motion.div>

      <motion.div
        className="protocol"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <p>BIRTHDAY PROTOCOL</p>
        <h2>LOCKED</h2>
      </motion.div>

      <motion.p
        className="unlocking"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        TRANSMISSION UNLOCKS IN
      </motion.p>

      <div className="timer">
        {units.map((unit) => (
          <div className="time-unit" key={unit.label}>
            <span>
              {String(unit.value).padStart(2, "0")}
            </span>

            <small>{unit.label}</small>
          </div>
        ))}
      </div>

      <div className="security-line">
        <span></span>
        SECURE CHANNEL // EARTH-616
        <span></span>
      </div>

    </main>
  );
}