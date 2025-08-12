'use client';

import Card from '@/components/Card';
import Footer from '@/components/Footer';
import ImageAnimation from '@/components/ImageAnimation';
import Slide from '@/components/Slide';
import SVGCurveTop from '@/components/SVGCurveTop';
import TextFadeIn from '@/components/TextFadeIn';
import Typewriter from '@/components/Typewriter';
import DescriptionTecnology from '@/utils/DescriptionTecnology';
import Projects from '@/utils/Projects';
import { motion } from 'framer-motion';

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
              <Typewriter delay={50} text="Olá! Sou o Roger." />
            </div>

            <div className="py-3">
              <TextFadeIn>Sou desenvolvedor Full Stack com foco em Front-end, apaixonado por tecnologia.</TextFadeIn>
            </div>

            <TextFadeIn>
              Ao longo da minha jornada, participei de projetos voltados para o setor jurídico, construção civil e
              soluções internas de gestão e beneficiamento de materiais. Nessas experiências, atuei tanto no
              desenvolvimento de sistemas completos quanto na criação de interfaces modernas e responsivas, pensando na
              experiência do usuário, performance e escalabilidade.
            </TextFadeIn>

            <div className="py-3">
              <TextFadeIn>
                Trabalho com tecnologias como React, Next.js, TypeScript, TailwindCss, Node.js, PostgreSQL, Git, Jest e
                sempre buscando aplicar as melhores práticas de desenvolvimento, versionamento, acessibilidade e design
                responsivo.
              </TextFadeIn>
            </div>

            <TextFadeIn>
              Gosto de aprender constantemente, e criar produtos que realmente gerem valor para os usuários e para o
              negócio.
            </TextFadeIn>

            <div className="py-3">
              <TextFadeIn>
                Estou em busca de novos desafios, projetos criativos e oportunidades de evolução profissional.
              </TextFadeIn>
            </div>
          </div>

          <ImageAnimation src={`/images/avatar.png`} alt="Avatar" width={250} height={250} positionAnimation="x" />
        </div>
      </div>

      <div className={` w-full h-[5rem] mt-[-.5rem]`}>
        <SVGCurveTop />
      </div>

      <div
        className={`flex flex-col justify-center m-auto w-full text-left px-3 md:w-[85%] text-2xl py-[2rem] text-[#0A001B]  
            md:text-[1.2rem] tracking-[.02rem]
          `}
      >
        <div className="text-4xl font-bold justify-center m-auto pb-6">
          <TextFadeIn>Projetos</TextFadeIn>
        </div>

        <div className="pb-3">
          <TextFadeIn>
            Ao longo do processo de aprendizado em desenvolvimento de software, desenvolvi projetos que colocaram em
            prática os conhecimentos adquiridos.
          </TextFadeIn>
        </div>

        <TextFadeIn>
          Cada projeto apresentado abaixo marca uma fase da minha evolução como desenvolvedor, cada linha de código
          representa curiosidade, tentativas, erros, acertos e progresso.
        </TextFadeIn>
        <div className="py-3">
          <TextFadeIn>
            Esses projetos refletem desafios superados, aprendizados consolidados e a minha paixão por transformar
            ideias em soluções reais, funcionais e bem estruturadas.
          </TextFadeIn>
        </div>

        <div className={`flex flex-wrap w-[85%] m-auto gap-4 pt-6`}>
          {Projects.map(item => {
            return (
              <Card
                key={item.id}
                id={item.id}
                img={item.img}
                project={item.project}
                urlGit={item.urlGit}
                urlWeb={item.urlWeb}
                descriptionProject={item.descriptionProject}
              />
            );
          })}
        </div>
      </div>

      <div
        className={`flex flex-col justify-center m-auto w-full text-left px-3 md:w-[85%] text-2xl py-[2rem] text-[#0A001B]  
            md:text-[1.2rem] tracking-[.02rem]
          `}
      >
        <div className="text-4xl font-bold justify-center m-auto pb-6">
          <TextFadeIn>Tecnologias</TextFadeIn>
        </div>

        <div className="py-3">
          <TextFadeIn>
            Tenho experiência em desenvolvimento de aplicações web e mobile utilizando React.js, Next.js e React Native,
            com integração de APIs em Node.js.
          </TextFadeIn>
        </div>

        <div>
          <TextFadeIn>
            Conhecimento em testes automatizados com Jest, React Testing Library e Cypress, além de bancos de dados
            relacionais como MySQL e PostgreSQL.
          </TextFadeIn>
        </div>
        <Slide images={DescriptionTecnology} />
      </div>
      <Footer />
    </motion.section>
  );
};
export default Home;
