import React, { useEffect, useState } from "react";

const Context = React.createContext({});

const API_URL = 'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'

type Photos = {
  id: string,
  isFavorite: boolean,
  url: string
};

const ContextProvider = (props: any) => {
  const [photos, setPhotos] = useState<Photos[]>([])

  useEffect(() =>{
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setPhotos(data))
  },[])

  return (
    <Context.Provider value={{photos}} >
      {props.children}
    </Context.Provider>
  )
};

export { ContextProvider, Context };