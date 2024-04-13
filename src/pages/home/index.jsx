import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef, useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import UpperPage from "./UpperPage";
import LowerPage from "./LowerPage";
import Slide from "@/components/home/Slider";

gsap.registerPlugin(ScrollTrigger);

function mergeRefs(...inputRefs) {
  return (ref) => {
    inputRefs.forEach((inputRef) => {
      if (!inputRef) {
        return;
      }

      if (typeof inputRef === "function") {
        inputRef(ref);
      } else {
        inputRef.current = ref;
      }
    });
  };
}

export default function Scene() {
  const component = useRef(null);
  const slider = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      let panels = gsap.utils.toArray(".panel");
      gsap.to(panels, {
        xPercent: -100 * (panels.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: slider.current,
          pin: true,
          scrub: 1,
          snap: 1 / (panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: true
        },
      });

      if(ScrollTrigger.isInViewport(panels[3])){
        console.log('third element is  visible')
      }
    }, component);
    return () => ctx.revert();
  });

  const useElementOnScreen = (options) => {
    const references = useRef([]);
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries) => {
      const [entry] = entries;
      setIsVisible(entry.isIntersecting);
    };

    useEffect(() => {
      const observer = new IntersectionObserver(callbackFunction, options);

      if (containerRef.current) observer.observe(containerRef.current);

      return () => {
        if (containerRef.current) observer.unobserve(containerRef.current);
      };
    }, [references, options]);

    return [references, isVisible];
  };

  const [containerRef, isVisible] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 0,
  });

  
  console.log(containerRef, isVisible)

  return (
    <div className="bg-primary" ref={component}>
      {/* <Navbar />
      <UpperPage /> */}
      <div
        ref={mergeRefs(containerRef, slider)}
        className="container"
      >
        <Slide class_name={"panel"} visible_or_not={isVisible} />
      </div>
      {/* <LowerPage /> */}
    </div>
  );
}
