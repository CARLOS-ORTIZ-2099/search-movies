import { Link, useNavigate } from "react-router-dom"
import './grilla-peliculas.css'
import { useGrillaPelis } from "../../hooks/useGrillaPelis"
import { ErrorPetitionMovies } from "../error/ErrorPetitionMovies"
import { ArrowsButtons } from "../../components/arrows-buttons/ArrowsButtons"

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
                        peliculas?.map(pelicula => (
                            <div  className="pelicula-peticion" key={pelicula.id}>
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
                        ))
                    }      
                </div>
          
                <ArrowsButtons next={next}/>
            </>
            :<ErrorPetitionMovies error = {error}/>
             
        }
    </div>
  )
}
