/* eslint-disable react/prop-types */

import {useNavigate} from 'react-router-dom'

export const InfoPeliError = ({error}) => {
    const back = useNavigate()

    const backHome = () => {
        back(-1)
    }

  return (
    <div>
              <div className="info-peli">
                      <h1>{error}</h1>
                      <button onClick={backHome}>return Home</button>
              </div>
    </div>
  )
}
