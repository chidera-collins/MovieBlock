import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MovieBlock from './MovieBlock'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MovieBlock/>
  </StrictMode>,
)
