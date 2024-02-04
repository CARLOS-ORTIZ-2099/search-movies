import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Home } from './pages/home/Home'
import {MovieInfo} from './pages/movie-info/MovieInfo'
import { Header } from './components/header/Header'
import { SearchPage } from './pages/search-page/SearchPage'


function App() {
  return (
    <>
        <BrowserRouter>
          <Header/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/pelicula/:idPeli' element={<MovieInfo/>}/>
                <Route path='/:namepeli' element={<SearchPage/>}/>
            </Routes>
        </BrowserRouter>
    </>
  )
}

export default App

