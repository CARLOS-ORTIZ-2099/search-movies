/* eslint-disable react/prop-types */

import imageError from '../../assets/movie-svgrepo-com.svg'
import './error-busqueda.css'

export const ErrorBusqueda = ({error}) => {


  return (
    <div className='error-busqueda-container'>
            <h1>{error.message}</h1>
            <img src={imageError} alt=""/>      
    </div>
  )
}
