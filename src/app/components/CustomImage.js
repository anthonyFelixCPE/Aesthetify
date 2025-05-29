"use client";
import Image from "next/image";
import styles from "../styles/CustomImage.module.css";

function CustomImage({ src, alt, className = "" }) {
    return (
        <div className={styles.imageContainer}>
            <Image src={src} alt={alt} fill />
        </div>
    );
}

export default CustomImage;
