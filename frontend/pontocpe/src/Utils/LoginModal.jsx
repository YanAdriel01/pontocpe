import { useForm } from "react-hook-form";
import { ModalBackground, ModalContainer } from "../Pages/Home/style";
import useAuthStore from "../stores/auth";
import { usePutUsuario, usePostSessao } from "../hooks/user";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

export default function LoginModal({ close, onSessionCreated }) {

    const usuario = useAuthStore((state) => state.usuario);
    const usuarioId = usuario?._id;

    const queryClient = useQueryClient();
    
    //hooks
    const {
        handleSubmit,
        register,   
        formState:{ errors },
    } = useForm();

    const { mutate: atualizarStatusUsuario } = usePutUsuario({
        onSuccess: () => {
            toast.success("Status atualizado com sucesso");
            queryClient.invalidateQueries({ queryKey: ["usuario"]});
    },

    onError: (err) => {
        toast.error("Erro" + err.message);
    }
        
    });

    //criarsessao
    const { mutate: criarSessao } = usePostSessao({

        onSuccess: (sessaoCriada) => {
            toast.success("Sessão criada");

            if (onSessionCreated) {
                onSessionCreated(sessaoCriada);
            }
            queryClient.invalidateQueries(["sessao"]);
            close();
        },

        onError: (err) => {
            toast.error("Erro ao criar sessão: " + (err?.message || err));
            },

    });

    function response(formData) {

        const updates = {};
        if (formData.status && formData.status.trim() !== "") {
            updates.status = formData.status
        };

        if (Object.keys(updates).length > 0) {

            atualizarStatusUsuario({ 
                id: usuarioId, 
                body: updates 
            });
        }
        criarSessao({ id_usuario: usuarioId });
    }
    return (
        <ModalBackground>
            <ModalContainer>
                <form onSubmit={handleSubmit(response)}>
                    <h2>Registro de Login</h2>

                    <label>Mensagem (opcional)</label>
                    <textarea 
                        placeholder="Digite uma observação..."
                        {...register("status")}
                    />

                    <div className="buttons">
                        <button type="button" className="cancelar" onClick={close}>
                            Cancelar
                        </button>

                        <button type="submit" className="confirmar">
                            Confirmar
                        </button>
                    </div>
                </form>
            </ModalContainer>
        </ModalBackground>
    );
}
