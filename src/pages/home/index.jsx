import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useLayoutEffect, useRef } from "react";
import Navbar from "@/components/Navbar";
import UpperPage from "./UpperPage";
import LowerPage from "./LowerPage";
import Slide from "@/components/home/Slider";

gsap.registerPlugin(ScrollTrigger);

export default function Scene() {
  const component = useRef();
  const slider = useRef();

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
          snap: 1 /(panels.length - 1),
          end: () => "+=" + slider.current.offsetWidth,
          markers: true
        }
      });
    }, component);
    return () => ctx.revert();
  });

  return (
    <div className="bg-primary" ref={component}>
      {/* <Navbar /> */}
      {/* <UpperPage /> */}
      <div ref={slider} className="container">
        <Slide />
      </div>
      {/* <LowerPage /> */}
    </div>
  );
}
