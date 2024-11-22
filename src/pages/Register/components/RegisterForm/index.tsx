import { useState } from "react";
import { Input } from "../Input";
import { createUser } from "../../../../api";

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const RegisterForm = () => {

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("As senhas diferem, por favor, verifique e digite corretamente");
      setFormData((prevValue) => {
        return { ...prevValue, confirmPassword: "" };
      });

      return;
    }

    const user = await createUser(
      formData.email,
      formData.password,
      formData.name
    );

    if (user) {
      localStorage.setItem("name", user.name);
      localStorage.setItem("email", user.email);
      localStorage.setItem("uId", user.id);

      window.location.href = "/"; // to update website and load localStorage
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[25em] h-full max-h-[30em] flex flex-col justify-center items-center gap-[1em] bg-primary-dark-green mt-[1em] rounded-lg p-[1em] py-[2em]"
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
        type="password"
        label="Sua Senha"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <Input
        type="password"
        label="Repita a Senha"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />

      <button
        type="submit"
        className="text-primary-green border border-primary-green w-full max-w-[12em] py-[.5em] rounded-lg font-bold mt-[1em] transition-all hover:bg-primary-green hover:text-primary-dark-green"
      >
        Criar conta
      </button>
    </form>
  );
};
