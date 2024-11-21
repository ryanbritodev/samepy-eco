import { Link } from "react-router-dom";
import { RegisterForm } from "./components/RegisterForm";

export const Register = () => {
  return (
    <main className="w-full min-h-[85vh] py-[2em] max-h-[725px]">
      <div className="absolute -z-50 w-full min-h-[110vh] left-[0] top-[0] bg-primary-light-green"></div>
      <h2 className="text-primary-dark-green font-semibold text-2xl text-center">
        Ainda não tem uma conta? Crie já!
      </h2>
      <div className="flex justify-center items-center px-[2em]">
        <RegisterForm />
      </div>
      <p className="text-sm text-center w-full pt-[1em] pb-[1em]">
        Já tem uma conta?{" "}
        <Link to="/login" className="underline">
          Faça login aqui.
        </Link>
      </p>
    </main>
  );
};
