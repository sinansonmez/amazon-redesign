import { useRef, useState, useEffect, RefObject } from "react";

const useHover = <T>(): [boolean, RefObject<T>] => {
  const [hovered, setHovered] = useState(false);
  const ref = useRef<T>(null);

  useEffect(() => {
    (ref.current as any)?.addEventListener("mouseenter", enter);
    (ref.current as any)?.addEventListener("mouseleave", leave);

    // clears the event component will unmount
    return () => {
      (ref.current as any)?.removeEventListener("mouseenter", enter);
      (ref.current as any)?.removeEventListener("mouseleave", leave);
    };
  }, []);

  const enter = () => setHovered(true);
  const leave = () => setHovered(false);

  return [hovered, ref];
};

export default useHover;
