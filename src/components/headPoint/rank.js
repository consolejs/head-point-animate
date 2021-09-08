import React, { useState, useEffect, useRef } from "react";

export const Rank = (props) => {
  let [num, setNum] = useState(0);
  let {count} = props;
  const step = useRef(null);
  const during = useRef(40);
  useEffect(() => {
    let raf = null;
    if (num < count) {
      if (step.current === null) {
        step.current = Math.max(Math.floor((count - num) / during.current), 1);
      }
      raf = window.requestAnimationFrame(() => {
        let n = num + step.current;
        if (n >= count) {
          step.current = null;
          n = Math.min(count, n);
        }
        setNum(n);
      });
    }

    return () => {
      window.cancelAnimationFrame(raf);
    };
  }, [num, count]);

  return (
    <span>{num} </span>
  );
};
