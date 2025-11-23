import { Header } from "../../Components/Components";
import { LinkSessao,LinkSessaoWrapper,TabelaWrapper } from "./style";
import logo_cpe from "../../Images/logo_cpe.svg";
import { Carousel } from "../../Components/Carousel/Carousel";
import carouselData from "../../data/CarouselData.json"

export default function Home(){

    return(
        <>
            <Header>

                <a href="/" className="icon_cpe">
                    <img src={logo_cpe} alt="Consultoria de Projetos Elétricos" className="logo_cpe"/>
                </a>
                <LinkSessaoWrapper>

                    <LinkSessao href="/" style={{textDecoration: "underline"}}>HOME</LinkSessao>
                    <LinkSessao href="/perfil" >PERFIL</LinkSessao>
                    <LinkSessao href="/usuarios">USUARIOS</LinkSessao>

                </LinkSessaoWrapper>
            </Header>

            <Carousel data={carouselData}>

            </Carousel>

            <TabelaWrapper>
                <table>
                    <thead>
                        <th scope="col">MEMBRO</th>
                        <th scope="col">CHEGADA</th>
                        <th scope="col">TEMPO</th>
                    </thead>

                </table>
            </TabelaWrapper>


        </>
    )
}