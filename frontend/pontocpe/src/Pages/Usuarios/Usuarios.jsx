import { Header } from "../../Components/Components";
import { LinkSessao,LinkSessaoWrapper } from "./style";
import logo_cpe from "../../Images/logo_cpe.svg";

export default function Usuarios(){

    return(
        <>
            <Header>

                <a href="/home" className="icon_cpe">
                    <img src={logo_cpe} alt="Consultoria de Projetos Elétricos" className="logo_cpe"/>
                </a>
                <LinkSessaoWrapper>            
                
                    <LinkSessao href="/home">HOME</LinkSessao>
                    <LinkSessao href="/perfil">PERFIL</LinkSessao>
                    <LinkSessao href="/usuarios" style={{textDecoration: "underline"}}>USUARIOS</LinkSessao>
                    <LinkSessao href="/gerenciarProjetos">PROJETOS</LinkSessao>

                </LinkSessaoWrapper>

            </Header>
        </>
    )
}