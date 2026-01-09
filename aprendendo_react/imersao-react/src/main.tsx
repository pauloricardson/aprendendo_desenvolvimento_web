import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="container">
      <Header />
        <div className="content">
          <p>Paulo</p>
        </div>
      <Footer />
    </div>
  </StrictMode>,
)
