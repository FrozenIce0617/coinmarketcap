import { useRef, useEffect } from 'react';

export const INACTIVE_INTERVAL = NaN;

const useInterval = (
  callback: () => void,
  delay: number = INACTIVE_INTERVAL,
) => {
  const savedCallback = useRef(callback);

  // Remember the latest function.
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }
    if (!Number.isNaN(delay)) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
};

export default useInterval;
