import ReactDOM from 'react-dom/client'
import App from './App'
import '../index.css'
import { BrowserRouter } from 'react-router-dom'
import React from 'react'
import { AuthProvider } from './state/Auth.context'
import { ChakraProvider } from '@chakra-ui/react'
import axios from 'axios'

axios.interceptors.request.use(
  (req) => {
    console.error('get')
    console.error('get---req',req)
    return req
},(err) => {
    Promise.reject(err)
})

axios.interceptors.response.use(
  (res)=>{
    console.error('post')
    console.error('post---res',res)
    return res
},(err)=>{
    Promise.reject(err)
})


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
