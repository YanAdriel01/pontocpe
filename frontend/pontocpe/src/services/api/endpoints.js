import api from "./api";

//Usuarios

    //read
export async function GetUsuario() {
    const { data } = await api.get(`usuarios`)
    return data;  
} 

    //create
export async function PostUsuario(body) {
    const { data } = await api.post(`usuarios`, body);
    return data;  
}

    //update
export async function PutUsuario(id, body) {
    const { data } = await api.put(`usuarios/${id}`, body);
    return data;  
}

    //delete
export async function DeleteUsuario(id) {
    const { data } = await api.delete(`usuarios/${id}`)
    return data;  
}

 //Sessoes

    //read
export async function GetSessao() {
    const {data} = api.get("/sessoes")
    return data;  
}

    //create
export async function PostSessao(body) {
    const { data } = await api.post("/sessoes", body);
    return data;  
}

    //delete
export async function DeleteSessao() {
    const {data} = api.delete("/sessoes/:id")
    return data;  
}


//Projetos

    //read
export async function GetProjeto() {
    const {data} = api.get("/projetos")
    return data;  
}

    //create
export async function PostProjeto(body) {
    const {data} = await api.post(`projetos`, body);
    return data;
}

    //update
export async function PutProjeto(id, body) {
    const {data} = await api.put(`projetos/${id}`, body)
    return data;  
}

    //delete
export async function DeleteProjeto() {
    const {data} = api.delete("/projetos/:id")
    return data;  
} 

