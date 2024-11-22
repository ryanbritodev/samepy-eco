import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import useIsWide from "../../../hooks/useIsWide";
import { useLocation } from "react-router-dom";

type link = { text: string; url: string; id: string };
interface HeaderProps {
  links: link[];
  isAuth?: boolean;
}

export const Header = ({ links, isAuth }: HeaderProps) => {
  const [activeLink, setActiveLink] = useState("");
  const [activeMenu, setActiveMenu] = useState(false);
  const isWide = useIsWide(768);
  const { pathname } = useLocation();

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

  useEffect(() => {
    const htmlElement = document.querySelector("html");

    if (htmlElement !== null) {
      htmlElement.style.overflow = activeMenu ? "hidden" : "";
    }
  }, [activeMenu]);

  useEffect(() => {
    if (isWide) {
      setActiveMenu(false);
    }

    setActiveMenu(false);
  }, [activeLink, isWide]);

  return (
    <nav className="w-full flex flex-row justify-between">
      <NavLink
        to="/"
        className={`text-[1.2em] font-bold hover:cursor-pointer ${
          isAuth ? "text-primary-dark-green" : "text-white"
        }`}
        onClick={() => {
          setActiveLink("");
        }}
      >
        Samepy
      </NavLink>

      <BiMenu
        className="fixed md:hidden text-white hover:cursor-pointer z-50 right-[2em] bg-primary-dark-green rounded"
        size={"2em"}
        onClick={() => {
          setActiveMenu(!activeMenu);
        }}
      />
      <ul
        className={`w-full gap-[1em] justify-end items-center  hidden md:flex ${
          isAuth ? "text-primary-dark-green" : "text-primary-fluffy-white"
        }`}
      >
        {pathname !== "/login" &&
          pathname !== "/register" &&
          links.map((link: link, index: number) => {
            return index === links.length - 1 ? (
              <li>
                <NavLink
                  to={link.url}
                  end
                  className={`${
                    link.id && activeLink === link.id && "active-link"
                  } transition-all font-semibold px-[1em] py-[.2em] rounded-[1em] ${
                    isAuth
                      ? "text-primary-dark-green hover:text-white border border-primary-dark-green hover:bg-primary-dark-green"
                      : "hover:text-primary-light-green border border-primary-fluffy-white hover:border-[#fff] hover:bg-[#fff]"
                  }`}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    setActiveLink(link.id);
                    if (link.id && link.url.startsWith("/#")) {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }
                  }}
                >
                  {link.text}
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to={link.url}
                  end
                  className={`${
                    link.id && activeLink === link.id && "active-link"
                  } transition-all font-semibold ${
                    isAuth ? "hover:text-[#000]" : "hover:text-[#fff]"
                  }`}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    setActiveLink(link.id);
                    if (link.url.startsWith("/#")) {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }
                  }}
                >
                  {link.text}
                </NavLink>
              </li>
            );
          })}
      </ul>

      <ul
        className={`w-full h-[100vh] justify-center items-center text-primary-fluffy-white bg-primary-light-green fixed z-40 transition-all -top-[100vh] ${
          activeMenu &&
          "flex flex-col gap-[3em] top-0 left-0 burgerActive md:hidden"
        }`}
      >
        {pathname !== "/login" &&
          pathname !== "/register" &&
          links.map((link: link, index: number) => {
            return index === links.length - 1 ? (
              <li>
                <NavLink
                  to={link.url}
                  end
                  className={`${
                    link.id && activeLink === link.id && "active-link"
                  } transition-all hover:text-primary-light-green font-semibold border border-primary-fluffy-white hover:border-[#fff] hover:bg-[#fff] px-[1em] py-[.2em] rounded-[1em]`}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    setActiveLink(link.id);
                    if (link.id && link.url.startsWith("/#")) {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }
                  }}
                >
                  {link.text}
                </NavLink>
              </li>
            ) : (
              <li>
                <NavLink
                  to={link.url}
                  end
                  className={`${
                    link.id && activeLink === link.id && "active-link"
                  } transition-all hover:text-[#fff] font-semibold`}
                  onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    setActiveLink(link.id);
                    if (link.url.startsWith("/#")) {
                      e.preventDefault();
                      scrollToSection(link.id);
                    }
                  }}
                >
                  {link.text}
                </NavLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
