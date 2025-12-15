import {    Button, 
            Header, 
            Titulo, 
            ButtonWraper 
        } from "../../Components/Components";
import {    LinkSessao, 
            LinkSessaoWrapper, 
            InformacaoUsuario
        } from "./style";
import Modal from "../../Components/modal";
import logo_cpe from "../../Images/logo_cpe.svg";
import { useState } from "react";
import useAuthStore from "../../stores/auth";

export default function Perfil(){
    const [openModal, setOpenModal] = useState(false);
    const usuario = useAuthStore((state) => state.usuario);

    return(
        <>
            <Header>

                <a href="/home" className="icon_cpe">
                    <img src={logo_cpe} alt="Consultoria de Projetos Elétricos" className="logo_cpe"/>
                </a>
                <LinkSessaoWrapper>
                
                    <LinkSessao href="/home">HOME</LinkSessao>
                    <LinkSessao href="/perfil" style={{textDecoration: "underline"}}>PERFIL</LinkSessao>
                    <LinkSessao href="/usuarios">USUARIOS</LinkSessao>
                    <LinkSessao href="/gerenciarProjetos">PROJETOS</LinkSessao>

                </LinkSessaoWrapper>

            </Header>

            <Titulo>
                Perfil
            </Titulo>
            
            <InformacaoUsuario>
                {!!usuario && (
                <>    
                    <h2> Nome: { usuario.nome } </h2>
                    <h2> E-mail: { usuario.email }</h2>
                    <h2> Cargo: { usuario.cargo }</h2>
                </>
                )}
            </InformacaoUsuario>

            <ButtonWraper>
                <Button onClick={() => setOpenModal(true)}>EDITAR</Button>
                <Modal isOpen = {openModal} onClose={() => setOpenModal(false)} />
            </ButtonWraper>
            
        </>
    )
}