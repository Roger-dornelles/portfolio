import Image from 'next/image';
import Link from 'next/link';
import { RxGithubLogo, RxGlobe } from 'react-icons/rx';

interface CardProps {
  id: number;
  project: string;
  img: string;
  urlGit: string;
  urlWeb: string;
  descriptionProject: string;
}

const Card = ({ id, project, descriptionProject, img, urlGit, urlWeb }: CardProps) => {
  return (
    <div
      key={id}
      className={`flex flex-col items-center  bg-gradient-to-bl from-[#1f0252] to-[#0A001B] text-[#fff] p-[3rem] w-[19rem] min-h-[25rem] m-auto  border-1
          rounded-[.5rem]
        `}
    >
      <Image
        src={img}
        alt={project}
        width={200}
        height={300}
        priority
        className={`object-cover w-[16rem] h-[7rem] hover:scale-140 transition-all ease-in duration-[.3s] rounded-[.5rem] cursor-pointer z-2`}
      />

      <p className="pt-2 flex-wrap">{descriptionProject}</p>
      <div className={`flex pt-4 gap-4`}>
        {urlWeb !== '' && (
          <Link href={urlWeb} target="_blank">
            <RxGlobe className={`text-2xl $`} />
          </Link>
        )}

        <Link href={urlGit} target="_blank">
          <RxGithubLogo className=" text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Card;
