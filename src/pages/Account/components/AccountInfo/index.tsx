interface AccountInfoProps {
  label: string;
  text: string;
}

export const AccountInfo = ({ label, text }: AccountInfoProps) => {
  return (
    <div className="w-full h-fit">
      <h3 className="text-md font-bold text-primary-dark-green">{label}</h3>
      <p className="text-2xl  font-bold text-primary-dark-green">{text}</p>
    </div>
  );
};
