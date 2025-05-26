"use client";

import styles from "../styles/Navbar.module.css";
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoMenu } from "react-icons/io5";
import { useState, useRef } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [isClosing, setIsClosing] = useState(false);
    const closeTimeoutRef = useRef(null);

    const handleMenuToggle = () => {
        if (menuOpen && !isClosing) {
            // Start closing animation
            setIsClosing(true);
            closeTimeoutRef.current = setTimeout(() => {
                setMenuOpen(false);
                setIsClosing(false);
            }, 500); // Match animation duration
        } else if (!menuOpen && !isClosing) {
            // Open menu
            setMenuOpen(true);
        } else if (isClosing) {
            // Interrupt closing animation and reopen
            clearTimeout(closeTimeoutRef.current);
            setIsClosing(false);
            setMenuOpen(true);
        }
    };

    return (
        <div className={styles.navbar}>
            <div className={styles.menuLogo}>
                <IoMenu
                    className={styles.menuIcon}
                    onClick={handleMenuToggle}
                />
                <h1 className={styles.logo}>Aesthetify.</h1>
            </div>

            <ul className={styles.items}>
                <li>All Products</li>
                <li>Living Room</li>
                <li>Bed Room</li>
                <li>Dining</li>
            </ul>

            {(menuOpen || isClosing) && (
                <ul
                    className={`${styles.mobileMenu} ${
                        isClosing ? styles.closeAnimation : ""
                    }`}
                >
                    <li>All Products</li>
                    <li>Living Room</li>
                    <li>Bed Room</li>
                    <li>Dining</li>
                </ul>
            )}

            <div className={styles.navIcons}>
                <IoSearchOutline className={styles.icon} />
                <CiShoppingCart className={styles.icon} />
                <GoPerson className={styles.icon} />
            </div>
        </div>
    );
}

export default Navbar;
