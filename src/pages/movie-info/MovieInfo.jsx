import { useNavigate} from "react-router-dom"
import useInfoPeli from "../../hooks/useInfoPeli";
import useTrailerPeli from "../../hooks/useTrailerPeli";
import { useState } from "react";
import { InfoPeliError } from "../error/InfoPeliError";
import './movie-info.css'
import { Trailer } from "../../components/trailer/Trailer";
import { PeliDatos } from "../../components/peli-datos/PeliDatos";
const images = import.meta.env.VITE_IMAGES

export const MovieInfo = () => {
  
  const [TrailerState, setTrailerState] = useState(false)
  const {infoPeli, error} = useInfoPeli()
  const {linkTrailer, errorTrailer} = useTrailerPeli()
  const navegation = useNavigate()  

  const watchTrailer = () => setTrailerState(!TrailerState)

  const back = () => navegation(-1)  

  return (
      <>
        {
          error == null ?
          <div className='peli-container'>  

            <div className='peli-banner' style={{backgroundImage:`url(${images}/w1280/${infoPeli.backdrop_path})`}}>        
              <Trailer TrailerState={TrailerState} linkTrailer={linkTrailer} errorTrailer={errorTrailer}  watchTrailer={watchTrailer}/> 
            </div>

            <div className="info-peli">
              <PeliDatos infoPeli={infoPeli} back={back}/>
            </div>

          </div>   
            
          :<InfoPeliError error={error}/>
           
        }
      </>
    
  )
}
