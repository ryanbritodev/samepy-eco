import { useState } from "react";
import { Input } from "../Input";
import { findUserByEmailAndPassword } from "../../../../api";

interface FormData {
  email: string;
  password: string;
}

export const LoginForm = () => {

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
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
      email: "",
      password: "",
    });

    const user = await findUserByEmailAndPassword(
      formData.email,
      formData.password
    );

    if (user !== null) {
      alert(`Olá ${user.name}, seja bem vindo de volta!`);

      localStorage.setItem("name", user.name);
      localStorage.setItem("email", user.email);
      localStorage.setItem("uId", user.id);

      window.location.href = "/"; // to update website and load localStorage
      return;
    }

    alert(`Email ou senha incorretos, tente novamente!`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[25em] h-full max-h-[28em] flex flex-col justify-center items-center gap-[1em] bg-primary-dark-green mt-[3em] rounded-lg p-[1em] py-[2em]"
    >
      <Input
        type="email"
        label="Seu Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <Input
        type="password"
        label="Sua Senha"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <button
        type="submit"
        className="text-primary-green border border-primary-green w-full max-w-[12em] py-[.5em] rounded-lg font-bold mt-[1em] transition-all hover:bg-primary-green hover:text-primary-dark-green"
      >
        Fazer login
      </button>
    </form>
  );
};
