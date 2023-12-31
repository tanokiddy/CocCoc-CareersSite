'use client'

import { useState } from "react";
import useEventListener from "./useEventListener";
import useIsomorphicLayoutEffect from "./useIsomorphicLayoutEffect";

export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const handleSize = () => {
    setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
    })
  }
  
  useEventListener('resize', handleSize)
  

  useIsomorphicLayoutEffect(() => {
    handleSize()
  }, []);
  return windowSize
}
