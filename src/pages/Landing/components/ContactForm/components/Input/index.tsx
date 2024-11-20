interface InputProps {
  label: string;
  type: "text" | "textarea" | "password" | "number" | "email";
}

export const Input = ({ label, type }: InputProps) => {
  return (
    <div className="w-full h-fit flex flex-col hover:cursor-pointer gap-[.4em]">
      <label
        htmlFor={"input-" + label}
        className="hover:cursor-pointer font-bold text-primary-dark-green text-lg"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={"input-" + label}
          className="hover:cursor-pointer px-[.8em] py-[.5em] rounded bg-primary-light-green outline-none border border-primary-dark-green text-primary-dark-green font-semibold resize-none"
        ></textarea>
      ) : (
        <input
          type={type}
          id={"input-" + label}
          className="hover:cursor-pointer px-[.8em] py-[.5em] rounded bg-primary-light-green outline-none border border-primary-dark-green text-primary-dark-green font-semibold"
        />
      )}
    </div>
  );
};
