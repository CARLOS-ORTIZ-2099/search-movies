/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import  './gallery.css'
import { Modal } from '../modal/Modal';
const img = import.meta.env.VITE_IMAGES

/* recibimos como prop el valor que retorne el hook useTrailerPeli, que hasta este punto se espera que sea un objeto con datos de la peli, entre ellos las imagenes de la peli */
export const Gallery = ({infoPeli}) => {
console.log(infoPeli)
 
  const [images, setImages] = useState([])  
  const [clickedImg, setClickedImg] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  useEffect(() => {
    let array = infoPeli?.images?.backdrops?.filter((imagen, index) => index < 10 )
    setImages(array)
    console.log(array)
  }, [infoPeli])

  const handleClick = (item, index) => {
    /* la primera funcion seteara el estado currentIndex con el indice que se le pase a la funcion, este sera el inidce de la imagen que se clickee, la segunda funcion seteara el estado clickedImg con la ruta de la imagen que se clickee  */
    setCurrentIndex(index);
    setClickedImg(item.file_path);

  };


  const handelRotationRight = () => {
    const totalLength = images.length;
    /* evaluamos si el estado currentIndex es mayor que la longitud del array de imagenes, quiere decir que no hay mas imagenes por mostrar por ende lo setearemos con la imagen del inicio */
    if (currentIndex+1  >= totalLength) {

        setCurrentIndex(0);
        const newUrl =  images[0].file_path;
        setClickedImg(newUrl);
        return;
    }
    /* de no entrar en la condicion seguirimos recorriendo imagen por imagen */
    const newIndex = currentIndex + 1;

    const newUrl = images.filter((item) => images.indexOf(item) === newIndex);

    const newItem = newUrl[0].file_path;
    /* setaremos los estados los estado de las imagenes y de los indices */
    setClickedImg(newItem);
    setCurrentIndex(newIndex);


  };

 const handelRotationLeft = () => {
    const totalLength = images.length

    if(currentIndex ===  0){
        setCurrentIndex(totalLength-1)
        const newUrl = images[totalLength-1].file_path
        setClickedImg(newUrl)
        return
    }

    const newIndex = currentIndex - 1

    const newUrl = images.filter((element) => images.indexOf(element) == newIndex)

    const newItem = newUrl[0].file_path

    setClickedImg(newItem)
    setCurrentIndex(newIndex)
 }

  return (
        <>
            <div className='gallery-container'>
                {
                    infoPeli?.images?.backdrops?.map((ele, index) => (index < 10 ? 
                                            <img key={index} 
                                            src={`${img}/w500${ele.file_path}`}
                                            alt=""
                                            onClick={() => handleClick(ele, index)} 
                                            />
                                            : ''
                    ))
                }
            </div>
            <div style={{background:'red'}}>
                        {
                          /* el estado  clickedImg inicializa en null por ende no se mostrara el componente modal, dejara de ser null cuando se clickee en cualquier imagen*/
                            clickedImg && (
                                <Modal
                                clickedImg={clickedImg}
                                setClickedImg={setClickedImg} 
                                handelRotationRight={handelRotationRight}
                                handelRotationLeft={handelRotationLeft}                          
                                />
                            )
                        }
            </div>
            
        </>
  )

}
