import { useEffect, useState } from "react";
const useWindowsSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setWindowSize({
          width: window.innerWidth,
          height: window.innerHeight - 90,
        });
      };
      handleResize();
    } else {
      return;
    }
  }, []);
  return windowSize;
};

export default useWindowsSize;
