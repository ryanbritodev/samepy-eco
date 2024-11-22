import { SupportForm } from "./components/SupportForm";

export const Support = () => {
  return (
    <main className="w-full flex flex-col h-full min-h-screen pt-[3em] pb-[3em]">
      <h1 className="text-primary-dark-green text-4xl font-bold">Suporte</h1>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <SupportForm />
      </div>
    </main>
  );
};
