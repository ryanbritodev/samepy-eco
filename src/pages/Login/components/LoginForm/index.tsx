import { Input } from "../Input";

export const LoginForm = () => {
  return (
    <form className="w-full max-w-[25em] h-full max-h-[28em] flex flex-col justify-center items-center gap-[1em] bg-primary-dark-green mt-[3em] rounded-lg p-[1em] py-[2em]">
      <Input type="email" label="Seu Email" />
      <Input type="password" label="Sua Senha" />
      <button
        type="button"
        className="text-primary-green border border-primary-green w-full max-w-[12em] py-[.5em] rounded-lg font-bold mt-[1em] transition-all hover:bg-primary-green hover:text-primary-dark-green"
      >
        Fazer login
      </button>
    </form>
  );
};
