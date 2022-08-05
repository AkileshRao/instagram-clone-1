import ReactDOM from 'react-dom/client'
import App from './App'
import '../index.css'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { AuthProvider } from './state/Auth.context'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <ChakraProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </AuthProvider>
  </React.StrictMode>
)
