import { useEffect, useState } from "react";
import { StatsBlock } from "./components/StatsBlock";
import { findUserById, getEcoData } from "../../api";

export const Stats = () => {
  const [userData, setUserData] = useState({
    name: "",
    cityName: "",
    countryName: "",
    savedMoney: "",
    savedEnergy: "",
  });
  const [ecoData, setEcoData] = useState({
    tempMin: "",
    tempMax: "",
  });

  useEffect(() => {
    if (localStorage.getItem("uId")) {
      findUserById(localStorage.getItem("uId")).then((res) => {
        setUserData(res);
      });

      getEcoData().then((res) => {
        setEcoData({
          tempMin: res.feeds[0].field5,
          tempMax: res.feeds[0].field6,
        });
      });
    }
  }, []);

  const statsData = [
    {
      title: "Energia economizada pelo seu SamepyEco",
      status: `${userData.savedEnergy}Kw/h`,
      subtitle: "de economia por energia renovável este mês",
    },
    {
      title: "Gastos evitados pelo seu SamepyEco",
      status: `R$${Number(userData.savedMoney) * 2.2}`,
      subtitle: "economizados este mês",
    },
    {
      title: "Temperatura do tanque quente",
      status: `${ecoData.tempMax}ºC`,
      subtitle: "em média",
    },
    {
      title: "Temperatura do tanque frio",
      status: `${ecoData.tempMin}ºC`,
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
