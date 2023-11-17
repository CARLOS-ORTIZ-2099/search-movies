/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
const urlApi =  import.meta.env.VITE_API_URL
const key = import.meta.env.VITE_KEY


export const useGrillaPelis = (page) => {

    const [peliculas, setPeliculas] = useState([])
    const [error, setError] = useState(null)

    
    useEffect(()=> {
        petitionPeliculas(page) 
        console.log(page)
    },[page])

    async function petitionPeliculas(page) {
        try{
            let response = await fetch(`${urlApi}/movie/popular?api_key=${key}&page=${page}`)
                                        
            if(response.ok !== true){
                let responseError = new Error('error con la peticion')
                responseError.status = response.status || '000'
                responseError.statusText = response.statusText || 'error al cargar los datos'
                throw responseError
            }

            let data = await response.json()
            setPeliculas(data.results)
            setError(null)
            console.log(peliculas)
        }
        catch(error){
           // console.log(error)
            setError(error)
        }   
    }

    return {peliculas, error}

}
