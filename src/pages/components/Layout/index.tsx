import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { Footer } from "../Footer";
// import { useLocation } from "react-router-dom";
export const Layout = ({ isAuth }: { isAuth: boolean }) => {
  // const { pathname } = useLocation();
  const links = [];

  if (!isAuth) {
    links.push(
      ...[
        { text: "Motivação", url: "/#motivation", id: "motivation" },
        { text: "SamepyEco", url: "/#samepyeco", id: "samepyeco" },
        { text: "Contato", url: "/#contact", id: "contact" },
        { text: "Login", url: "/login", id: "login" },
      ]
    );
  }

  if (isAuth) {
    links.push(
      ...[
        { text: "Status", url: "/stats", id: "stats" },
        { text: "Suporte", url: "/support", id: "support" },
        { text: "Conta", url: "/account", id: "account" },
      ]
    );
  }

  return (
    <div className="flex flex-col w-full h-full items-center relative principal-div-back">
      <div className="w-full h-full max-w-screen-xl  p-[2em]">
        <Header links={links} isAuth={isAuth} />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};
