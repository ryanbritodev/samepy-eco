import { Link } from "react-router-dom";
import { LoginForm } from "./components/LoginForm";

export const Login = () => {
  return (
    <main className="w-full min-h-[85vh] py-[2em] max-h-[725px]">
      <div className="absolute -z-50 w-full min-h-[110vh] left-[0] top-[0] bg-primary-light-green"></div>
      <h2 className="text-primary-dark-green font-semibold text-2xl text-center">
        Já tem uma conta? Faça login!
      </h2>
      <div className="flex justify-center items-center px-[2em]">
        <LoginForm />
      </div>
      <p className="text-sm text-center w-full pt-[1em] pb-[1em]">
        Ainda não tem uma conta? <Link to="/register" className="underline">Crie uma aqui.</Link>
      </p>
    </main>
  );
};
