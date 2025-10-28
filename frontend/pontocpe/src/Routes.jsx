import {
    RouterProvider,
    createBrowserRouter,
    Route,
    createRoutesFromElements
    } from "react-router-dom";
import  Home  from "./Pages/Home";
import  Login from "./Pages/Login/Login"
import  Cadastro from "./Pages/Cadastro";
import  Usuarios from "./Pages/Usuarios/Usuarios";
import  Perfil from "./Pages/Perfil/Perfil";




const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/" element={<Home/>}/>
            <Route path="login" element={<Login/>}/>
            <Route path="cadastro" element={<Cadastro/>}/>
            <Route path="perfil" element={<Perfil/>}/>
            <Route path="usuarios" element={<Usuarios/>}/>
        </Route>
    )
)
export default function Routes(){
    return <RouterProvider router={router} />
}