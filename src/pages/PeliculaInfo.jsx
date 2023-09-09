import { useNavigate} from "react-router-dom"
/* import charging from '../assets/rings.svg' */
/* import './pelicula.css' */
import YouTube from 'react-youtube';
import useInfoPeli from "../hooks/useInfoPeli";
import useTrailerPeli from "../hooks/useTrailerPeli";
import { useState } from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlay, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import { InfoPeliError } from "./error/InfoPeliError";
import './peliculaInfo.css'

export const PeliculaInfo = () => {

  const [TrailerState, setTrailerState] = useState(false)

  const watchTrailer = () => {
    setTrailerState(!TrailerState)
  }

 const navegation = useNavigate()   

  const back = () => {
     navegation(-1)
  }  

let infoPeli = useInfoPeli()
let linkTrailer = useTrailerPeli()


/* if(!infoPeli){
    return <span><img  src={charging} alt="" /></span>
} */
console.log(infoPeli)
  return (
      <>

        {
          infoPeli.error ? <InfoPeliError error={infoPeli.error}/>:
            <div className='peli-container'>  
                  <div className='peli-banner' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1280/${infoPeli.backdrop_path})`}}>         
                      { !TrailerState ? 
                          <FontAwesomeIcon className="icon-play" onClick={watchTrailer} icon={faCirclePlay} bounce values="ver"/>
                        : 
                        <div className="youtube-container">
                            <YouTube className="youtube"
                                videoId={linkTrailer}
                                opts={
                                    {
                                      playerVars:{autoplay:1,controls:1,cc_load_policy:0,fs:1,iv_load_policy:0,modestbranding:0,rel:0,showinfo:0}
                                    }
                                }
                            /> 
                            <FontAwesomeIcon className="icon-x" onClick={watchTrailer} icon={faCircleXmark} fade/>
                        </div>
                      }                
                  </div>

                  <div className="info-peli">
                      <h1>{infoPeli.title}</h1>
                      <p>{infoPeli.overview}</p>
                      <h3>date :{infoPeli.release_date}</h3>
                      <h3>language original: {infoPeli.original_language}</h3>
                      <h3>average : {infoPeli.vote_average}%</h3>
                      <button onClick={back}>retur home</button>
                  </div>
            </div>   
     }
      </>
    
  )
}
