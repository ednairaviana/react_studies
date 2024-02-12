import { useState, useEffect } from "react";

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  function formatTime() {
    const hour = time.getHours();
    const minute = time.getMinutes();
    const second = time.getSeconds();

    return `${padZero(hour)}:${padZero(minute)}:${padZero(second)}`;
  }

  function padZero(number) {
    return number < 10 ? `0${number}` : number;
  }

  return <p>{formatTime()}</p>;
}

export default Clock;
