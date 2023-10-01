/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './modal.css'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
const images = import.meta.env.VITE_IMAGES

/* recibimos como prop clickedImg que es la ruta de la imegen que se halla clickeado esto con el fin de interpolar ese valor y hacer la peticion a la BD, asi*/
export const Modal = ({clickedImg, setClickedImg, handelRotationRight, handelRotationLeft}) => {

    const handleClick = (e) => {
      /* cuando se presione en cualquier elemento con la clase dismmis pues es que el estado se volvera null y no se mostrara el componente modal */
        if (e.target.classList.contains("dismiss")) {
          setClickedImg(null);
        }
  
    };

  return (
        <div className='overlay dismiss' onClick={handleClick}>
            <img src={`${images}/original${clickedImg}`} alt="bigger pic" />
            <span className="dismiss" onClick={handleClick}>
              X
            </span>
            {/* ejecutamos las funciones de mover hacia la izquierad y hacia la derecha, que se definio en el componente Gallery */}
                <button id='previus' className='overlay-arrows_left' onClick={handelRotationLeft}>{<FontAwesomeIcon  icon={faArrowLeft} />}</button>
        
                <button id='next' onClick={handelRotationRight} className='overlay-arrows_right'>{<FontAwesomeIcon  icon={faArrowRight} />}</button>
        </div>
  )


}
