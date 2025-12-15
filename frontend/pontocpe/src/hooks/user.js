import {useQuery, useMutation} from "@tanstack/react-query";
import { 
            PostUsuario, 
            GetUsuario, 
            PutUsuario, 
            DeleteUsuario, 
            PostSessao,
            GetSessao,
            DeleteSessao
        } from "../services/api/endpoints";

export function useGetUsuario()
{
    return useQuery({ 
        queryKey:["usuario"],
        queryFn: GetUsuario,
    });
    
}

export function usePostUsuario({
    onSuccess = () => {},
    onError = () => {},
} = {}) {

    return useMutation({ mutationFn: PostUsuario, onSuccess, onError});
    
}

export function usePutUsuario({
    onSuccess = () => {},
    onError = () => {},
} = {}) {

    return useMutation({ mutationFn: ({id, body}) => PutUsuario(id,body), onSuccess, onError});
    
}

export function useDeleteUsuario({
    onSuccess = () => {},
    onError = () => {},
} = {}) {

    return useMutation({ mutationFn: (id) => DeleteUsuario(id), onSuccess, onError});
    
}

//sessoes

export function useGetSessao()
{
    return useQuery({ 
        queryKey:["sessao"],
        queryFn: GetSessao,
    });
    
}

export function usePostSessao({
    onSuccess = () => {},
    onError = () => {},
} = {}) {

    return useMutation({ mutationFn: PostSessao, onSuccess, onError});
    
}


export function useDeleteSessao({
    onSuccess = () => {},
    onError = () => {},
} = {}) {

    return useMutation({ mutationFn: (id) => DeleteSessao(id), onSuccess, onError});
    
}