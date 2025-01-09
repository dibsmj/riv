import dynamic from "next/dynamic";
import { useEffect, useRef, useState, memo } from "react";

const CountUp = dynamic(() => import("react-countup"), { ssr: false });

const LazyCountUp = memo(({ start = 0, end, duration = 3, setCountStart }) => {
  const [isVisible, setIsVisible] = useState(false);
  const countUpRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (countUpRef.current) {
      observer.observe(countUpRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <span ref={countUpRef}>
      {isVisible && (
        <CountUp
          start={start}
          end={end}
          duration={duration}
          onStart={() => setCountStart(true)}
        />
      )}
    </span>
  );
});

export default LazyCountUp;
