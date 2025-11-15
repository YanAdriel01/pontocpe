
import { 
        Header ,
        Titulo,
        InputWraper,
        InputString,
        CaptionWraper,
        Caption,
        ButtonWraper,
        Button
                } from "../../Components/Components"
import {PasswordInput} from "../../Components/PasswordInput.jsx"
import logo_cpe from "../../Images/logo_cpe.svg"



export default function Cadastro(){

    return(
        <>
            <Header>
            
                <a href="/" className="icon_cpe">
                    <img src={logo_cpe} alt="Consultoria de Projetos Elétricos" className="logo_cpe"/>
                </a>

            </Header>
            <Titulo>CADASTRO</Titulo>
            <InputWraper>
                <InputString placeholder="Nome completo" type="text"></InputString>
                <InputString placeholder="Email" type="email"></InputString>
                <InputString placeholder="Cargo" type="text"></InputString>
                <InputString placeholder="Senha" type="password"></InputString>
                <PasswordInput placeholder="Repita a senha"/>
            </InputWraper>
            <CaptionWraper>
            
                <Caption>Já possui conta? Faça login 
                    <a href="/login">aqui</a>
                </Caption>

            </CaptionWraper>
            <ButtonWraper>
                <Button onClick={() => navigate("/login")}>CADASTRAR</Button>
            </ButtonWraper>
        </>
    )
}