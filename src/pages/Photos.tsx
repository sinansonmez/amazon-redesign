import React, { useContext } from "react";
import Image from "../components/Image";
import { Context } from "../Context";

const Photos = () => {
    const { photos, toggleFavorite } = useContext(Context)
    const photosElement = photos.map(photo => (
        <Image
            key={photo.id}
            img={photo}
            toggleFavorite={toggleFavorite}
        />))

    return (
        <main className="photos" >
            {photosElement}
        </main>
    )
}

export default Photos