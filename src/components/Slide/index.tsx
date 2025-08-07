const images = ['/images/NextJs.png', '/images/ReactJs.png', '/images/NodeJs.png', '/images/Typescript.png'];

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { GoArrowRight } from 'react-icons/go';
import { GoArrowLeft } from 'react-icons/go';

const Slide = () => {
  const [current, setCurrent] = useState(2);
  const [xOffset, setXOffset] = useState(120);

  useEffect(() => {
    const updateOffset = () => {
      const vw = window.innerWidth;
      setXOffset(Math.min(150, vw * 0.3));
    };
    updateOffset();
    window.addEventListener('resize', updateOffset);
    return () => window.removeEventListener('resize', updateOffset);
  }, []);

  const handlePrev = () => {
    setCurrent(prev => (prev - 1 + images.length) % images.length);
  };

  const handleNext = () => {
    setCurrent(prev => (prev + 1) % images.length);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-[#ffffff] px-4">
      <div className="relative w-full max-w-7xl h-[400px] sm:h-[500px] flex items-center justify-center">
        {images.map((src, index) => {
          const total = images.length;
          const prev = (current - 1 + total) % total;
          const next = (current + 1) % total;

          let scale = 0.8;
          let opacity = 0.5;
          let zIndex = 10;
          let x = 0;
          let visible = false;

          if (index === current) {
            scale = 1.1;
            opacity = 1;
            zIndex = 30;
            x = 0;
            visible = true;
          } else if (index === prev) {
            scale = 0.9;
            opacity = 0.5;
            zIndex = 20;
            x = -xOffset;
            visible = true;
          } else if (index === next) {
            scale = 0.9;
            opacity = 0.5;
            zIndex = 20;
            x = xOffset;
            visible = true;
          }

          if (!visible) return null;

          return (
            <motion.div
              key={index}
              className="absolute"
              style={{ zIndex }}
              animate={{ x, scale, opacity }}
              transition={{
                type: 'spring',
                stiffness: 200,
                damping: 20,
              }}
            >
              <Image
                src={src}
                alt={`Imagem ${index + 1}`}
                width={240}
                height={320}
                className="relative w-[120px] h-auto sm:w-[260px] sm:h-[320px] object-cover rounded-xl shadow-lg"
              />
            </motion.div>
          );
        })}
      </div>

      <div className="mt-[-2rem] mb-[1rem] flex gap-10 z-[2]">
        <button
          onClick={handlePrev}
          className="text-3xl px-2 bg-[#ececec] py-2 rounded-[50%] transition cursor-pointer"
        >
          <GoArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="text-3xl px-2 py-2 rounded-[50%] bg-[#ececec] transition cursor-pointer"
        >
          <GoArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Slide;
