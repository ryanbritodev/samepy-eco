import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

type link = { text: string; url: string; id: string };
interface HeaderProps {
  links: link[];
}

export const Header = ({ links }: HeaderProps) => {
  const [activeLink, setActiveLink] = useState("");
  const [activeMenu, setActiveMenu] = useState(false);

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
    setActiveMenu(false);
  }, [activeLink]);

  return (
    <nav className="w-full flex flex-row justify-between">
      <NavLink
        to="/"
        className="text-[1.2em] font-semibold text-[#fff] hover:cursor-pointer"
        onClick={() => {
          setActiveLink("");
        }}
      >
        Samepy
      </NavLink>

      <BiMenu
        className="hidden max-md:flex text-white hover:cursor-pointer z-50"
        size={"2em"}
        onClick={() => {
          setActiveMenu(!activeMenu);
        }}
      />
      <ul
        className={`w-full gap-[1em] justify-end items-center text-primary-fluffy-white hidden md:flex`}
      >
        {links.map((link: link, index: number) => {
          return index === links.length - 1 ? (
            <li>
              <NavLink
                to={link.url}
                end
                className={`${
                  link.id && activeLink === link.id && "active-link"
                } transition-all hover:text-primary-light-green font-semibold border border-primary-fluffy-white hover:border-[#fff] hover:bg-[#fff] px-[1em] py-[.2em] rounded-[1em]`}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  if (link.id && link.url.startsWith("/#")) {
                    e.preventDefault();
                    setActiveLink(link.id);
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
                  if (link.url.startsWith("/#")) {
                    e.preventDefault();
                    setActiveLink(link.id);
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
          activeMenu && "flex flex-col gap-[3em] top-0 left-0 burgerActive md:hidden"
        }`}
      >
        {links.map((link: link, index: number) => {
          return index === links.length - 1 ? (
            <li>
              <NavLink
                to={link.url}
                end
                className={`${
                  link.id && activeLink === link.id && "active-link"
                } transition-all hover:text-primary-light-green font-semibold border border-primary-fluffy-white hover:border-[#fff] hover:bg-[#fff] px-[1em] py-[.2em] rounded-[1em]`}
                onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
                  if (link.id && link.url.startsWith("/#")) {
                    e.preventDefault();
                    setActiveLink(link.id);
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
                  if (link.url.startsWith("/#")) {
                    e.preventDefault();
                    setActiveLink(link.id);
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
