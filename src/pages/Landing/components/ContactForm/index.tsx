import { useState } from "react";
import { Input } from "./components/Input";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    alert(`A mensagem foi enviada ${formData.name}, obrigado!`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[25em] h-full max-h-[28em] flex flex-col justify-center items-center gap-[1em] bg-primary-light-green mt-[3em] rounded-lg p-[1em] py-[2em]"
    >
      <Input
        type="text"
        label="Seu Nome"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <Input
        type="text"
        label="Seu Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        type="textarea"
        label="Mensagem"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="text-primary-green bg-primary-dark-green w-full max-w-[12em] py-[.5em] rounded-lg font-bold mt-[1em] transition-all hover:bg-primary-green hover:text-primary-dark-green"
      >
        Enviar
      </button>
    </form>
  );
};
