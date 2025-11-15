
import {    Header, 
            Titulo,
            InputWraper,
            InputString,
            CaptionWraper,
            Caption,
            ButtonWraper,
            Button } from "../../Components/Components";
import { PasswordInput } from "../../Components/PasswordInput.jsx";
import logo_cpe from "../../Images/logo_cpe.svg"
import { useNavigate } from "react-router-dom";

export default function Login(){


    const navigate = useNavigate();

    return(
        <>
            <Header>

                <a href="/" className="icon_cpe">
                    <img src={logo_cpe} alt="Consultoria de Projetos Elétricos" className="logo_cpe"/>
                </a>

            </Header>

            <Titulo>Login</Titulo>

            <InputWraper>
                <InputString placeholder="Email" type="email" />
                <PasswordInput placeholder="Senha" />
            </InputWraper>

            <CaptionWraper>

                <Caption>Não tem login? Faça seu cadastro 
                    <a href="/cadastro">aqui</a>
                </Caption>

            </CaptionWraper>

            <ButtonWraper>
                <Button
                    onClick={() => navigate("/")}
                >ENTRAR</Button>
            </ButtonWraper>
        </>
    )
}