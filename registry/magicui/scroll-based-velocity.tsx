"use client";

import {
  createContext,
  useContext,
  useRef,
  type ReactNode,
} from "react";
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  type MotionValue,
} from "motion/react";

const ScrollVelocityContext = createContext<MotionValue<number> | null>(null);

interface ScrollVelocityContainerProps {
  children: ReactNode;
  className?: string;
}

interface ScrollVelocityRowProps {
  children: ReactNode;
  baseVelocity?: number;
  direction?: 1 | -1;
  scrollReactivity?: boolean;
  className?: string;
}

export function ScrollVelocityContainer({
  children,
  className,
}: ScrollVelocityContainerProps) {
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  return (
    <ScrollVelocityContext.Provider value={smoothVelocity}>
      <div className={className}>{children}</div>
    </ScrollVelocityContext.Provider>
  );
}

export function ScrollVelocityRow({
  children,
  baseVelocity = 2,
  direction = 1,
  scrollReactivity = true,
  className,
}: ScrollVelocityRowProps) {
  const scrollVelocity = useContext(ScrollVelocityContext);
  const baseX = useMotionValue(0);
  const prefersReducedMotion = useReducedMotion();
  const directionFactor = useRef<1 | -1>(direction);
  const rowRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(rowRef, { once: false });
  const x = useTransform(baseX, (value) => `${wrap(-50, 0, value)}%`);

  useAnimationFrame((_, delta) => {
    if (!isInView || prefersReducedMotion) {
      return;
    }

    const velocity = scrollReactivity ? (scrollVelocity?.get() ?? 0) : 0;
    const scrollDirection: 1 | -1 =
      velocity < -5 ? -1 : velocity > 5 ? 1 : 1;

    // Apply the same scroll influence to each row's own direction so
    // the two rows remain opposite to one another at all times.
    directionFactor.current = direction * scrollDirection;

    const velocityBoost = scrollReactivity
      ? Math.min(Math.abs(velocity) / 1200, 2.5)
      : 0;
    const movement =
      directionFactor.current *
      baseVelocity *
      (1 + velocityBoost) *
      (delta / 1000);

    baseX.set(wrap(-50, 0, baseX.get() + movement));
  });

  return (
    <div ref={rowRef} className="w-full overflow-hidden">
      <motion.div
        className={`flex w-max flex-nowrap ${className ?? ""}`}
        style={{ x }}
      >
        <div className="flex shrink-0 flex-nowrap">{children}</div>
        <div className="flex shrink-0 flex-nowrap" aria-hidden="true">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

function wrap(min: number, max: number, value: number) {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
}
