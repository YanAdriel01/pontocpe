
import {    Header, 
            Titulo,
            InputForm,
            InputString,
            CaptionWraper,
            Caption,
            ButtonWraper,
            Button } from "../../Components/Components";
import { PasswordInput } from "../../Components/PasswordInput.jsx";
import { useForm } from "react-hook-form";
import logo_cpe from "../../Images/logo_cpe.svg"
import { useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api/api.js";
import useAuthStore from "../../stores/auth.js";
import { useNavigate } from "react-router-dom";

export default function Login(){

   const [email, setEmail] = useState("");
   const [senha, setSenha] = useState("");
   const [carregando, setCarregando] = useState(false);
   const usuario = useAuthStore((state) => state.usuario);
   const setToken = useAuthStore((state) => state.setToken);
   const navigate = useNavigate();

   const handleSubmit = async(e) =>{
        e.preventDefault();
        try {
            setCarregando(true); 
            const res = await api.post("login", { email, senha });
            const { token } = res.data;

            setToken(token);
        } 
        
        catch (error) {
             toast.error("Erro " + error.response.data.message);
        }
        finally{
            setCarregando(false);
        }
    
    };
    
    if (carregando) return(

        <>  
        <InputForm>
            <h4>Carregando...</h4>
        </InputForm>
        
        </>

    );

    return(
        <>
            <Header>

                <a href="/" className="icon_cpe">
                    <img src={logo_cpe} alt="Consultoria de Projetos Elétricos" className="logo_cpe"/>
                </a>

            </Header>

            <Titulo>Login</Titulo>

            <InputForm onSubmit={handleSubmit}>
                <InputString 
                    placeholder="Email" 
                    type="email" 
                    id="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />
                <PasswordInput 
                    placeholder="Senha"      
                    id="senha"
                    required
                    onChange={(e) => setSenha(e.target.value)} 
                />

                <CaptionWraper>

                    <Caption>Não tem login? Faça seu cadastro 
                        <a href="/cadastro">aqui</a>
                    </Caption>

                </CaptionWraper>

                <ButtonWraper>
                    <Button
                        type="submit"
                    >ENTRAR</Button>
                </ButtonWraper>

                { !!usuario && navigate("/home")}


            </InputForm>
        </>
    )
}