
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import App from './App.jsx';

import "react-toastify/dist/ReactToastify.css";

const queryClient = new QueryClient({
  defaultOptions:{ queries: { retry: false } }, //caso faça uma querie e ela não retorne corretament, não irá tentar novamente sozinho
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    <ToastContainer 
      position="bottom-right"
      autoClose={4000}
      limit={1}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover={true}
      theme="dark"
    /> 
  </StrictMode>,
)
