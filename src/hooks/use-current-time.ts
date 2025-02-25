import { useEffect, useState } from 'react';

export function useCurrentTime() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000); // updates every second

    return () => clearInterval(interval);
  }, []);

  const hour = time.getHours() % 12 || 12;
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const meridiem = time.getHours() < 12 ? 'AM' : 'PM';

  return { time, hour, minutes, meridiem };
}
