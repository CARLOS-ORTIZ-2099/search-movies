import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './grilla-peliculas.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

export const GrillaPeliculas = () => {
    const [peliculas, setPeliculas] = useState([])
    const [page, setPages] = useState(1)

    useEffect(()=> {
        GrillaPeliculas(page)
        
    },[page])

const next = () => {
    setPages((page) => page + 1)
    console.log(page)
}

const back = () => {
    setPages((page) => page - 1)
    console.log(page)

    if(page <=1){
        setPages(1)
    }   
}

    async function GrillaPeliculas(page) {
        try{
            let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=5541f1152f0ba9f5a5301b30076f90b6&page=${page}`)
                                        
            if(response.ok !== true) throw 'data no encontrada'
    
            let data = await response.json()
            setPeliculas(data.results)
            console.log(peliculas)
        }
        catch(error){
            console.log(error)
        }   
    }

  return (
    <div className="container-phather">
        
            <div className="container">
                {
                    peliculas?.map(pelicula => {
                        return <div  className="pelicula-peticion" key={pelicula.id}>
                                        <div>
                                            <h1>{pelicula.title}</h1>
                                            {
                                                pelicula?.poster_path!== null ? <img className='img' src={`https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`} alt="" /> : <h1>no hay imagen</h1>
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
    </div>
  )
}
