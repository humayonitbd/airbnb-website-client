import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  RouterProvider,
} from "react-router-dom";
import './index.css'
import { router } from './Routes/Routes.jsx';
import AuthProvider from './Context/AuthProvider.jsx';

import {
  
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

const queryClient = new QueryClient();



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <AuthProvider>
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}>
          <App />
         
        </RouterProvider>
    </QueryClientProvider>
      </AuthProvider>
  </React.StrictMode>
);
