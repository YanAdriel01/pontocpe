import axios from "axios";
import useAuthStore from "../../stores/auth";

const api = axios.create({ baseURL: 'http://localhost:8000/'} );

// Intercepta todas as requisições antes de enviar
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api; 