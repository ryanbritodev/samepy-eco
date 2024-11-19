import { Link } from "react-router-dom";

type link = { text: string; url: string };
interface HeaderProps {
  links: link[];
}

export const Header = ({ links }: HeaderProps) => {
  return (
    <nav className="w-full flex flex-row justify-between">
      <h1 className="text-[1.2em] font-semibold text-[#fff] hover:cursor-default">
        Samepy
      </h1>

      <ul className="w-full flex gap-[1em] justify-end items-center text-primary-fluffy-white">
        {links.map((link: link, index: number) => {
          return index === links.length - 1 ? (
            <li>
              <Link
                to={link.url}
                className="transition-all hover:text-primary-light-green font-semibold border border-primary-fluffy-white hover:border-[#fff] hover:bg-[#fff] px-[1em] py-[.2em] rounded-[1em]"
              >
                {link.text}
              </Link>
            </li>
          ) : (
            <li>
              <Link
                to={link.url}
                className="transition-all hover:text-[#fff] font-semibold"
              >
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
