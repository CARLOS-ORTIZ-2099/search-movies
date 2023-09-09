/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"


export const useTrailerPeli = () => {

    console.log(useParams())
    const {nameid} = useParams()
    let espacios = nameid.lastIndexOf(' ')+1 
  
    let idPelicula = nameid.slice(espacios)

    const [linkTrailer, setLinkTrailer] = useState('')

    useEffect(() => {
        videosTrailer()
    }, [])

    
    async function videosTrailer() {
        try {
          let response = await fetch(`https://api.themoviedb.org/3/movie/${idPelicula}/videos?api_key=5541f1152f0ba9f5a5301b30076f90b6`)
          console.log(response)
          const videos = await response.json()
          console.log(videos)
          if(videos.results.length < 1){
              throw 'no hay trailer'
          }
          let trailer = videos.results.find((e, ) => {
            return e.type == 'Trailer';  // retornaremos la primera coincidencia
          });
          let trailerVideo = trailer.key
         
          setLinkTrailer(trailerVideo)
        } 
        catch(error){
            console.error(error)
        }


      }
      

      return linkTrailer
      

}

export default useTrailerPeli
