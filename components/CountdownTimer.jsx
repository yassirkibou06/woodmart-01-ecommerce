"use client"
import { useState, useRef, useEffect } from 'react';

const CountdownTimer = () => {
  const [timerDays, setTimerDays] = useState('00');
  const [timerHours, setTimerHours] = useState('00');
  const [timerMinutes, setTimerMinutes] = useState('00');
  const [timerSeconds, setTimerSeconds] = useState('00');

  let interval = useRef();

  const startTimer = () => {
    const countDownDate = new Date('Nov 30, 2023 00:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setTimerDays(days.toString().padStart(2, '0'));
        setTimerHours(hours.toString().padStart(2, '0'));
        setTimerMinutes(minutes.toString().padStart(2, '0'));
        setTimerSeconds(seconds.toString().padStart(2, '0'));
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  }, []);

  return (
    <div className="pl-5 py-4" >
      <section className="flex space-x-2">
        <div className="timer-box">
          <p className="timer-title">{timerDays}</p>
          <span className="timer-desc">Days</span>
        </div>
        <div className="timer-box">
          <p className="timer-title">{timerHours}</p>
          <span className="timer-desc">Hr</span>
        </div>
        <div className="timer-box">
          <p className="timer-title">{timerMinutes}</p>
          <span className="timer-desc">Min</span>
        </div>
        <div className="timer-box">
          <p className="timer-title">{timerSeconds}</p>
          <span className="timer-desc">Sc</span>
        </div>
      </section>
    </div>
  );
};

export default CountdownTimer;
