import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import './grilla-peliculas.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'
const urlApi =  import.meta.env.VITE_API_URL
const key = import.meta.env.VITE_KEY
const images = import.meta.env.VITE_IMAGES

export const GrillaPeliculas = () => {
    const [peliculas, setPeliculas] = useState([])
    const [page, setPages] = useState(1)

    useEffect(()=> {
        petitionPeliculas(page) 
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

    async function petitionPeliculas(page) {
        try{
            let response = await fetch(`${urlApi}/movie/popular?api_key=${key}&page=${page}`)
                                        
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
                                                pelicula?.poster_path!== null ? <img className='img' src={`${images}/w500${pelicula.poster_path}`} alt="" /> 
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
    </div>
  )
}
