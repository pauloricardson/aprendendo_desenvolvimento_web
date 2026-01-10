import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Header from './components/Header.tsx';
import Footer from './components/Footer.tsx';
import Filter from './components/Filter.tsx';
import Card from './components/Card.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="flex flex-col h-screen bg-[#c2dfef]">
      <Header />
      <main className="flex-1 max-w-[1200px] w-full m-auto">
        <Filter title="Busque o conteúdo que deseja assistir hoje" placeholder='Busque seu curso' />
        <div className="bg-white rounded-md py-2 mt-10">
          <p className='text-[#00A2F7] font-bold text-center'>Os cursos maus buscados</p>
          <div className='flex justify-between gap-2'>
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  </StrictMode>,
)
