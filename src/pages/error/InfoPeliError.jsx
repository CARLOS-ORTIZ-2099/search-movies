/* eslint-disable react/prop-types */
import {useNavigate} from 'react-router-dom'
import errorRed from '../../assets/error-red.svg'
import './info-peli-error.css'

export const InfoPeliError = ({error}) => {
    const back = useNavigate()

    const backHome = () => {
        back(-1)
    }

  return (

              <div className="error-busqueda-container">
                      <h1>{error.status}</h1>
                      <h1>{error.message}</h1>
                      <h1>{error.statusText}</h1>
                      <img src={errorRed} alt="" />
                      <div className='button-container'>
                        <button  onClick={backHome}>Return Home</button>
                    </div>
              </div>
  )
}
