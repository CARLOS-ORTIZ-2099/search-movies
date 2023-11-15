import { useNavigate, useParams } from 'react-router-dom'

import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import './page-dinamica.css'
import { ErrorBusqueda } from '../error/ErrorBusqueda'
import { Buscador } from '../../components/buscador/Buscador'
const urlApi = import.meta.env.VITE_API_URL
const key = import.meta.env.VITE_KEY
const images = import.meta.env.VITE_IMAGES

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
            let response = await fetch(`${urlApi}/search/movie?api_key=${key}&query=${namepeli}`)
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
            <button onClick={()=> back(-1)}>Return Home</button>
          </div>
          
          <div className='page-dinamica-container'>
              {
                peliculasBusqueda.error ? <ErrorBusqueda peliculasBusqueda={peliculasBusqueda}/>
                              :( peliculasBusqueda.map(ele => {
                  return <div className='pelicula-peticion' key={ele.id}>
                          <h1>{ele.original_title}</h1>
                          {
                            ele.poster_path!== null ?<img className='img' src={`${images}/w500/${ele.poster_path}`} alt="" /> 
                            :'No hay imagen disponible'
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
