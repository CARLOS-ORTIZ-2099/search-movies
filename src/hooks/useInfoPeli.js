/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

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
                let response = await fetch(`https://api.themoviedb.org/3/movie/${idPeli}?api_key=5541f1152f0ba9f5a5301b30076f90b6&append_to_response=videos,images`)
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

export default useInfoPeli
