'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface TextFadeInProps {
  children: React.ReactNode;
  delay?: number;
}

const TextFadeIn = ({ delay = 0, children }: TextFadeInProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, margin: '-10px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.8, delay }}
    >
      {children}
    </motion.div>
  );
};

export default TextFadeIn;
