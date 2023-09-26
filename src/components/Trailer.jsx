/* eslint-disable react/prop-types */
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCirclePlay, faCircleXmark} from '@fortawesome/free-solid-svg-icons'
import YouTube from 'react-youtube';



export const Trailer = ({TrailerState, linkTrailer, watchTrailer}) => {
  return (
    <div>

            { !TrailerState ? 
                     <FontAwesomeIcon className="icon-play" onClick={watchTrailer} icon={faCirclePlay} bounce values="ver"/>
                        : 
                            <div className="youtube-container">
                                {
                                    linkTrailer !== null? (
                                        <>
                                            <YouTube className="youtube"
                                                videoId={linkTrailer}
                                                opts={
                                                    {
                                                        playerVars:{autoplay:1,controls:1,cc_load_policy:0,fs:1,iv_load_policy:0,modestbranding:0,rel:0,showinfo:0}
                                                    }
                                                }
                                            /> 
                                            <FontAwesomeIcon className="icon-x" onClick={watchTrailer} icon={faCircleXmark} fade/>
                                        </>
                                        )
                                        :'no hay video disponible'
                                        }
                                        
                            </div>
                }  

    </div>
  )
}
