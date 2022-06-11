import React from "react";
import { useState } from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import { PhotosType } from "../Context";

type ImageType = {
  img: PhotosType
}

const Image = ({ img }: ImageType) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`wide image-container`}>
      <img
        src={img.url}
        alt={img.id}
        className={'image-grid'} />
      {hovered && (
        <>
          <FaHeart className="favorite" />
          <FaPlus className="cart" />
        </>
      )}
    </div>
  )
}

export default Image