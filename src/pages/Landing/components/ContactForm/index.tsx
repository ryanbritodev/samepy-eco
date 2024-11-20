import { Input } from "./components/Input";

export const ContactForm = () => {
  return (
    <form className="w-full max-w-[25em] h-full max-h-[28em] flex flex-col justify-center items-center gap-[1em] bg-primary-light-green mt-[3em] rounded-lg p-[1em] py-[2em]">
      <Input type="text" label="Seu Nome" />
      <Input type="text" label="Seu Email" />
      <Input type="textarea" label="Mensagem" />
      <button
        type="button"
        className="text-primary-green bg-primary-dark-green w-full max-w-[12em] py-[.5em] rounded-lg font-bold mt-[1em] transition-all hover:bg-primary-green hover:text-primary-dark-green"
      >
        Enviar
      </button>
    </form>
  );
};
