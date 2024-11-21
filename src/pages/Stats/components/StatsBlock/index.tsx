interface StatsBlockProps {
  title: string;
  status: string;
  subtitle: string;
}

export const StatsBlock = ({ title, status, subtitle }: StatsBlockProps) => {
  return (
    <div className="w-full min-w-[15em] max-w-[24em] h-fit min-h-[14em] flex flex-col justify-between items-center gap-[1em] bg-primary-light-green p-[2em] rounded-md">
      <h2 className="w-full text-white font-bold text-md text-center">
        {title}
      </h2>
      <h1 className="w-full text-primary-dark-green font-bold text-3xl text-center">
        {status}
      </h1>
      <p className="w-full text-white font-bold text-sm text-center">
        {subtitle}
      </p>
    </div>
  );
};
