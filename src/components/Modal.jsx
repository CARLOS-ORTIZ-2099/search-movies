/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './modal.css'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';

export const Modal = ({clickedImg, setClickedImg, handelRotationRight, handelRotationLeft}) => {


  
    const handleClick = (e) => {

        if (e.target.classList.contains("dismiss")) {
          setClickedImg(null);
        }
  
    };


  return (
        <div className='overlay dismiss' onClick={handleClick}>
            <img src={`https://image.tmdb.org/t/p/original${clickedImg}`} alt="bigger pic" />
            <span className="dismiss" onClick={handleClick}>
              X
            </span>

  
                <button id='previus' className='overlay-arrows_left' onClick={handelRotationLeft}>{<FontAwesomeIcon  icon={faArrowLeft} />}</button>
        

                <button id='next' onClick={handelRotationRight} className='overlay-arrows_right'>{<FontAwesomeIcon  icon={faArrowRight} />}</button>
 
            

        </div>
  )


}
