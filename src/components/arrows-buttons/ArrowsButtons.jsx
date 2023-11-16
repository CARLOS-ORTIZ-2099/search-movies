/* eslint-disable react/prop-types */

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft, faArrowRight} from '@fortawesome/free-solid-svg-icons'

export const ArrowsButtons = ({next, back}) => {
  return (
    <>
        <button onClick={back}  className="button-back">
            {<FontAwesomeIcon  icon={faArrowLeft}fade />}
        </button>

        <button onClick={next} className="button-next">
            {<FontAwesomeIcon icon={faArrowRight} fade/>}
        </button>

    </>
  )
}
