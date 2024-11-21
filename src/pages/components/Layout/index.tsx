import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
// import { useLocation } from "react-router-dom";
export const Layout = () => {
  // const { pathname } = useLocation();
  const links = [];
  const isAuth = true;

  if (!isAuth) {
    links.push(
      ...[
        { text: "Motivação", url: "/#motivation", id: "motivation" },
        { text: "SamepyEco", url: "/#samepyeco", id: "samepyeco" },
        { text: "Contato", url: "/#contact", id: "contact" },
        { text: "Login", url: "/login", id: "" },
      ]
    );
  }

  if (isAuth) {
    links.push(
      ...[
        { text: "Estatísticas", url: "/stats", id: "" },
        { text: "Suporte", url: "/support", id: "" },
        { text: "Conta", url: "/Account", id: "" },
      ]
    );
  }

  return (
    <div className="flex flex-col w-full h-full items-center relative">
      <div className="w-full h-full max-w-screen-xl  p-[2em]">
        <Header links={links} isAuth={isAuth} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
