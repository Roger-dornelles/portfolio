'use client';
import Image from 'next/image';

import Typewriter from './components/Typewriter';
import TextFadeIn from './components/TextFadeIn';
import { motion } from 'framer-motion';
import ImageAnimation from './components/ImageAnimation';

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        duration: 1,
        ease: 'easeIn',
        scale: { type: 'spring', damping: 12 },
        opacity: { duration: 0.5 },
        y: { duration: 0.6 },
      }}
    >
      <div className={`bg-[#0A001B] `}>
        <div className={`flex flex-col items-center p-[3rem] w-full md:text-[1.2rem] lg:flex-row`}>
          <div className={`flex-col items-end text-white text-2xl md:text-[1.2rem] tracking-[.02rem] md:px-[3rem]`}>
            <div className="text-2xl">
              <Typewriter delay={30} text="Olá! Sou o Roger." />
            </div>

            <div className="py-3">
              <TextFadeIn
                timer={300}
                text="Sou desenvolvedor Full Stack com foco em Front-end, apaixonado por tecnologia."
              />
            </div>

            <div>
              <TextFadeIn
                timer={500}
                text="Ao longo da minha jornada, participei de projetos voltados para o setor jurídico, construção civil e
              soluções internas de gestão e beneficiamento de materiais. Nessas experiências, atuei tanto no
              desenvolvimento de sistemas completos quanto na criação de interfaces modernas e responsivas, pensando na
              experiência do usuário, performance e escalabilidade."
              />
            </div>

            <div className="py-3">
              <TextFadeIn
                timer={700}
                text={` Trabalho com tecnologias como React, Next.js, TypeScript, Node.js, sempre buscando aplicar as melhores
              práticas de desenvolvimento, versionamento, acessibilidade e design responsivo.`}
              />
            </div>

            <div>
              <TextFadeIn
                timer={900}
                text={`Gosto de aprender constantemente, e criar produtos que realmente gerem valor para os usuários e para o
              negócio.`}
              />
            </div>

            <div className="py-3">
              <TextFadeIn
                timer={1100}
                text={`Estou em busca de novos desafios, projetos criativos e oportunidades de evolução profissional.`}
              />
            </div>
          </div>

          <ImageAnimation src={`/images/avatar.png`} alt="Avatar" width={250} height={250} positionAnimation="y" />
        </div>
      </div>
      <div className={`relative w-full h-[13rem] mt-[-.5rem]`}>
        <Image src={`/images/border-curve.jpg`} alt="Imagem curva" priority fill className="object-cover" />
      </div>
    </motion.section>
  );
};
export default Home;
