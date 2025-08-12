import Image from 'next/image';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ImageAnimationProps {
  positionAnimation: 'y' | 'x';
  src: string;
  alt: string;
  width: number;
  height: number;
  distance?: number;
  duration?: number;
}

const ImageAnimation = ({
  positionAnimation,
  src,
  alt,
  width,
  height,
  distance = 20,
  duration = 1,
}: ImageAnimationProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  // Define animação baseado na direção
  const initialPosition = positionAnimation === 'x' ? { opacity: 0, x: distance } : { opacity: 0, y: distance };

  const finalPosition = positionAnimation === 'x' ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 };

  return (
    <motion.div
      ref={ref}
      initial={initialPosition}
      animate={isInView ? finalPosition : initialPosition}
      transition={{ duration }}
      className="w-full flex md:justify-center"
    >
      <Image alt={alt} src={src} width={width} height={height} className="object-cover" />
    </motion.div>
  );
};

export default ImageAnimation;
