/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const urlApi = import.meta.env.VITE_API_URL
const key = import.meta.env.VITE_KEY

export const useTrailerPeli = () => {

   // console.log(useParams())
    const {idPeli} = useParams()
   // console.log(idPeli)
    /* se crea un estado para guardar la data que se retornara */
    const [linkTrailer, setLinkTrailer] = useState()
    const [errorTrailer, setErrorTrailer] = useState(null)
   
    useEffect(() => {
        videosTrailer()
    }, [idPeli])

    
    async function videosTrailer() {
        try {
            let response = await fetch(`${urlApi}/movie/${idPeli}/videos?api_key=${key}`)
                                        
            //console.log(response)
            const videos = await response.json()
            //console.log(videos)
            if(videos.results.length < 1){
               
                throw new Error('No hay trailer disponible 😥')
            }
            let trailer = videos.results.find((e, ) => {
              return e.type == 'Trailer';  // retornaremos la primera coincidencia
            });

            if(trailer == undefined){
               
               let auxiliarTrailer = videos.results[0].key
               setLinkTrailer(auxiliarTrailer)
            }
            else{
                let trailerVideo = trailer.key
                //console.log(trailerVideo)
                setLinkTrailer(trailerVideo)
            }

        } 
        catch(error){
            console.error(error)
            setErrorTrailer(error)
            console.log(linkTrailer)
        }
      }
      
/* link trailer retornara un objeto con un error generado por la excepcion, si no encuentra ni un tipo de video o devolvera un trailer si encuentra alguno de ese tipo,
   pero si devuelve un array de videos que no son necesariamente del tipo trailer pues devolvera el primer valor, sin importar el tipo de video que sea */
      return {linkTrailer, errorTrailer}
      
}

export default useTrailerPeli
