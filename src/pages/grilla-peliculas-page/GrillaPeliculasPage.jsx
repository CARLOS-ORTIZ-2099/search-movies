/* import { useEffect, useState } from "react" */
import { Link, useNavigate, useParams } from "react-router-dom"
import '../grilla-peliculas/grilla-peliculas.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { useGrillaPelis } from "../../hooks/useGrillaPelis"
/* const urlApi =  import.meta.env.VITE_API_URL
const key = import.meta.env.VITE_KEY */
const images = import.meta.env.VITE_IMAGES

export const GrillaPeliculasPage = () => {
    const {page} = useParams()
    const {error, peliculas} = useGrillaPelis(page)
    const navigate = useNavigate()
    
const next = () => navigate(`/page/${parseInt(page)+1}`) 

const back = () => {
   if(page <=2){
    navigate(`/`)
    return
   }
    navigate(`/page/${parseInt(page)-1}`)
}

  return (
   
    <div className="container-phather">
        {
            error == null ? 
            <>
                 <div className="container">
                {
                    peliculas?.map(pelicula => {
                        return <div  className="pelicula-peticion" key={pelicula.id}>
                                        <div>
                                            <h1>{pelicula.title}</h1>
                                            {
                                                pelicula?.poster_path!== null ?
                                                <img className='img' src={`${images}/w500${pelicula.poster_path}`} alt="" /> 
                                                : <h1>no hay imagen</h1>
                                            }
                                            <br/>
                                            <Link to={`/pelicula/${pelicula.id}`}>see more</Link>
                                        </div>
                                </div>
                    })
                }      
            </div>
            <button onClick={back} className="button-back">{<FontAwesomeIcon  icon={faArrowLeft}fade />}</button>
            <button onClick={next} className="button-next">{<FontAwesomeIcon icon={faArrowRight} fade/>}</button>
            </>
            : <h1>{error.status} {error.statusText} </h1>
        }
           
    </div>
  )
}
