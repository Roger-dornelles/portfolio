'use client';

import Image from 'next/image';

const Home = () => {
  return (
    <>
      <div className={`bg-[#0A001B] `}>
        <div className={`flex flex-col items-center p-[3rem] w-full md:text-[1.2rem] lg:flex-row`}>
          <div className={`flex-col items-end text-white text-2xl md:text-[1.2rem] tracking-[.02rem] md:px-[3rem]`}>
            <h1>Bem Vindo...</h1>

            <h2> Olá! Sou o Roger.</h2>

            <p>Sou desenvolvedor Full Stack com foco em Front-end, apaixonado por tecnologia.</p>

            <p>
              Ao longo da minha jornada, participei de projetos voltados para o setor jurídico, construção civil e
              soluções internas de gestão e beneficiamento de materiais. Nessas experiências, atuei tanto no
              desenvolvimento de sistemas completos quanto na criação de interfaces modernas e responsivas, pensando na
              experiência do usuário, performance e escalabilidade.
            </p>

            <p>
              Trabalho com tecnologias como React, Next.js, TypeScript, Node.js, sempre buscando aplicar as melhores
              práticas de desenvolvimento, versionamento, acessibilidade e design responsivo.
            </p>

            <p>
              Gosto de aprender constantemente, e criar produtos que realmente gerem valor para os usuários e para o
              negócio.
            </p>

            <p>Estou em busca de novos desafios, projetos criativos e oportunidades de evolução profissional.</p>
          </div>

          <Image
            src={`/images/avatar.png`}
            alt="Avatar"
            width={270}
            height={200}
            className="object-cover pt-4 w-full sm:w-[20%] md:w-[50%]"
          />
        </div>
      </div>
      <div className={`relative w-full h-[13rem] mt-[-.5rem]`}>
        <Image src={`/images/border-curve.jpg`} alt="Imagem curva" priority fill className="object-cover" />
      </div>
    </>
  );
};
export default Home;
