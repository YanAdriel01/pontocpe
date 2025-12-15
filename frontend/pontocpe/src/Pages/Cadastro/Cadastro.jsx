
import { 
        Header ,
        Titulo,
        InputForm,
        InputString,
        CaptionWraper,
        Caption,
        ButtonWraper,
        Button
                } from "../../Components/Components"
import { PasswordInput } from "../../Components/PasswordInput.jsx"
import { useForm } from "react-hook-form";
import { usePostUsuario } from "../../hooks/user.js";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import logo_cpe from "../../Images/logo_cpe.svg"



export default function Cadastro(){
    
    const queryClient = useQueryClient();
    
    //hooks
    const {
        handleSubmit,
        register,   
        reset,
        formState:{ errors },
    } = useForm({});

    const { mutate: cadastrarUsuario, isLoading, isError } = usePostUsuario({
        onSuccess: () => {
            toast.success("usuário cadastrado com sucesso");
            queryClient.invalidateQueries({
            queryKey: ["usuario"]
        })
        reset();
    },

    onError: (err) => {
        toast.error("Erro no formulário " + err.message);
    }
        
    });

    //onSubmit
    function response(data) {
        cadastrarUsuario(data);
    };

    return(
        <>
            <Header>
            
                <a href="/" className="icon_cpe">
                    <img src={logo_cpe} alt="Consultoria de Projetos Elétricos" className="logo_cpe"/>
                </a>

            </Header>
            <Titulo>CADASTRO</Titulo>
            <InputForm onSubmit={handleSubmit(response)}>
                <InputString {...register("nome")} placeholder="Nome completo" type="text"></InputString>
                <InputString {...register("email")} placeholder="Email" type="email"></InputString>
                <InputString {...register("senha")} placeholder="Senha" type="password"></InputString>
                <PasswordInput placeholder="Repita a senha"/>
                <InputString {...register("cargo")} placeholder="Cargo" type="text"></InputString>
                
                <CaptionWraper>
            
                    <Caption>Já possui conta? Faça login 
                        <a href="/">aqui</a>
                    </Caption>
                
                </CaptionWraper>
                <ButtonWraper>
                    <Button type="submit">
                        CADASTRAR
                    </Button>
                </ButtonWraper>
            </InputForm>
        </>
    )
}