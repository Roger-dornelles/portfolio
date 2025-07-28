import Link from 'next/link';
import SVGCurveBottom from '../SVGCurveBottom';
import { RxGithubLogo } from 'react-icons/rx';
import { FaCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <div className="w-full">
        <SVGCurveBottom />
      </div>
      <div
        className={`flex flex-col md:flex-row justify-between items-center w-full bg-[#0A001B] mt-[-3px] py-5 px-[6rem] text-[#fff]`}
      >
        <div className="flex items-center">
          <FaCopyright /> <p className="pl-1">Roger Dornelles</p>
        </div>

        <div>
          <p className="text-xl mt-3 md:mt-0">Saiba mais.</p>
          <div className={`flex items-center pt-4 gap-1`}>
            <Link href={'https://github.com/Roger-dornelles'} target="_blank" className="flex flex-row">
              <RxGithubLogo className=" text-2xl" />
              <p className="pl-2">GitHub</p>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
