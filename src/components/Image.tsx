import React from "react";
import { useState } from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import { PhotosType } from "../Context";

type ImageType = {
  img: PhotosType,
  toggleFavorite: (id: string) => void,
  inCart: boolean
  updateCart: (image: PhotosType) => void
}

const Image = ({ img, toggleFavorite, inCart, updateCart }: ImageType) => {
  const [hovered, setHovered] = useState(false);
  const heartIcon = (hovered || img.isFavorite) && <FaHeart
    className="favorite"
    onClick={() => toggleFavorite(img.id)}
  />
  const plusIcon = (hovered || inCart) && <FaPlus className="cart" onClick={() => updateCart(img) }  />

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`wide image-container`}>
      <img
        src={img.url}
        alt={img.id}
        className={'image-grid'} />
      {heartIcon}
      {plusIcon}
    </div>
  )
}

export default Image