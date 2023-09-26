
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { PageDinamica } from './pages/PageDinamica'
import {PeliculaInfo } from './pages/PeliculaInfo'
import { Header } from './components/Header'


function App() {


  return (
    <>
      <Header/>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/pelicula/:idPeli' element={<PeliculaInfo/>}/>
                <Route path='/:namepeli' element={<PageDinamica/>}/>
          
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

