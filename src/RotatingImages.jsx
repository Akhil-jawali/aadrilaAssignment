import { useEffect, useState } from "react";
import heroImg from './assets/heroImg.png'
import license from './assets/license.png'
import Doc from './assets/Doc.png'

const images = [
    heroImg,
    Doc,
    license,
];

export default function RotatingImages() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const getPosition = (index) => {
        const diff = (index - activeIndex + images.length) % images.length;

        if (diff === 0) return "center";
        if (diff === 1) return "right";
        return "left";
    };

    return (
        <div className="carousel">
            {images.map((img, index) => (
                <img
                    key={index}
                    src={img}
                    className={`carousel-img ${getPosition(index)}`}
                    alt=""
                />
            ))}
        </div>
    );
}
