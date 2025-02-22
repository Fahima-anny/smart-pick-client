import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { routes } from './routes';
import AuthProvider from './Authentication/AuthProvider';
import { ToastContainer } from 'react-toastify';
import { HelmetProvider } from 'react-helmet-async';



createRoot(document.getElementById('root')).render(
  <StrictMode>
<AuthProvider>
<HelmetProvider>
<ToastContainer
position="top-center"
autoClose={2000}
/>
<RouterProvider router={routes} />
</HelmetProvider>
</AuthProvider>
  </StrictMode>,
)
