import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Page1 from './WeatherApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page1 />
  </StrictMode>,
)