import { useEffect, useRef } from "react";

// Define the useInterval custom hook with TypeScript
function useInterval(callback: () => void, delay: number | null) {
  const savedCallback = useRef<() => void>(() => {});

  // Set the callback function when the callback prop changes
  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Use setInterval to call the saved callback function
  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default useInterval;
