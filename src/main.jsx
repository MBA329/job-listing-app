import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
 
  <StrictMode>
     <QueryClientProvider client={new QueryClient()}>
   
      <App />
  </QueryClientProvider>,
  </StrictMode>,
)
