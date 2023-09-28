/* eslint-disable react/prop-types */
import './modal.css'

export const Modal = ({clickedImg, setClickedImg, handelRotationRight, handelRotationLeft}) => {


  
    const handleClick = (e) => {

        if (e.target.classList.contains("dismiss")) {
          setClickedImg(null);
        }
  
    };


  return (
        <div onClick={handleClick}>
            <img src={`https://image.tmdb.org/t/p/original${clickedImg}`} alt="" />
            <span className="dismiss" onClick={handleClick}>
              X
            </span>

            <button onClick={handelRotationLeft}>izquierda</button>
            <button onClick={handelRotationRight}>derecha</button>

        </div>
  )


}
