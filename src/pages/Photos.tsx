import React, { useContext } from "react";
import Image from "../components/Image";
import { Context } from "../Context";

const Photos = () => {
    const { photos, toggleFavorite, updateCart, cartItems } = useContext(Context)
    const photosElement = photos.map(photo => {
        const inCart = cartItems.find(item => item.id === photo.id)
        return (
        <Image
            key={photo.id}
            img={photo}
            inCart={inCart ? true : false}
            toggleFavorite={toggleFavorite}
            updateCart={updateCart}
        />)})

    return (
        <main className="photos" >
            {photosElement}
        </main>
    )
}

export default Photos