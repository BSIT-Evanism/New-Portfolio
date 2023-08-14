import { useEffect } from "react";
import { useState } from "react";

function useMousePosition() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const updateMousePosition = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition)
    return () => {
      window.addEventListener("mousemove", updateMousePosition)
    }
  }, [])

  return mousePos;
}

export default useMousePosition;
