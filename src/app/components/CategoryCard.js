"use client";

import styles from "../styles/CategoryCard.module.css";
import CustomImage from "./CustomImage";
import { FaArrowRight } from "react-icons/fa6";

function CategoryCard({ src, alt, title }) {
    return (
        <div className={styles.categoryCard}>
            <CustomImage src={src} alt={alt} />
            <div className={styles.cardText}>
                <h2>{title}</h2>
                <p>
                    Shop Now <FaArrowRight />
                </p>
            </div>
        </div>
    );
}

export default CategoryCard;
