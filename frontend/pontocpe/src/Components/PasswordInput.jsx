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
    @media (max-width: 320px){

        width: 250px;
        height: 30px;
        font-size: 12px;
    }


`;

const PasswordWrapper = styled.div`
  position: relative;
  width: 650px;
  height: 54px;

  //menor tamanho: até 320px
    @media (max-width: 320px){

        width: 250px;
        height: 30px;
        font-size: 12px;
    }
`;

const PasswordInputField = styled(InputString)`
  padding-right: 55px; 
  box-sizing: border-box;
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
    width: 20px;
    height: 20px;
  }

  &:hover {
    color: #000;
    transform: translateY(-50%) scale(1.1);
  }

  &:active {
    transform: translateY(-50%) scale(0.95);
  }
  //menor tamanho: até 320px
  @media (max-width: 320px){
    width: 15px;
    height: 15px;
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