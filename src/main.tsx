import App from './App.tsx'
import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Lenis from 'lenis'

// Smooth scroll
const lenis = new Lenis({ duration: 1.4, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) })
function raf(time: number) { lenis.raf(time); requestAnimationFrame(raf) }
requestAnimationFrame(raf)

createRoot(document.getElementById('root')!).render(
  <StrictMode><App /></StrictMode>
)