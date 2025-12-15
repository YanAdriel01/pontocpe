import { useEffect, useState } from "react";
import { Header } from "../../Components/Components";
import { 
            LinkSessao, 
            LinkSessaoWrapper, 
            TabelaWrapper, 
            LoginButton,
            LoginButtonWrapper,
            DeslogarButtonWrapper,
            DeslogarButton
            
        } from "./style";
import logo_cpe from "../../Images/logo_cpe.svg";
import { Carousel } from "../../Components/Carousel/Carousel";
import carouselData from "../../data/CarouselData.json";
import LoginModal from "../../Utils/LoginModal";
import { Trash2, LogOut} from "lucide-react";
import useAuthStore from "../../stores/auth";
import { useNavigate } from "react-router-dom";


export default function Home(){

    const [openModal, setOpenModal] = useState(false);
    const [sessao, setSessao] = useState(null);

    const usuario = useAuthStore((state) => state.usuario);
    const clearAuth = useAuthStore((state) => state.clearAuth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!usuario) navigate("/");
    }, [usuario, navigate]);

    const calcularTempo = (chegadaISO) => {
         const chegada = new Date(chegadaISO);
        const agora = new Date();

        const diffMs = agora - chegada;
        const diffMin = Math.floor(diffMs / 1000 / 60);

        const horas = Math.floor(diffMin / 60);
        const minutos = diffMin % 60;

        return `${String(horas).padStart(2, "0")}:${String(minutos).padStart(2, "0")}`;
    };

    const handleSessaoCriada = (dadosSessao) => {
        setSessao(dadosSessao);
        setOpenModal(false);
    };
    
    const logout = () => {
        clearAuth();
        setSessao(null);
        navigate("/");
    }

    return(
        <>
            { !usuario && navigate("/") }
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
                        {sessao && (
                        <tbody>
                            <tr>
                                <td>
                                    <strong>{sessao.id_usuario.nome}</strong>
                                    <br />
                                    <span className="cargo">{sessao.id_usuario.status}</span>
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
                                    <button className="delete-btn"><Trash2 /></button>
                                </td>
                            </tr>
                        </tbody>
                        )}
                    </table>
                </TabelaWrapper>
            


            {openModal && <LoginModal close={() => setOpenModal(false)} />}
        </>
    );
}
