import React, { useEffect, useState } from "react";

function getMaxChildren(width: number) {
  if (width < 599) return 4;
  if (width < 904) return 8;
  return 12;
}

export function Resize({ children }: { children?: React.ReactNode }) {
  const [maxChildren, setMaxChildren] = useState(
    getMaxChildren(window.innerWidth)
  );

  useEffect(() => {
    function handleResize() {
      setMaxChildren(getMaxChildren(window.innerWidth));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const childrenArray = React.Children.toArray(children).slice(0, maxChildren);
  return childrenArray;
}
