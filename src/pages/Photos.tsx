import React, { useContext } from "react";
import Image from "../components/Image";
import { Context } from "../Context";

const Photos = () => {
    const { photos } = useContext(Context)
    const photosElement = photos.map((photo, index) => (<Image key={photo.id} img={photo} />))
    return (
        <main className="photos" >
            {photosElement}
        </main>
    )
}

export default Photos