/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import  './gallery.css'
import { Modal } from './Modal';


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
    setCurrentIndex(index);
    setClickedImg(item.file_path);

  };


  const handelRotationRight = () => {
    const totalLength = images.length;

    if (currentIndex+1  >= totalLength) {

        setCurrentIndex(0);
        const newUrl =  images[0].file_path;
        setClickedImg(newUrl);
        return;
    }
    const newIndex = currentIndex + 1;

    const newUrl = images.filter((item) => images.indexOf(item) === newIndex);

    const newItem = newUrl[0].file_path;

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
                                            src={`https://image.tmdb.org/t/p/original${ele.file_path}`}
                                            alt=""
                                            onClick={() => handleClick(ele, index)} 
                                            />
                                            : ''
                    ))
                }
            </div>
            <div style={{background:'red'}}>
                        {
                            clickedImg && (
                                <Modal
                                clickedImg={clickedImg}
                                handelRotationRight={handelRotationRight}
                                setClickedImg={setClickedImg}
                                handelRotationLeft={handelRotationLeft}
                                />
                            )
                        }
            </div>
            
        </>
  )

}
