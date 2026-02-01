import useWindowStore from "#store/window";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useLayoutEffect, useRef } from "react";
import { Draggable } from "gsap/Draggable";

const windowWrapper = (Component, windowKey) => {
  const Wrapped = (props) => {
    const { focusWindow, windows } = useWindowStore();
    const windowState = windows?.[windowKey];
    const ref = useRef(null);

    if (!windowState) {
      console.warn(`windowWrapper: window key "${windowKey}" not found`);
      return null;
    }

    const { isOpen, zIndex } = windowState;

    useGSAP(() => {
      const el = ref.current;
      if (!el || !isOpen) return;

      el.style.display = "block";

      gsap.fromTo(
        el,
        { scale: 0.5, opacity: 0, y: 40 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }, [isOpen]);

    useGSAP(() => {
      const el = ref.current;
      if (!el) return;

      const [instance] = Draggable.create(el, {
        onPress: () => focusWindow(windowKey),
      });

      return () => instance.kill();
    }, []);

    useLayoutEffect(() => {
      const el = ref.current;
      if (!el) return;

      el.style.display = isOpen ? "block" : "none";
    }, [isOpen]);

    return (
      <section id={windowKey} ref={ref} style={{ zIndex }} className="absolute">
        <Component {...props} />
      </section>
    );
  };

  Wrapped.displayName = `windowWrapper(${
    Component.displayName || Component.name || "Component"
  })`;

  return Wrapped;
};

export default windowWrapper;
