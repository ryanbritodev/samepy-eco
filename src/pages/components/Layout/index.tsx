import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const Layout = () => {
  const links = [
    { text: "Motivação", url: "#motivation" },
    { text: "SamepyEco", url: "#samepyeco" },
    { text: "Contato", url: "#contact" },
    { text: "Login", url: "/login" },
  ];

  return (
    <div className="flex flex-col items-center relative">
      <div className="w-full max-w-screen-xl h-full p-[2em]">
        <Header links={links} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
