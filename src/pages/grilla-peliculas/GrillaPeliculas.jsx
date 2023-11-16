import { Link } from "react-router-dom"
import './grilla-peliculas.css'
import { useGrillaPelis } from "../../hooks/useGrillaPelis"
import { ErrorPetitionMovies } from "../error/ErrorPetitionMovies"
import { ArrowsButtons } from "../../components/arrows-buttons/ArrowsButtons"
import { useState } from "react"

const images = import.meta.env.VITE_IMAGES

export const GrillaPeliculas = () => {
    const [page, setPage] = useState(1)
    const {error, peliculas} = useGrillaPelis(page)

    const next = () => setPage(previus => previus + 1)
    
    const back = () => {
        setPage(previus => previus - 1)
        if(page <=1){
            setPage(1)
        }
    }

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
                                        : <h2>no hay imagen</h2>
                                    }
                                        <br/>
                                    <Link to={`/pelicula/${pelicula.id}`}>see more</Link>
                                </div>
                            </div>
                        ))
                    }      
                </div>
          
                <ArrowsButtons next={next} back={back}/>
            </>
            :<ErrorPetitionMovies error = {error}/>
             
        }
    </div>
  )
}
