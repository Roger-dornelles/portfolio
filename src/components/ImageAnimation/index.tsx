import Image from 'next/image';
import { useEffect, useState } from 'react';

interface ImageAnimationProps {
  timer?: number;
  positionAnimation: 'y' | 'x';
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ImageAnimation = ({ positionAnimation, src, alt, width, height, timer = 1000 }: ImageAnimationProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timers = setTimeout(() => {
      setShow(true);
    }, timer);

    return () => clearTimeout(timers);
  }, []);

  return (
    <Image
      alt={alt}
      src={src}
      width={width}
      height={height}
      className={`transition-all duration-800 ease transform ${
        show ? `opacity-100 translate-${positionAnimation}-0` : `opacity-0 translate-${positionAnimation}-6`
      }`}
    />
  );
};

export default ImageAnimation;
