import { useEffect, useState } from 'react';

interface Props {
  text: string;
  delay?: number;
}
const Typewriter = ({ text, delay = 0 }: Props) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(prevText => prevText + text[currentIndex]);
        setCurrentIndex(prevIndex => prevIndex + 1);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  return (
    <>
      <span>{currentText}</span>
      <span className={`animate-pulse text-[#ffffff] px-[.3rem]`}>|</span>
    </>
  );
};
export default Typewriter;
