import { useEffect, useState } from "react";
import { AccountInfo } from "./components/AccountInfo";
import { findUserById } from "../../api";

export const Account = () => {
  const [userData, setUserData] = useState({
    name: "",
    cityName: "",
    countryName: "",
    savedMoney: "",
    savedEnergy: "",
  });

  useEffect(() => {
    if (localStorage.getItem("uId")) {
      findUserById(localStorage.getItem("uId")).then((res) => {
        setUserData(res);
      });
    }
  }, []);

  const handleClick = () => {
    const wantToExit = confirm("Tem certeza que deseja sair?");

    if (wantToExit) {
      localStorage.removeItem("name");
      localStorage.removeItem("email");
      localStorage.removeItem("uId");
      window.location.href = "/"; // to update website and load localStorage
      return;
    }
  };

  return (
    <main className="w-full flex flex-col h-fit min-h-screen pt-[3em] pb-[3em] relative">
      <h1 className="text-primary-dark-green text-4xl font-bold">Conta</h1>
      <div className="w-full h-full flex flex-col gap-[1.5em] mt-[2em]">
        <AccountInfo label="Nome" text={userData.name} />
        <AccountInfo
          label="Localização"
          text={`${userData.cityName}, ${userData.countryName}`}
        />
        <AccountInfo
          label="Total Economizado"
          text={`${userData.savedEnergy}KW/h | R$${
            Number(userData.savedMoney) * 15
          },03`}
        />
        <AccountInfo label="Vencimento da Assinatura" text="Em 13 dias..." />
      </div>
      <button
        type="button"
        className="absolute bottom-[3em] right-[1em] bg-[#D96565] w-[6em] h-[2.5em] rounded-lg font-bold text-primary-dark-green"
        onClick={handleClick}
      >
        Sair
      </button>
    </main>
  );
};
