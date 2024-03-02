/* eslint-disable react/prop-types */

import movieNotFound from '../../assets/movie-not-found.svg'
import './error-busqueda.css'

export const ErrorBusqueda = ({error}) => {

  return (
    <div className='error-busqueda-container'>
            <h1>{error.message}</h1>
            <img src={movieNotFound} alt=""/>      
    </div>
  )
}
