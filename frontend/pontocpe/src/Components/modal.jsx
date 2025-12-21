import { useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import useAuthStore from "../stores/auth";
import { toast } from "react-toastify";
import { usePutUsuario } from "../hooks/user";

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


export default function Modal({ close, atualizarDados }){

    const usuario = useAuthStore((state) => state.usuario);
    const setUsuario = useAuthStore((state) => state.setUsuario);

    const userId = usuario?._id || usuario?.id;

    const {
            handleSubmit,
            register,
            reset,
            watch,
            formState:{ dirtyFields },
        } = useForm({
            defaultValues:{
                nome: "",
                email: "",
                cargo: "",
                senha: "",
                confirmarSenha: ""
            }
        });

        const senhaDigitada = watch("senha");

    const { mutate: editarUsuario, isLoading } = usePutUsuario ({
        onSuccess: () => {
            toast.success("Usuário alterado com sucesso!");

            if (data && setUsuario){
                setUsuario(data);
            }

            if (atualizarDados) atualizarDados();
            close();
        },
        onError: (error) => {
            toast.error("Erro no formulário" + error.message);
        }
    });

    useEffect(() => {
        if (usuario){
            reset({
                nome: usuario.nome || "",
                email: usuario.email || "",
                senha: "", 
                confirmarSenha: "",
                cargo: usuario.cargo || ""
            });
        }

    }, [usuario, reset]);

    const response = (data) => {

        if(!userId){
            toast.error("Erro: ID do usuário não encontrado.");
            return;
        }
        if (data.senha) {
            if (data.senha !== data.confirmarSenha) {
                toast.error("As senhas não coincidem!");
                return;
            }
        }

        const dadosAlterados = Object.keys(dirtyFields).reduce((acc, key) => {
            if (key === 'confirmarSenha') return acc;

            if (dirtyFields[key]) {
                const valor = data[key];
                if (valor !== "" && valor !== null && valor !== undefined) {
                    acc[key] = valor;
                }
            }
            return acc;
        }, {});

        if (Object.keys(dadosAlterados).length === 0) {
            toast.info("Nenhuma alteração realizada.");
            close();
            return;
        }
        editarUsuario({
            id: userId,
            body: dadosAlterados
        });

    };
    
    
    return(
        
        <ModalOverlay onClick={close}>
            <ModalWrapper onClick={(e) => e.stopPropagation()}>
                <h2 className="tituloModal">Editar usuário</h2>
                <button className="botaoFecharModal" onClick={close}>x</button>
                <form onSubmit={handleSubmit(response)}>

                    <input 
                        {...register("nome")} 
                        placeholder="Nome Completo" 
                        type="text" 
                    />
                    <input 
                        {...register("email")}
                        placeholder="E-mail" 
                        type="E-mail"
                    />
                    <input 
                        {...register("senha")}
                        placeholder="Nova Senha (deixe vazio para manter)"
                        type="password" 
                        autoComplete="new-password"
                    />
                    <input 
                        {...register("confirmarSenha")}
                        placeholder="Repita a Senha"
                        type="password"
                    />
                    <input 
                        {...register("cargo")} 
                        placeholder="Cargo"
                        type="text" 
                    />

                    <button className="botaoSalvarEdicao" type="submit"> 
                        {isLoading ? "SALVANDO..." : "SALVAR"}
                    </button>
                </form>
            </ModalWrapper>
        </ModalOverlay>
    )
}