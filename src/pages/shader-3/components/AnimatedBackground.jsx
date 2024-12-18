import { useEffect, useRef } from "react";
import { useSlider } from "../../../hooks/useSlider";
import { useSpring } from "framer-motion";
import { useFrame } from "@react-three/fiber";

export default function AnimatedBackground() {
  const bgColor = useRef();

  const { curSlide, items } = useSlider();
  const animatedColor = useSpring(items[curSlide].color);

  useEffect(() => {
    if (bgColor.current) {
      animatedColor.set(items[curSlide].color);
    }
  }, [curSlide]);

  useFrame(() => {
    if (bgColor.current) {
      bgColor.current.set(animatedColor.get());
    }
  });

  return <color attach="background" args={[items[0].color]} ref={bgColor} />;
}
