import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
export const Layout = () => {
  const links = [
    { text: "Motivação", url: "/#motivation", id: "motivation" },
    { text: "SamepyEco", url: "/#samepyeco", id: "samepyeco" },
    { text: "Contato", url: "/#contact", id: "contact" },
    { text: "Login", url: "/login", id: "" },
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
