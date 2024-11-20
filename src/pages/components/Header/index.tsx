import { useState } from "react";
import { NavLink } from "react-router-dom";

type link = { text: string; url: string; id: string };
interface HeaderProps {
  links: link[];
}

export const Header = ({ links }: HeaderProps) => {
  const [activeLink, setActiveLink] = useState("");

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      window.history.pushState(null, "", `#${id}`);
    }
  };

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

      <ul className="w-full flex gap-[1em] justify-end items-center text-primary-fluffy-white">
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
