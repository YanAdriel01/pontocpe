import { ModalBackground, ModalContainer } from "../Pages/Projetos/style";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import { usePostProjeto } from "../hooks/user";

export default function ProjetoModal({close}){

    const queryClient = useQueryClient();

    //hooks
    const {
        handleSubmit,
        register,
        formState:{ errors },
    } = useForm({});

    const { mutate: createProjeto, isLoading, isError } = usePostProjeto({
            onSuccess: () => {
                toast.success("projeto criado com sucesso");
                queryClient.invalidateQueries({
                queryKey: ["projeto"]
            });
            close();
        },
    
        onError: (err) => {
            toast.error("Erro no formulário " + err.message);
        }
            
    });

        //onSubmit
    function response(data) {
        createProjeto(data);
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
                            {isLoading ? "Salvando..." : "Confirmar"}
                        </button>
                    </div>
                </form>
            </ModalContainer>
        </ModalBackground>
    );
}