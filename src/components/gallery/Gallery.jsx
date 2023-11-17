/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import './gallery.css';
import { Modal } from '../modal/Modal';
const img = import.meta.env.VITE_IMAGES;

export const Gallery = ({ infoPeli }) => {
  console.log(infoPeli)
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [clickedImg, setClickedImg] = useState(null);

  useEffect(() => {
    const array = infoPeli?.images?.backdrops?.slice(0, 10) || [];
    setImages(array);
    console.log(array)
  }, [infoPeli]);

  const handleClick = (item, index) => {
    setCurrentIndex(index);
    setClickedImg(item.file_path);
  };

  const handelRotationRight = () => {
    const totalLength = images.length;
    let newIndex = currentIndex === null ? 0 : currentIndex + 1;

    if (newIndex >= totalLength) {
      newIndex = 0;
    }

    setClickedImg(images[newIndex]?.file_path);
    setCurrentIndex(newIndex);
  };

  const handelRotationLeft = () => {
    const totalLength = images.length;

    let newIndex = currentIndex === null ? totalLength - 1 : currentIndex - 1;

    if (newIndex < 0) {
      newIndex = totalLength - 1;
    }

    setClickedImg(images[newIndex]?.file_path);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <div className="gallery-container">
        {images.map((ele, index) => (
          <img
            key={index}
            src={`${img}/w500${ele.file_path}`}
            alt=""
            onClick={() => handleClick(ele, index)}
          />
        ))}
      </div>
      <div style={{ background: 'red' }}>
        {clickedImg && (
          <Modal
            clickedImg={clickedImg}
            setClickedImg={setClickedImg}
            handelRotationRight={handelRotationRight}
            handelRotationLeft={handelRotationLeft}
          />
        )}
      </div>
    </>
  );
};
