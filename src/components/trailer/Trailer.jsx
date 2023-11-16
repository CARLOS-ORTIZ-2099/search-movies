/* eslint-disable react/prop-types */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlay, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import YouTube from 'react-youtube';


/* se recibe como props el trailerState que me indica si el trailer debe mostrarse o no, la funcion watchTrailer que se encarga de cambiar 
   ese estado y link trailer que es el valor que retornara el custo Hook useTrailePeli, que sabemos retornra un error o un video */
   const opts = {  height: '100%', width: '100%',  
    playerVars:{autoplay:1,controls:1,cc_load_policy:0,fs:1,iv_load_policy:0,modestbranding:0,rel:0,showinfo:0} }

export const Trailer = ({TrailerState, linkTrailer, watchTrailer, errorTrailer}) => {
  return (
    <div className='container-prueba'>

            { !TrailerState ? 
                    <FontAwesomeIcon className="icon-play" onClick={watchTrailer} icon={faCirclePlay} bounce values="ver"/>
                    : 
                    <div className="youtube-container">
                        {
                            errorTrailer == null  ? 
                            <>
                                <YouTube className="youtube"
                                         videoId={linkTrailer}
                                         opts={
                                           opts
                                         }
                                /> 
                                <FontAwesomeIcon className="icon-x" onClick={watchTrailer} icon={faCircleXmark} fade/>
                            </>
                            : <h1>{errorTrailer.message}</h1>             
                            
                        }            
                    </div>
                }  
    </div>
  )
}
