import React, { useEffect, useState } from "react";

const Context = React.createContext<ContextType>({ photos: [], toggleFavorite: () => { } });

const API_URL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

type ContextType = {
  photos: PhotosType[]
  toggleFavorite: (id: string) => void
}

export type PhotosType = {
  id: string,
  isFavorite: boolean,
  url: string
};

const ContextProvider = (props: any) => {
  const [photos, setPhotos] = useState<PhotosType[]>([])

  const toggleFavorite = (id: string) => {
    const updatedPhotos = photos.map(photo => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite }
      }
      return photo
    })
    setPhotos(updatedPhotos)
  }

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setPhotos(data))
  }, [])

  return (
    <Context.Provider value={{ photos, toggleFavorite }} >
      {props.children}
    </Context.Provider>
  )
};

export { ContextProvider, Context };