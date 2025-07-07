import React, { useEffect, useState } from "react";
import { useWindowDimensions } from "react-native";

function getMaxChildren(width: number) {
  if (width < 599) return 4;
  if (width < 904) return 8;
  return 12;
}

export function Resize({ children }: { children?: React.ReactNode }) {
  const { width } = useWindowDimensions();
  const [maxChildren, setMaxChildren] = useState(
    getMaxChildren(window.innerWidth)
  );
  useEffect(() => {
    const max = getMaxChildren(width);
    setMaxChildren(max);
    console.log(`Max children set to: ${max} for width: ${width}`);
  }, [width]);

  const childrenArray = React.Children.toArray(children).slice(0, maxChildren);

  return childrenArray;
}
