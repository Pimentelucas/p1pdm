import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import './index.css'
import App from './App.jsx'
import 'primereact/resources/themes/vela-blue/theme.css';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
