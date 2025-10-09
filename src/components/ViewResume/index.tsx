import Link from 'next/link';
import { MdOutlineListAlt, MdOutlineSaveAlt, MdOutlineScreenshotMonitor } from 'react-icons/md';
const ViewResume = () => {
  return (
    <div className={`flex flex-col items-center text-center `}>
      <p className="flex items-center ">
        <MdOutlineListAlt /> Curriculo
      </p>

      <div className="flex items-center gap-1">
        <Link
          href={`/images/Desenvolvedor-Fullstack.pdf`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center"
        >
          <MdOutlineScreenshotMonitor />
          Visualizar
        </Link>
        <span> / </span>
        <Link
          href={`/images/Desenvolvedor-Fullstack.pdf`}
          download={`Roger dornelles - Desenvolvedor Fullstack`}
          className="flex flex-row items-center"
        >
          <MdOutlineSaveAlt />
          Baixar
        </Link>
      </div>
    </div>
  );
};

export default ViewResume;
