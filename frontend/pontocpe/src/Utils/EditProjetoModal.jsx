import { ModalBackground, ModalContainer } from "../Pages/Projetos/style";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useAuthStore from "../stores/auth";
import { usePutProjeto } from "../hooks/user";
import { useEffect } from "react";

export default function EditProjetoModal({ close, projeto, atualizarTabela}){

    const {
        handleSubmit,
        register,
        reset,
        formState:{ errors, dirtyFields },
    } = useForm({});

    const { mutate: editarProjeto, isLoading } = usePutProjeto({
        onSuccess: () => {
            toast.success("Projeto atualizado com sucesso!");
            if (atualizarTabela) atualizarTabela();
            close();
        },
        onError: (error) => {
            toast.error("Erro no formulário" + error.message);
        }
    });

    useEffect(() => {
        if (projeto) {
            reset({
                nome: projeto.nome || "",
                cor: projeto.cor || "",
                description: projeto.description || ""
            });
        }
    }, [projeto?._id, reset]);

    const response = (data) => {
        if (!projeto || !projeto._id) {
            toast.error("Erro: Dados do projeto não encontrados.");
            console.error("Objeto 'projeto' está undefined:", projeto);
            return;
        }
        const dadosAlterados = Object.keys(dirtyFields).reduce((acc, key) => {
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

        editarProjeto({ 
            id: projeto._id, 
            body: dadosAlterados 
        });
    };

    return(
        <ModalBackground>
            <ModalContainer>
                <form onSubmit={handleSubmit(response)}>
                    <h2>Adicionar projeto</h2>

                    <label>Nome do projeto</label>
                    <input
                        placeholder="Digite um nome..."
                        type="text"
                        {...register("nome")}
                    />
                    <label>Cor</label>
                    <input 
                        placeholder="Digite uma cor..."
                        type="text"
                        {...register("cor")}
                    />
                    <label>Descrição</label>
                    <input
                        placeholder="Digite uma descrição..."
                        type="text"
                        {...register("description")}
                    />

                    <div className="buttons">
                        <button type="button" className="cancelar" onClick={close}>
                            Cancelar
                        </button>

                        <button type="submit" className="confirmar">
                            { isLoading ? "Salvando..." : "Salvar Alterações"}
                        </button>
                    </div>
                </form>
            </ModalContainer>
        </ModalBackground>
    )
}