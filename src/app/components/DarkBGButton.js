"use client";

import styles from "../styles/DarkBGButton.module.css";

function DarkBGButton({ children, onClick, type = "button", className = "" }) {
    return (
        <div
            type={type}
            className={`${styles.darkButton} ${className}`}
            onClick={onClick}
        >
            {children}
        </div>
    );
}

export default DarkBGButton;
