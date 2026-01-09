import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './components/Header.tsx'
import Footer from './components/Footer.tsx'
import Filter from './components/Filter.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col bg-[#c2dfef] h-screen">
      <Header />
        <div className="flex-1 max-w-[1200px] w-full m-auto">
          <Filter title="componente-paulo"/>
          <Filter title="Outro componente"/>
        </div>
      <Footer />
    </div>
  </StrictMode>,
)
