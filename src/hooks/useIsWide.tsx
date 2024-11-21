import { useState, useEffect } from "react";

const useIsWide = (threshold: number) => {
  const [isWide, setIsWide] = useState(window.innerWidth > threshold);

  useEffect(() => {
    const handleResize = () => {
      setIsWide(window.innerWidth > threshold);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [threshold]);

  return isWide;
};

export default useIsWide;
