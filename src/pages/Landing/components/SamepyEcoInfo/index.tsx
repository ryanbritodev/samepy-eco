interface SamepyEcoInfoProps {
  text: string;
  iconPath: string;
}

export const SamepyEcoInfo = ({ text, iconPath }: SamepyEcoInfoProps) => {
  return (
    <div className="flex flex-col w-[18em] h-[8em] justify-center items-center text-center gap-[1.2em]">
      <img src={iconPath} alt="SamepyEcoInfo" className="w-[3em]" />
      <p className="w-full font-bold text-primary-dark-green text-sm">{text}</p>
    </div>
  );
};
