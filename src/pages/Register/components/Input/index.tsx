interface InputProps {
  name: string;
  label: string;
  type: "text" | "textarea" | "password" | "number" | "email";
  onChange?: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  value: string | number | readonly string[] | undefined;
  required?: boolean;
}

export const Input = ({
  name,
  label,
  type,
  value,
  onChange,
  required,
}: InputProps) => {
  return (
    <div className="w-full h-fit flex flex-col hover:cursor-pointer gap-[.4em]">
      <label
        htmlFor={"input-" + label}
        className="hover:cursor-pointer font-bold text-primary-light-green text-lg"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={"input-" + label}
          className="hover:cursor-pointer px-[.8em] py-[.5em] rounded bg-primary-dark-green outline-none border border-primary-light-green text-primary-light-green font-semibold resize-none"
          value={value}
          onChange={onChange}
          name={name}
          required={required}
        ></textarea>
      ) : (
        <input
          type={type}
          id={"input-" + label}
          value={value}
          onChange={onChange}
          className="hover:cursor-pointer px-[.8em] py-[.5em] rounded bg-primary-dark-green outline-none border border-primary-light-green text-primary-light-green font-semibold"
          name={name}
          required={required}
        />
      )}
    </div>
  );
};
