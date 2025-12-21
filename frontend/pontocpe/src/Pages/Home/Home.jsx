import { useEffect, useState } from "react";
import { Header,InputForm } from "../../Components/Components";
import { 
            LinkSessao, 
            LinkSessaoWrapper, 
            TabelaWrapper, 
            LoginButton,
            LoginButtonWrapper,
            DeslogarButtonWrapper,
            DeslogarButton,
            
        } from "./style";
import logo_cpe from "../../Images/logo_cpe.svg";
import { Carousel } from "../../Components/Carousel/Carousel";
import carouselData from "../../data/CarouselData.json";
import LoginModal from "../../Utils/LoginModal";
import { Trash2, LogOut} from "lucide-react";
import useAuthStore from "../../stores/auth";
import { useNavigate } from "react-router-dom";
import api from "../../services/api/api";
import { toast } from "react-toastify";


export default function Home(){

    const [openModal, setOpenModal] = useState(false);
    const [sessoes, setSessoes] = useState([]);
    const [carregando, setCarregando] = useState(false);

    const usuario = useAuthStore((state) => state.usuario);
    const clearAuth = useAuthStore((state) => state.clearAuth);
    const navigate = useNavigate();

    const getSessoes = async () => {
        try {
            setCarregando(true);
            const res = await api.get("sessoes");
            setSessoes(res.data);
            
        } catch (error) {
            const msg = error.response?.data?.message || "Erro ao buscar sessões";
            toast.error("Erro: " + msg);
        }
        finally{
            setCarregando(false);
        }
    };

    const deleteSessoes = async (id) => {

        const confirmar = window.confirm("Tem certeza que deseja encerrar esta sessão?");
        if (!confirmar) return;

        try {
            await api.delete(`sessoes/${id}`);
            toast.success("Sessão deletada com sucesso!");
            getSessoes();
        }
        catch (error){
            const msg = error.response?.data?.message || "Erro ao deletar sessão";
            toast.error(msg); 
        }
    };

    useEffect(() => {
        getSessoes();
    }, []);

    const calcularTempo = (chegadaISO) => {
        if (!chegadaISO) return "00:00";

        const chegada = new Date(chegadaISO);
        const agora = new Date();

        const diffMs = agora - chegada;
        const diffMin = Math.floor(diffMs / 1000 / 60);

        const horas = Math.floor(diffMin / 60);
        const minutos = diffMin % 60;

        return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}`;
    }; 

    const handleSessaoCriada = (novaSessao) => {
        setOpenModal(false);
        getSessoes();
    };
    
    const logout = () => {
        clearAuth();
    };

    if (carregando) return(
    
        <>  
        <InputForm>
            <h4>Carregando...</h4>
        </InputForm>
        
        </>
    );

     return(
        <>
            {!usuario}
            
            <Header>

                <a href="/home" className="icon_cpe">
                    <img src={logo_cpe} alt="Consultoria de Projetos Elétricos" className="logo_cpe"/>
                </a>

                <LinkSessaoWrapper>
                    <LinkSessao href="/home" style={{textDecoration: "underline"}}>HOME</LinkSessao>
                    <LinkSessao href="/perfil">PERFIL</LinkSessao>
                    <LinkSessao href="/usuarios">USUARIOS</LinkSessao>
                    <LinkSessao href="/gerenciarProjetos">PROJETOS</LinkSessao>
                
                </LinkSessaoWrapper>

                <DeslogarButtonWrapper>
                    <DeslogarButton type="button" onClick={logout}>
                            <LogOut />
                    </DeslogarButton>
                </DeslogarButtonWrapper> 

            </Header>

            <Carousel data={carouselData} />
            <LoginButtonWrapper>
                <LoginButton onClick={() => setOpenModal(true)}>
                        Fazer login
                </LoginButton>
            </LoginButtonWrapper>
            
                <TabelaWrapper>
                    <table>
                        <thead>
                            <tr>
                                <th scope="col">MEMBRO</th>
                                <th scope="col">CHEGADA</th>
                                <th scope="col">TEMPO</th>
                                <th></th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            
                            {sessoes.map((sessao) => {
                                const validateSessao = usuario?._id === sessao.id_usuario?._id;
                                return (
                            
                                <tr key={sessao._id || sessao.createdAt}>
                                    <td>
                                        <strong>{sessao.id_usuario?.nome || "Usuário não identificado"}</strong>
                                        <br />
                                        <span className="cargo">
                                            {sessao.status || sessao.id_usuario?.cargo || "Sem cargo"}
                                        </span>
                                    </td>

                                    <td>
                                        <span className="tag">
                                            {new Date(sessao.createdAt).toLocaleTimeString("pt-BR", {
                                                hour: "2-digit",
                                                minute: "2-digit"
                                            })}
                                        </span>
                                    </td>

                                    <td>
                                        <span className="tag">
                                            {calcularTempo(sessao.createdAt)}
                                        </span>
                                    </td>

                                    <td>
                                        {validateSessao && (
                                            <button 
                                                className="delete-btn" 
                                                onClick={() => deleteSessoes(sessao._id)}
                                                title="Encerrar sessão"
                                            >
                                                <Trash2 />
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            );
                        
                        })}
                        </tbody>
                    
                    </table>
                </TabelaWrapper>
            


            {openModal && <LoginModal close={() => setOpenModal(false)} />}
        </>
    );
} 
