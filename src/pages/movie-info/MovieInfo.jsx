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

  const watchTrailer = () => setTrailerState(!TrailerState)

  const navegation = useNavigate()   

  const back = () => navegation(-1)  

  return (
      <>
      {/* el custom hook useInfoPeli puede tener la info de la peli si la base de datos no reporto un error o un objeto con el error si la base de datos reporto algun error o no encontro la peli */}
        {
          error != null 
            ? 
            <InfoPeliError error={error}/>
            :
            <div className='peli-container'>  

              <div className='peli-banner' style={{backgroundImage:`url(${images}/w1280/${infoPeli.backdrop_path})`}}>        
                <Trailer TrailerState={TrailerState} watchTrailer={watchTrailer} linkTrailer={linkTrailer} errorTrailer={errorTrailer}/> 
              </div>

              <div className="info-peli">
                <PeliDatos infoPeli={infoPeli} back={back}/>
              </div>

            </div>   
        }
      </>
    
  )
}
