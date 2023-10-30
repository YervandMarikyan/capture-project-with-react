import { useInView } from "react-intersection-observer";
import { useAnimationControls  } from "framer-motion";
import { useEffect } from "react";

export const useScroll = () => {
  const controls = useAnimationControls ();
  const [element, view] = useInView({ threshold: 0.5 });
  useEffect(() => {
    if (view) {
      controls.start("show");
    } else {
      controls.start("hidden");
    }
  }, [view]);
  /* if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  } */
  //view ? controls.start("show") : controls.start("hidden");
  return [element, controls];
};