import './App.css'
import SpaIcon from '@mui/icons-material/Spa';
import { Container } from '@mui/material';


function App() {
  return (
    <div>
      <div className='bg-[#5A5A5A] flex flex-row w-auto h-32 items-center gap-3'>
        <img className=' h-20 w-20 ml-3' src='/icone.png'></img>
          <h1 className='bg-transparent flex flex-row font-bold text-2xl text-[#8FC73B] border-l border-slate-200 p-2'>Filhas 
          <span className='bg-transparent text-[#713910] ml-1'> da terra</span>
          <SpaIcon className='flex flex-col bg-transparent' />
          </h1>
      </div>
      <div className=' h-[54px] w-auto bg-[#00AFF1] flex flex-row gap-3 font-semibold text-xl text-[#f1f1f1] items-center justify-between'>
        <div className='bg-transparent ml-28 flex flex-row gap-5'>
          <a className='bg-transparent border-b-2 border-slate-300 hover:border-slate-800 cursor-pointer'>SOBRE</a>
          <a className='bg-transparent border-b-2 border-slate-300 hover:border-slate-800 cursor-pointer'>PROJETOS</a>
        </div>
        <div className='flex flex-row'>
          <a><img className='h-auto w-auto' src="/ico-facebook.svg" alt="facebook" /></a>
          <a><img className='h-auto w-auto' src="/ico-instagram.svg" alt="instagram" /></a>
          <a><img className='h-auto w-auto' src="/ico-twitter.svg" alt="twitter" /></a>
          <a><img className='h-auto w-auto' src="/ico-youtube.svg" alt="youtube" /></a>
        </div>
      </div>
      <div>
        <Container fixed>
          <img src="teste.jpg" alt="teste" />
        </Container>
      </div>
    </div>
  )
}

export default App
