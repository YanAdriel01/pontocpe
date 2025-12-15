import { Children } from "react";
import styled from "styled-components";
import { useState } from "react";
import useAuthStore from "../stores/auth";
import { toast } from "react-toastify";

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;

const ModalWrapper = styled.div`
    
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
    width: 588px;
    height: 615px;
    gap: 25px;

    background-color: #696969;
    border-radius: 10px;
    border: 2px solid #292828;
    z-index: 101;

    h2{
        color: #000;
    }

    .tituloModal{
        font-family: 'Roboto', sans-serif;
        font-weight: 600;
        background-color: transparent;
    }

    .botaoFecharModal{
        position: absolute;
        top: 15px;
        right: 15px;
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-size: 28px;
        color: #000;
        padding: 0;
        width: 32px;
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        object-fit: contain;
        
        &:hover {
            transform: scale(1.2);
        }
    }
    form{

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 15px;
        background-color: transparent;

        input{
        width: 485px;
        height: 49px;
        border: 2px solid #292828;
        border-radius: 20px;
        color: #292828;;
        background-color: #FFFFFF;
        padding-left: 20px;
    }


    }
    
    .botaoSalvarEdicao{
        position: absolute;
        bottom: 34px;
        border: none;
        background-color: #FFFFFF;
        border: 2px solid #F19709;
        border-radius: 10px;
        cursor: pointer;
        font-size: 28px;
        color: #F19709;
        padding: 0;
        width: 214px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            transform: scale(1.2);
        }
    }

`;


export default function Modal({ isOpen, onClose }){

    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [cargo, setCargo] = useState("");
    const usuario = useAuthStore((state) => state.usuario);
    const id = usuario?.id; //puxando o id do usuário
    console.log({id})


    const handleSubmit = async(e) =>{
        e.preventDefault();

        try {
            const atualizacao = {};

            if (nome.trim() !== "") atualizacao.nome = nome;
            if (email.trim() !== "") atualizacao.email = email;
            if (cargo.trim() !== "") atualizacao.cargo = cargo;
            if (senha.trim() !== "") atualizacao.senha = senha;

            const res = await api.put("usuarios/${id}",atualizacao);
            
            toast.success("usuário alterado");
            onClose();
            
        } catch (error) {
            toast.error("Erro no formulário " + err.message);
            
        }

    }

    if (!isOpen) return null;

    return(
        
        <ModalOverlay onClick={onClose}>
            <ModalWrapper onClick={(e) => e.stopPropagation()}>
                <h2 className="tituloModal">Editar usuário</h2>
                <button className="botaoFecharModal" onClick={onClose}>x</button>
                <form nSubmit={handleSubmit}>
                    <input placeholder="Nome Completo" type="text" id="nome" onChange={(e) => setNome(e.target.value)}/>
                    <input placeholder="E-mail" type="E-mail" id="email" onChange={(e) => setEmail(e.target.value)}/>
                    <input placeholder="Cargo" type="text" id="cargo" onChange={(e) => setCargo(e.target.value)}/>
                    <input placeholder="Senha" type="password" id="senha" onChange={(e) => setSenha(e.target.value)}></input>
                    <input placeholder="Repita a Senha" type="password"></input>
                    <button className="botaoSalvarEdicao" type="submit"> SALVAR </button>
                </form>
            </ModalWrapper>
        </ModalOverlay>
    )
}