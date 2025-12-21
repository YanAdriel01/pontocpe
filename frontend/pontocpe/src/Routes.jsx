import {
    RouterProvider,
    createBrowserRouter,
    Route,
    createRoutesFromElements,
    Outlet,
    Navigate
    } from "react-router-dom";
import  Home  from "./Pages/Home";
import  Login from "./Pages/Login/Login"
import  Cadastro from "./Pages/Cadastro";
import  Usuarios from "./Pages/Usuarios/Usuarios";
import  Perfil from "./Pages/Perfil/Perfil";
import Projetos from "./Pages/Projetos/Projetos";
import useAuthStore from "./stores/auth";

function RotasPrivadas(){

    const token = useAuthStore((state) => state.token);

    if (token) return <Outlet />;

    return <Navigate to="/" replace />;
}


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            {/* rotas públicas */}
            <Route path="/" element={<Login/>}/>
            <Route path="cadastro" element={<Cadastro/>}/>

            {/* Rotas privadas */}

            <Route element={<RotasPrivadas />}>

                <Route path="/home" element={<Home/>}/>
                <Route path="perfil" element={<Perfil/>}/>
                <Route path="usuarios" element={<Usuarios/>}/>
                <Route path="gerenciarProjetos" element={<Projetos />}/>

            </Route>
            
        </Route>
    )
)
export default function Routes(){
    return <RouterProvider router={router} />
}