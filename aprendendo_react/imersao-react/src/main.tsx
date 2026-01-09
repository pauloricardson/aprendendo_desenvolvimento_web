import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Filter from './components/Filter.tsx';
import Card from './components/Card.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col bg-[#c2dfef] h-screen">
      <Header />
        <main className="flex-1 max-w-[1200px] w-full m-auto">
          <Filter title="Busque o conteúdo que deseja assistir hoje" placeholder='Busque seu curso'/>
        </main>
        <div className='bg-white rounded-md'>
          <Card />
        </div>
      <Footer />
    </div>
  </StrictMode>,
)
