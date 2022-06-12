import React from "react";
import { FaHeart, FaPlus } from "react-icons/fa";
import { PhotosType } from "../Context";
import useHover from "../hooks/useHover";

type ImageType = {
  img: PhotosType,
  toggleFavorite: (id: string) => void,
  inCart: boolean
  updateCart: (image: PhotosType) => void
}

const Image = ({ img, toggleFavorite, inCart, updateCart }: ImageType) => {
  const [hovered, ref] = useHover()
  const heartIcon = (hovered || img.isFavorite) && <FaHeart
    className="favorite"
    onClick={() => toggleFavorite(img.id)}
  />
  const plusIcon = (hovered || inCart) && <FaPlus className="cart" onClick={() => updateCart(img)} />

  return (
    <div
      className={`wide image-container`}
      ref={ref}
    >
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