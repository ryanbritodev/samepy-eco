import { useState } from "react";
import { Input } from "./components/Input";

export const SupportForm = () => {
  const [formData, setFormData] = useState({
    reason: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFormData({
      reason: "",
      message: "",
    });

    alert(
      `Mensagem de suporte enviada, fique atento ${localStorage.getItem(
        "name"
      )}, entraremos em contato em breve!`
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[25em] h-full max-h-[29em] flex flex-col justify-center items-center gap-[1em] bg-primary-light-green mt-[3em] rounded-lg p-[1em] py-[2em]"
    >
      <h2 className="w-full text-center px-[1em] font-bold text-primary-dark-green text-lg mb-[.8em]">
        Aconteceu algo? Conte-nos mais, responderemos em breve!
      </h2>
      <Input
        type="text"
        label="Motivo"
        name="reason"
        value={formData.reason}
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
