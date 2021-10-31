import { InputHTMLAttributes } from "react";
import { ContainerInput } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  placeholder: string;
}

export const Input = ({ label, placeholder, ...rest }: InputProps) => (
  <ContainerInput>
    {label && <label>{label}</label>}
    <input placeholder={placeholder} {...rest} />
  </ContainerInput>
);