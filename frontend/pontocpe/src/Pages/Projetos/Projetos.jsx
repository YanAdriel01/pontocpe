import { Header,Titulo } from "../../Components/Components";
import logo_cpe from "../../Images/logo_cpe.svg";
import { 
            BotaoVoltar, 
            BotaoVoltarWrapper,
            SearchWrapper,
            SearchInput,
            AddButton
        } from "./style";
import { Undo2, CirclePlus, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../../services/api/api";
import { toast } from "react-toastify";
import { TabelaWrapper } from "../Projetos/style";
import { Trash2, SquarePen} from "lucide-react";
import ProjetoModal from "../../Utils/ProjetoModal";
import EditProjetoModal from "../../Utils/EditProjetoModal";


export default function Projetos(){

    const [openModalAdd, setOpenModalAdd] = useState(false);
    const [openModalEdit, setOpenModalEdit] = useState(false);
    const [projetos, setProjetos] = useState([]);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const [selectedProject, setselectedProject] = useState(null);

    const voltarHome = () => {
        navigate("/home")
    };

    const getProjetos = async () => {
        try {
            const res = await api.get("projetos");
            setProjetos(res.data);
        } catch (error) {
            const msg = error.response.data.message|| "Erro ao buscar projetos";
            toast.error("Erro: " + msg);
        }
    };

    const deleteProjetos = async (id) => {
    
            const confirmar = window.confirm("Tem certeza que deseja apagar o projeto?");
            if (!confirmar) return;
    
            try {
                await api.delete(`projetos/${id}`);
                toast.success("Projeto deletado com sucesso!");
                getProjetos();
            }
            catch (error){
                const msg = error.response.data.message || "Erro ao apagar o projeto";
                toast.error(msg); 
            }
    };

    const handleEdit = (projeto) => {
        setselectedProject(projeto);
        setOpenModalEdit(true);
    }

    useEffect(() => {
        getProjetos();
    }, []);

    const projetosFiltrados = projetos.filter((projeto) => 
        projeto.nome?.toLowerCase().includes(search.toLowerCase())
    );

    return (

        <>    
            <Header>
            
                <a href="/gerenciarProjetos" className="icon_cpe">
                    <img src={logo_cpe} alt="Consultoria de Projetos Elétricos" className="logo_cpe"/>
                </a>
                <BotaoVoltarWrapper>
                <BotaoVoltar type="button" onClick={voltarHome}>
                        <Undo2 />
                </BotaoVoltar>
            </BotaoVoltarWrapper> 
            </Header>

            <Titulo>
                GERENCIAR PROJETOS
            </Titulo>

            <SearchWrapper>
                <div className="search-area">
                <Search className="search-icon" />
                <SearchInput
                    placeholder="Pesquisar..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                </div>
                <AddButton onClick={() => setOpenModalAdd(true)}>
                    <CirclePlus />
                </AddButton>
            </SearchWrapper>
            <TabelaWrapper>
                <table>
                    <tbody>
                        {projetosFiltrados.length > 0 ? (
                            projetosFiltrados.map((projeto) => (
                                <tr key={projeto._id}>
                                    
                                    <td className="nome-projeto ">
                                        <div className="cor-projeto ">
                                            {projeto.cor && (
                                                <div style={{
                                                    width: '15px', 
                                                    height: '15px', 
                                                    borderRadius: '50%', 
                                                    backgroundColor: projeto.cor,
                                                    border: '1px solid #fff'
                                                }}></div>
                                            )}
                                            <div className="text-info">
                                                <strong>{projeto.nome || "Sem Nome"}</strong>
                                                <br />
                                                <span className="descricao">
                                                    {projeto.description || "Sem descrição"}
                                                </span>
                                            </div>
                                        </div>
                                    </td>
                                    
                                    <td>
                                        <div className="action">

                                            <button 
                                                className="action-btn" 
                                                onClick={() => handleEdit(projeto)}
                                                title="Editar projeto"
                                                style={{ color: '#FFFFFF',  }} 
                                            >
                                                <SquarePen size={24} />
                                            </button>

                                            <button 
                                                className="action-btn" 
                                                onClick={() => deleteProjetos(projeto._id)}
                                                title="Apagar projeto"
                                                style={{ color: '#FFFFFF' }}
                                            >
                                                <Trash2 size={24} />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="2" style={{textAlign: 'center', padding: '20px'}}>
                                    Nenhum projeto encontrado.
                                </td>
                            </tr>
                        )}
                    </tbody> 
                    
                </table>
            </TabelaWrapper>

            {openModalAdd && <ProjetoModal close={() => setOpenModalAdd(false)}/>}
            {openModalEdit && <EditProjetoModal 
                close={() => setOpenModalEdit(false)}
                projeto={selectedProject}
                atualizarTabela={getProjetos}
            />}
                    
        </>    
    );
}