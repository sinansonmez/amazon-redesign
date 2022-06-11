import React from "react";
import { PhotosType } from "../Context";

type ImageType = {
  className: string,
  img: PhotosType
}

const Image = ({ className, img }: ImageType) => {
  return (
    <div className={`${className} image-container`}>
      <img src={img.url} className={'image-grid'} />
    </div>
  )
}

export default Image