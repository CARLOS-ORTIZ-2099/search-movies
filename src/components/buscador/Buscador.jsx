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
        console.log(namePeli)
        /*   si el usuario no escribe nada en el input, pero aun asi intenta darle en buscar, como no hay ningun valor esto me llevara a la pagina de inicio,
            ya que el estado namePeli es vacio, y con useNavigate le decimos llevame a "/" y esto indica que debera llevarme al home
        */
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
