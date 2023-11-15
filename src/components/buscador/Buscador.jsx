/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import './buscador.css'

export const Buscador = () => {

const [namePeli, setNamePeli] = useState('')
const navigate = useNavigate()

    const submit = (e) => {
        e.preventDefault()
        if(namePeli.length <1 ){
            return
        }
        console.log(namePeli)
        navigate(`/${namePeli}`)
        
    }
  return (
    <div className="buscador-container">
        <form className="form-conatiner" onSubmit={submit} action="">
            <input className="input" type="text"
                name="peliculas"
                placeholder="escribe aqui"
                onChange={(e) => setNamePeli(e.target.value)}
            />
            <input className="button" type="submit" value='search'/>
        </form>
    </div>
  )
}
