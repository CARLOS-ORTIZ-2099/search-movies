/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
const urlApi = import.meta.env.VITE_API_URL
const key = import.meta.env.VITE_KEY

export const useInfoPeli = () => {

    console.log(useParams())

    const {idPeli} = useParams()
    console.log(idPeli)


    const [infoPeli, setInfoPeli] = useState([])

    useEffect(() => {
        MovieSearch()
    }, [idPeli])


    async function MovieSearch() {
            try{
                let response = await fetch(`${urlApi}/movie/${idPeli}?api_key=${key}&append_to_response=videos,images`)
                console.log(response)
                if(response.ok!== true){
                    throw 'No Hay Data'
                }
                let data = await response.json()
                console.log(data)
                
                setInfoPeli(data)
            }
            catch(error){
                console.error(error)
                setInfoPeli({error:error})       
            }


    }
    console.log(infoPeli)
  return  infoPeli
}
/* al finalizar el estado infopeli puede devolver un objeto de error o un objeto con los datos de la peli */
export default useInfoPeli
