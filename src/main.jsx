import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// Import Bootstrap SCSS trước
import './assets/styles/scss/bootstrap.scss'
// Sau đó import custom CSS
import './assets/styles/css/style.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
