"use client";
import Image from "next/image";

function CustomImage({ src, alt, className = "" }) {
    return (
        <div>
            <Image src={src} alt={alt} fill style={{ objectFit: "cover" }} />
        </div>
    );
}

export default CustomImage;
