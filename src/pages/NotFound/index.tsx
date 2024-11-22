import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <main className="absolute w-full h-full min-h-screen z-50 flex flex-col justify-center items-center bg-primary-light-green">
      <h2 className="text-2xl font-bold w-full text-center max-w-[15em] text-primary-dark-green">
        Parece que você se perdeu...{" "}
        <Link to="/" className="underline">
          Que tal voltar?
        </Link>
      </h2>
    </main>
  );
};
