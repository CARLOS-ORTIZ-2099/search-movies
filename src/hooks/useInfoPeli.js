/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const useInfoPeli = () => {

    console.log(useParams())

    const {nameid} = useParams()
    console.log(nameid)
    let espacios = nameid.lastIndexOf(' ')+1 
  
    let nombrePelicula = nameid.slice(0,espacios-1)
    console.log(nombrePelicula)
    
    let copyNamePeli = [...nameid]
    let id = copyNamePeli.slice(espacios,copyNamePeli.length).join('')
    console.log(id)

    const [infoPeli, setInfoPeli] = useState([])

    useEffect(() => {
        MovieSearch()
    }, [nameid])


    async function MovieSearch() {
            try{
                let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=5541f1152f0ba9f5a5301b30076f90b6&query=${nombrePelicula}`)
                console.log(response)
                let data = await response.json()
                console.log(data)
                let filtrado =data.results.filter(ele => ele.id == id)
                console.log(filtrado)
                if(filtrado.length < 1){
                    throw 'no hay data disponible'
                }
                setInfoPeli(...filtrado)
                console.log(infoPeli)
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
