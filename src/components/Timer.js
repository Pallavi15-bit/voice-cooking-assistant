import React, { useEffect, useState } from 'react';

const Timer = ({ duration, onEnd }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onEnd();  // Call the parent function when done
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(prev => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onEnd]);

  return (
    <div>
      <p>⏱️ {timeLeft} seconds remaining</p>
    </div>
  );
};

export default Timer;
