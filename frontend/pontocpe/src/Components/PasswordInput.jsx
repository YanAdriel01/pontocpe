import { useState } from "react";
import styled from "styled-components";
import { Eye, EyeOff } from "lucide-react";

export const InputString = styled.input`
  width: 650px;
  height: 54px;
  font-size: 1rem;
  border-radius: 40px;
  border: none;
  background-color: #F5F5F5;
  padding-left: 23px;

  //menor tamanho: até 320px
    @media (max-width: 320px) {
        width: 100%;
        max-width: 280px;
        height: 45px;
        font-size: 0.9rem;
        padding-left: 16px;
    }

    //celulares: 320 - 480px
    @media (max-width: 480px) {
        width: 100%;
        max-width: 389px;
        height: 45px;
        font-size: 1rem;
        padding-left: 18px;
    }

    //tablets pequenos e telefones maiores: 480 - 768px
    @media (max-width: 768px) {
        width: 100%;
        max-width: 600px;
        height: 50px;
        font-size: 1rem;
        padding-left: 20px;
    }
`;

const PasswordWrapper = styled.div`
  position: relative;
  width: 650px;
  height: 54px;
  margin: auto;

  //menor tamanho: até 320px
  @media (max-width: 320px) {
    width: 90%;
    max-width: 280px;
    height: 45px;
  }

  //celulares: 320 - 480px
  @media (max-width: 480px) {
    width: 90%;
    max-width: 389px;
    height: 45px;
  }

  //tablets pequenos e telefones maiores: 480 - 768px
  @media (max-width: 768px) {
    width: 95%;
    max-width: 600px;
    height: 50px;
  }
`;

const IconeOlho = styled.button`
  position: absolute;
  right: 16px;
  background: transparent;
  top: 50%;
  transform: translateY(-50%);
  border: none;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.2rem;
  color: #555;
  border-radius: 50%;
  width: 32px;
  height: 32px;

  transition: color 0.2s ease, transform 0.1s ease;

  svg {
    color: #666;
    width: 25px;
    height: 25px;
    background-color: transparent;
  }

  &:hover {
    color: #000;
    transform: translateY(-50%) scale(1.1);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }
`;

export const PasswordInput = ({ placeholder = "Senha", value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <PasswordWrapper>
      <InputString
        placeholder={placeholder}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={onChange}
      />
      <IconeOlho onClick={() => setShowPassword((prev) => !prev)}>
        {showPassword ? <EyeOff /> : <Eye />}
      </IconeOlho>
    </PasswordWrapper>
  );
};