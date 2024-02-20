import { useEffect, useRef, useState } from 'react';

import Container from './UI/Container.tsx';
import { type Timer as TimerProps } from '../store/timers-context.tsx';

const Timer = function ({ name, duration }: TimerProps) {
  const interval = useRef<number | null>(null);
  const [remainingTime, setRemainingTime] = useState(duration * 1000);

  if (remainingTime <= 0 && interval.current) {
    clearInterval(interval.current);
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 50);
    }, 50);

    interval.current = timer;

    /* a cleanup function that's automatically called by React, right before this effect function runs again, if it ever runs again, or at least right before the component unmounts, so before the component is removed from the DOM, */
    return () => clearInterval(timer);
  }, []);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <Container as='article'>
      <h2>{name}</h2>
      <p>
        <progress
          max={duration * 1000}
          value={remainingTime}
        />
      </p>
      <p>{formattedRemainingTime}</p>
    </Container>
  );
};

export default Timer;
