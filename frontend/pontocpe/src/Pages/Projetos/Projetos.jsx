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
import { useState } from "react";


export default function Projetos(){

    const navigate = useNavigate();
    const voltarHome = () => {
        navigate("/home")
    };

    const [search, setSearch] = useState("");




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
                    /* value={search}
                    onChange={(e) => setSearch(e.target.value)} */
                />
                </div>

                <AddButton>
                    <CirclePlus />
                </AddButton>
            </SearchWrapper>
                        

        </>    
    );
}