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

export default function Perfil(){
    const [openModal, setOpenModal] = useState(false)

    return(
        <>
            <Header>

                <a href="/" className="icon_cpe">
                    <img src={logo_cpe} alt="Consultoria de Projetos Elétricos" className="logo_cpe"/>
                </a>
                <LinkSessaoWrapper>
                
                    <LinkSessao href="/">HOME</LinkSessao>
                    <LinkSessao href="/perfil" style={{textDecoration: "underline"}}>PERFIL</LinkSessao>
                    <LinkSessao href="/usuarios">USUARIOS</LinkSessao>

                </LinkSessaoWrapper>

            </Header>

            <Titulo>
                Perfil
            </Titulo>
            
            <InformacaoUsuario>
                <h2> Nome: </h2>
                <h2> E-mail: </h2>
                <h2> Cargo: </h2>
            </InformacaoUsuario>

            <ButtonWraper>
                <Button onClick={() => setOpenModal(true)}>EDITAR</Button>
                <Modal isOpen = {openModal} onClose={() => setOpenModal(false)} />
            </ButtonWraper>
            
        </>
    )
}