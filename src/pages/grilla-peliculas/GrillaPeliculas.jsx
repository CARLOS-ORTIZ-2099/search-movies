import { Link, useNavigate } from "react-router-dom"
import './grilla-peliculas.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
import { useGrillaPelis } from "../../hooks/useGrillaPelis"

const images = import.meta.env.VITE_IMAGES

export const GrillaPeliculas = () => {

    const {error, peliculas} = useGrillaPelis(1)
    const navigate = useNavigate()

    
const next = () => navigate(`/page/${parseInt(1)+1}`) 

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
            <button  className="button-back">{<FontAwesomeIcon  icon={faArrowLeft}fade />}</button>
            <button onClick={next} className="button-next">{<FontAwesomeIcon icon={faArrowRight} fade/>}</button>
            </>
            :<h1>{error.status} {error.statusText}</h1>
             
        }
    </div>
  )
}
