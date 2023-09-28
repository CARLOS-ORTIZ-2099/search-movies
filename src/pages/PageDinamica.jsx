import { useNavigate, useParams } from 'react-router-dom'
import { Buscador } from '../components/Buscador'
import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './page-dinamica.css'
import { ErrorBusqueda } from './error/ErrorBusqueda'

export const PageDinamica = () => {
    const {namepeli} = useParams()
    console.log(namepeli)

    const back = useNavigate()
    const [peliculasBusqueda, setPeliculasBusqueda] = useState([])

    useEffect(()=> {
        buscar(namepeli)
    }, [namepeli])

    async function buscar(namepeli) {
        try{
            let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=5541f1152f0ba9f5a5301b30076f90b6&query=${namepeli}`)
            let data = await response.json()
            console.log(data)
            if(data.results.length < 1){
                throw 'upss parece que la pelicula que buscas no existe'
            }
            setPeliculasBusqueda(data.results)
        }
        catch(error){
          console.error(error)
          setPeliculasBusqueda({error:error})
          console.log(peliculasBusqueda)
        }
  }

  return (
   <>
        <Buscador />
      <div className='container-phather'>
          
          <div className='button-container'>
            <button onClick={()=> back('/')}>Return Home</button>
          </div>
          
          <div className='page-dinamica-container'>
              {
                peliculasBusqueda.error ? <ErrorBusqueda peliculasBusqueda={peliculasBusqueda}/>
                              :( peliculasBusqueda.map(ele => {
                  return <div className='pelicula-peticion' key={ele.id}>
                          <h1>{ele.original_title}</h1>
                          {
                            ele.poster_path!== null ?<img className='img' src={`https://image.tmdb.org/t/p/w500/${ele.poster_path}`} alt="" /> :'No hay imagen disponible'
                          }
                          
                          <br/>
                          <Link to={`/pelicula/${ele.id}`}>see more</Link>
                        </div>
                }))
              }
          </div>
      </div>
   </>
  )
}
