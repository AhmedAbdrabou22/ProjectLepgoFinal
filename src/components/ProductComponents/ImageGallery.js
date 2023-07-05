import React from 'react'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import bmw from "../../images/range-rover-1806931.png"
import cash from "../../images/Group 598@2x.png"
import villa from "../../images/Rectangle 871.png"
const IMageDisplay = () => {
    const images = [
        {
            original: `${bmw}`,
            thumbnail: `${bmw}`,
        },
        {
            original: `${cash}`,
            thumbnail: `${cash}`,
        },
        {
            original: `${bmw}`,
            thumbnail: `${bmw}`,
        },
        {
            original: `${villa}`,
            thumbnail: `${villa}`,
        },
    ];
    return (
        <div style={{ minHeight: "780px" }}>
            <div  className="product-gallary-card">
                <ImageGallery items={images} />
            </div>
        </div>
    )
}

export default IMageDisplay
