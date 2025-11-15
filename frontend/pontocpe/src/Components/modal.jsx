import { Children } from "react";
import styled from "styled-components";

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

    background-color: #FFFFFF;
    border-radius: 10px;
    border: 2px solid #CCCCCC;
    z-index: 101;

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

    input{
        width: 485px;
        height: 49px;
        border: 2px solid #C4C4C4;
        border-radius: 20px;
        color: #C4C4C4;
        background-color: #FFFFFF;
        padding-left: 20px;
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

    if (!isOpen) return null;

    return(
        
        <ModalOverlay onClick={onClose}>
            <ModalWrapper onClick={(e) => e.stopPropagation()}>
                <h2 className="tituloModal">Editar usuário</h2>
                <button className="botaoFecharModal" onClick={onClose}>x</button>
                <input placeholder="Nome Completo" type="text" />
                <input placeholder="E-mail" type="E-mail" />
                <input placeholder="Cargo" type="text" />
                <input placeholder="Senha" type="password"></input>
                <input placeholder="Repita a Senha" type="password"></input>
                <button className="botaoSalvarEdicao" onClick={() => {alert("Edição realizada"); onClose()}}> SALVAR </button>
            </ModalWrapper>
        </ModalOverlay>
    )
}