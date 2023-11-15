
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/home/Home'
import { PageDinamica } from './pages/page-dinamica/PageDinamica'
import {PeliculaInfo } from './pages/pelicula-info/PeliculaInfo'
import { Header } from './components/header/Header'
import { PageGrilla } from './pages/page-grilla/PageGrilla'




function App() {


  return (
    <>
        <BrowserRouter>
          <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/page/:page' element={<PageGrilla/>}/>
                <Route path='/pelicula/:idPeli' element={<PeliculaInfo/>}/>
                <Route path='/:namepeli' element={<PageDinamica/>}/>
          
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

