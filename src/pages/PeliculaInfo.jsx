import { useNavigate} from "react-router-dom"
/* import charging from '../assets/rings.svg' */
/* import './pelicula.css' */
import useInfoPeli from "../hooks/useInfoPeli";
import useTrailerPeli from "../hooks/useTrailerPeli";
import { useState } from "react";
import { InfoPeliError } from "./error/InfoPeliError";
import './pelicula-info.css'
import { Trailer } from "../components/Trailer";
import { PeliDatos } from "../components/PeliDatos";

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
console.log(linkTrailer)

console.log(infoPeli)
  return (
      <>

        {
          infoPeli.error 
            ? 
            <InfoPeliError error={infoPeli.error}/>
            :
            <div className='peli-container'>  

                  <div className='peli-banner' style={{backgroundImage:`url(https://image.tmdb.org/t/p/w1280/${infoPeli.backdrop_path})`}}>        
                          <Trailer TrailerState={TrailerState} watchTrailer={watchTrailer} linkTrailer={linkTrailer}/> 
                  </div>

                  <div className="info-peli">
                      <PeliDatos infoPeli={infoPeli} back={back}/>
                  </div>

            </div>   
     }
      </>
    
  )
}
