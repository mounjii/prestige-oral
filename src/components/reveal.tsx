"use client";

import { motion, useReducedMotion } from "motion/react";

const ease = [0.16, 1, 0.3, 1] as const;

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3, margin: "0px 0px -8% 0px" }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className }: Omit<RevealProps, "delay">) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={
        reduce
          ? undefined
          : {
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
            }
      }
    >
      {children}
    </motion.div>
  );
}

export function RevealImage({ children, className, delay = 0 }: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <div className={`relative overflow-hidden ${className ?? ""}`}>
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { opacity: 0, scale: 1.06 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, delay, ease }}
      >
        {children}
      </motion.div>
    </div>
  );
}
