import { StatsBlock } from "./components/StatsBlock";

export const Stats = () => {
  const statsData = [
    {
      title: "Energia economizada pelo seu SamepyEco",
      status: "38Kw/h",
      subtitle: "de economia por energia renovável",
    },
    {
      title: "Gastos evitados pelo seu SamepyEco",
      status: "R$135",
      subtitle: "economizados, em média",
    },
    {
      title: "Temperatura do tanque quente",
      status: "40ºC",
      subtitle: "em média",
    },
    {
      title: "Temperatura do tanque frio",
      status: "-10ºC",
      subtitle: "em média",
    },
  ];

  return (
    <main className="w-full flex flex-col h-fit min-h-screen pt-[3em] pb-[3em]">
      <h1 className="text-primary-dark-green text-4xl font-bold">Status</h1>
      <div className="w-full h-fit grid grid-cols-[repeat(auto-fit,minmax(18em,1fr))] gap-[3em] p-[2em] px-[0em]">
        {statsData.map((stats) => {
          return (
            <StatsBlock
              title={stats.title}
              subtitle={stats.subtitle}
              status={stats.status}
            />
          );
        })}
      </div>
    </main>
  );
};
