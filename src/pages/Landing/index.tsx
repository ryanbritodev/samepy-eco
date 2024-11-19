export const Landing = () => {
  return (
    <main className="w-full h-full">
      <div className="absolute -z-50 w-full h-[100vh] left-[0] top-[0] bg-primary-light-green rounded-lg-bottom"></div>
      <section className="w-full h-[100vh] z-10 flex flex-col justify-center items-start">
        <div className="w-full h-full bg-backgroundLanding bg-no-repeat bg-cover object-cover rounded-lg"></div>
      </section>
    </main>
  );
};
