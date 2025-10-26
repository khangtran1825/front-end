import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/styles/scss/bootstrap.scss'
import './assets/lib/animate/animate.min.css'
import './assets/styles/css/style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
