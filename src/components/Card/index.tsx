import Image from 'next/image';
import Link from 'next/link';
import { RxGithubLogo, RxGlobe } from 'react-icons/rx';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface CardProps {
  id: number;
  project: string;
  img: string;
  urlGit: string;
  urlWeb: string;
  descriptionProject: string;
  delay?: number;
}

const Card = ({ id, project, descriptionProject, img, urlGit, urlWeb, delay = 0 }: CardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const direction = id % 2 === 0 ? 10 : -10;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: direction }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: direction }}
      transition={{ duration: 0.8, delay }}
      key={id}
      className="flex flex-col items-center bg-gradient-to-bl from-[#1f0252] to-[#0A001B] text-white p-12 w-[19rem] min-h-[27rem] m-auto rounded-md"
    >
      <Image
        src={img}
        alt={project}
        width={200}
        height={200}
        priority
        className="object-cover w-[16rem] h-[7rem] hover:scale-110 transition-all ease-in duration-300 rounded-md"
      />

      <p className="pt-2 text-center">{descriptionProject}</p>
      <div className="flex pt-4 gap-4">
        {urlWeb && (
          <Link href={urlWeb} target="_blank">
            <RxGlobe className="text-2xl" />
          </Link>
        )}

        {urlGit && (
          <Link href={urlGit} target="_blank">
            <RxGithubLogo className="text-2xl" />
          </Link>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
