import React, { useEffect, useState } from "react";

const Context = React.createContext<ContextType>({ 
    photos: [], 
    toggleFavorite: () => { }, 
    cartItems: [],
    updateCart: () => { } });

const API_URL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

type ContextType = {
  photos: PhotosType[],
  toggleFavorite: (id: string) => void,
  cartItems: PhotosType[],
  updateCart: (image: PhotosType) => void
}

export type PhotosType = {
  id: string,
  isFavorite: boolean,
  url: string
};

const ContextProvider = (props: any) => {
  const [photos, setPhotos] = useState<PhotosType[]>([])
  const [cartItems, setCartItems] = useState<PhotosType[]>([])

  const toggleFavorite = (id: string) => {
    const updatedPhotos = photos.map(photo => {
      if (photo.id === id) {
        return { ...photo, isFavorite: !photo.isFavorite }
      }
      return photo
    })
    setPhotos(updatedPhotos)
  }

  const updateCart = (image: PhotosType) => {
    const foundItem = cartItems.find(item => item.id === image.id)
    if (!foundItem) {
      setCartItems([...cartItems, image])
    } else {
      setCartItems(prevItems => prevItems.filter(item => item.id !== image.id))
    }
  }

  console.log('updated cart', cartItems)

  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setPhotos(data))
  }, [])

  return (
    <Context.Provider value={{ photos, toggleFavorite, cartItems, updateCart }} >
      {props.children}
    </Context.Provider>
  )
};

export { ContextProvider, Context };