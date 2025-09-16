"use client";
import React, { PropsWithChildren } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface RevealProps extends PropsWithChildren {
  delay?: number;
}

export function Reveal({ children, delay = 0 }: RevealProps) {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}
