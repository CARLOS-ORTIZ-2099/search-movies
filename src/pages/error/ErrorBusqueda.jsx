/* eslint-disable react/prop-types */

import imageError from '../../assets/movie-svgrepo-com.svg'
import './error-busqueda.css'

export const ErrorBusqueda = ({peliculasBusqueda}) => {


  return (
    <div className='error-busqueda-container'>
         
                <h1>{peliculasBusqueda.error}</h1>
                <img src={imageError} alt=""/>
               
                
           
    </div>
  )
}
