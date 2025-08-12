import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

interface Props {
  text: string;
  delay?: number;
}

const Typewriter = ({ text, delay = 50 }: Props) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  useEffect(() => {
    if (isInView) {
      setCurrentText('');
      setCurrentIndex(0);
    }
  }, [isInView]);

  // Efeito de digitação
  useEffect(() => {
    if (isInView && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text, isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <span>{currentText}</span>
      <span className="animate-pulse text-[#ffffff] px-[.4rem]">|</span>
    </motion.div>
  );
};

export default Typewriter;
