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
const images = import.meta.env.VITE_IMAGES

export const PeliculaInfo = () => {
  
  const [TrailerState, setTrailerState] = useState(false)

  const watchTrailer = () => setTrailerState(!TrailerState)

  const navegation = useNavigate()   

  const back = () => navegation(-1)  

let infoPeli = useInfoPeli()
let linkTrailer = useTrailerPeli()

  return (
      <>
      {/* el custom hook useInfoPeli puede tener la info de la peli si la base de datos no reporto un error o un objeto con el error si la base de datos reporto algun error o no encontro la peli */}
        {
          infoPeli.error 
            ? 
            <InfoPeliError error={infoPeli.error}/>
            :
            <div className='peli-container'>  

                  <div className='peli-banner' style={{backgroundImage:`url(${images}/w1280/${infoPeli.backdrop_path})`}}>        
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
