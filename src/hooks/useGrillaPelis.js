/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

export const useGrillaPelis = (valueDinamic, url) => {
    console.log(valueDinamic);
    console.log(url);
    const [peliculas, setPeliculas] = useState([])
    const [error, setError] = useState(null)

    useEffect(()=> {
        petitionPeliculas() 
    },[valueDinamic])

    async function petitionPeliculas() {
        try{
            let response = await fetch(url)
                                        
            if(response.ok !== true){
                let responseError = new Error('error con la peticion')
                responseError.status = response.status || '000'
                responseError.statusText = response.statusText || 'error al cargar los datos'
                throw responseError
            }
           
            let data = await response.json()
          //  console.log(data);
            if(data.results.length < 1){
                throw  new Error('upss parece que la pelicula que buscas no existe')
            }
            setPeliculas(data.results)
            setError(null)
           // console.log(peliculas)
        }
        catch(error){
           // console.log(error)
            setError(error)
        }   
    }

    return {peliculas, error}

}
