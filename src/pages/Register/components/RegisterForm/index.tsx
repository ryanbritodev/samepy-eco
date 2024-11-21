import { Input } from "../Input";

export const RegisterForm = () => {
  return (
    <form className="w-full max-w-[25em] h-full max-h-[30em] flex flex-col justify-center items-center gap-[1em] bg-primary-dark-green mt-[1em] rounded-lg p-[1em] py-[2em]">
      <Input type="text" label="Seu Nome" />
      <Input type="text" label="Seu Email" />
      <Input type="password" label="Sua Senha" />
      <Input type="password" label="Repita a Senha" />
      <button
        type="button"
        className="text-primary-green border border-primary-green w-full max-w-[12em] py-[.5em] rounded-lg font-bold mt-[1em] transition-all hover:bg-primary-green hover:text-primary-dark-green"
      >
        Criar conta
      </button>
    </form>
  );
};
