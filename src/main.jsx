import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css'

import {QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import axios from 'axios'

const queryClient = new QueryClient

window.axios = axios

window.axios.defaults.baseUrl = 'http://127.0.0.1:8000'
window.axios.defaults.headers.common['Acecpt'] = 'application/json'
window.axios.defaults.headers.common['Content-Type'] = 'application/json'
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttRequest'
window.axios.defaults.withCredentials = true




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App/>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </React.StrictMode>,
)
