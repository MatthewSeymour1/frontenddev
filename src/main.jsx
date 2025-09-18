import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>Hollow World</h1>
    <button onClick={() => {console.log("Hello")}}>Click Me</button>
  </StrictMode>,
)
