'use client';

import { useEffect, useState } from 'react';

interface TextFadeInProps {
  text: string;
  timer?: number;
}

const TextFadeIn = ({ text, timer = 1000 }: TextFadeInProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timers = setTimeout(() => {
      setShow(true);
    }, timer);

    return () => clearTimeout(timers);
  }, [timer]);

  return (
    <div
      className={`transition-all duration-700 ease-out transform ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
    >
      <p>{text}</p>
    </div>
  );
};

export default TextFadeIn;
