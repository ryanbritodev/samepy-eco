import { Link } from "react-router-dom";
import { SamepyEcoInfo } from "./components/SamepyEcoInfo";
import { ContactForm } from "./components/ContactForm";

export const Landing = () => {
  const samepyEcoInfos = [
    {
      text: "Veja o exemplo para instalação do dispositivo em uso abaixo, é simples!",
      iconPath: "/assets/images/Landing/toolIcon.svg",
    },
    {
      text: "Entre no SamepyEco, pelo celular ou computador, para gerenciar!",
      iconPath: "/assets/images/Landing/devicesIcon.svg",
    },
    {
      text: "Com SamepyEco, você contribui para uma maior performance de energia renovável no Mundo!",
      iconPath: "/assets/images/Landing/worldIcon.svg",
    },
  ];

  return (
    <main className="w-full h-full">
      <div className="absolute -z-50 w-full max-h-[720px] h-[115vh] left-[0] top-[0] bg-primary-light-green rounded-b-3xl"></div>
      <section className="w-full max-h-[720px] h-[95vh] z-10 flex flex-col items-center">
        <div className="w-full h-full max-h-[32em] lg:max-h-[48em] bg-backgroundLanding bg-no-repeat bg-cover bg-center rounded-xl flex flex-col items-center pt-[1em] lg:pt-[3em] mt-[2em]">
          <h1 className="text-white text-3xl sm:text-5xl w-full max-w-[12em] text-center font-bold mt-[1.5em]">
            Cuide dos seus gastos, cuide do Mundo
          </h1>
          <p className="text-white text-sm sm:text-md w-full max-w-[32em] text-center mt-[2.5em] max-sm:px-[.8em]">
            Acompanhe e gerencie seus gastos energéticos, e economize com o
            SamepyEco, energia renovável, simples e econômica, feita para você,
            pequeno e médio agricultor.
          </p>

          <Link
            to="/login"
            className="mt-[4em] xl:mt-[8em] transition-all font-bold text-primary-fluffy-white hover:text-black border border-primary-fluffy-white hover:border-[#fff] hover:bg-[#fff] px-[1em] py-[.2em] rounded-[1em]"
          >
            Economize
          </Link>
        </div>
      </section>
      <section
        className="w-full max-h-[720px] h-fit flex flex-row mt-[2em] py-[6em] justify-between items-start"
        id="motivation"
      >
        <div className="w-full max-w-[28em] flex flex-col gap-[1em] font-bold text-primary-light-black">
          <h1 className="w-full text-4xl font-bold text-primary-dark-green">
            Por que nos importamos?
          </h1>
          <p className="w-full mt-[1em]">
            Nosso Mundo precisa não só de mais formas energia renovável, mas de
            um consumo mais consciente e otimizado, para evitar que os problemas
            de hoje sejam maiores amanhã...
          </p>
          <p className="w-full mt-[2em]">
            Por isso, pensando nos pequenos e médios agricultores, a SamepyEco
            chega para te ajudar a economizar, e a mudar o Mundo.
          </p>
        </div>
        <img
          src="/assets/images/Landing/whyDoWeCare.png"
          alt="Why do we care image"
          className="w-full max-w-[25em] h-fit object-fit hidden md:flex"
        />
      </section>
      <div className="absolute h-full max-h-[920px] md:max-h-[720px] lg:max-h-[680px] xl:max-h-[580px] -z-50 w-full left-[0] bg-primary-light-green rounded-bl-3xl rounded-tr-3xl"></div>
      <section
        className="w-full max-h-[1320px] h-fit pt-[2em] flex flex-col justify-start mb-[6em]"
        id="samepyeco"
      >
        <h1 className="text-4xl font-bold text-primary-dark-green justify-self-start">
          SamepyEco
        </h1>
        <div className="w-full flex flex-row flex-wrap justify-center mt-[5em] gap-x-[8em] gap-y-[3em]">
          {samepyEcoInfos.map((info) => {
            return <SamepyEcoInfo text={info.text} iconPath={info.iconPath} />;
          })}
        </div>
        <div className="flex flex-col items-center mt-[4em] gap-[1em]">
          <h3 className="font-bold text-primary-dark-green text-xl">
            Veja o SamepyEco em funcionamento!
          </h3>
          <div className="w-full flex flex-row justify-center items-center gap-[2em] flex-wrap mt-4">
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/r6GwW2UTQUQ"
              title="SamepyEco - Global Solution Green Energy"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full max-w-[25em] h-[14.0625em] rounded-xl"
            ></iframe>
            <iframe
              width="100%"
              height="315"
              src="https://www.youtube.com/embed/r8Rkved31Ug"
              title="Pitch Samepy 🍃⚡"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              className="w-full max-w-[25em] h-[14.0625em] rounded-xl"
            ></iframe>
          </div>
        </div>
      </section>
      <section
        className="w-full max-h-[720px] h-fit flex flex-col items-center mb-[5em] mt-[4em]"
        id="contact"
      >
        <h1 className="font-bold text-3xl w-[10em] text-primary-dark-green self-start">
          Precisa de algo? Contate-nos!
        </h1>

        <ContactForm />
      </section>
    </main>
  );
};
