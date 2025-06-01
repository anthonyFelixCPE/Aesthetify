"use client";

import styles from "../styles/ProductCard.module.css";
import CustomImage from "./CustomImage";

function ProductCard({ productImg, productName, productPrice }) {
    return (
        <div
            className={styles.productCard}
        >
            <div className={styles.imgContainer}>
                <CustomImage src={productImg} alt={productName} />
            </div>
            <div className={styles.details}>
                <h3>{productName}</h3>
                <p>
                    ₱
                    {productPrice.toLocaleString(undefined, {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}
                </p>
            </div>
        </div>
    );
}

export default ProductCard;
