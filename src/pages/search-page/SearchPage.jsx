/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from 'react-router-dom'
import {Link} from 'react-router-dom'
import './page-dinamica.css'
import { ErrorBusqueda } from '../error/ErrorBusqueda'
import { Buscador } from '../../components/buscador/Buscador'
import { useGrillaPelis } from '../../hooks/useGrillaPelis'
const urlApi = import.meta.env.VITE_API_URL
const key = import.meta.env.VITE_KEY
const images = import.meta.env.VITE_IMAGES

export const SearchPage = () => {
    const {namepeli} = useParams()
    const back = useNavigate()
    const url = `${urlApi}/search/movie?api_key=${key}&query=${namepeli}`
    const {error, peliculas} = useGrillaPelis(namepeli, url)

  return (
   <>
      <Buscador />
      <div className='container-phather'>
          
        <div className='button-container'>
          <button onClick={() => back('/')}>Return Home</button>
        </div>
          
        <div className='page-dinamica-container'>
          {
            error == null ?
            peliculas.map(pelicula => (
              <div className='pelicula-peticion' key={pelicula.id}>
                    <h1>{pelicula.original_title}</h1>
                    {
                      pelicula.poster_path!== null ? 
                      <img className='img' src={`${images}/w500/${pelicula.poster_path}`} alt="" /> 
                      :<h2>No hay imagen disponible</h2>
                    }       
                    <br/>
                    <Link to={`/pelicula/${pelicula.id}`}>see more</Link>
              </div>
            )) 
            : <ErrorBusqueda error={error}/>
          }
        </div>
      </div>
   </>
  )
}
