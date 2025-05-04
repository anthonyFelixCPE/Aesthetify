"use client"

import styles from "../styles/Navbar.module.css";
import { IoSearchOutline } from "react-icons/io5";
import { CiShoppingCart } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className={styles.navbar}>
            <div className={styles.menuLogo}>
                <IoMenu
                    className={styles.menuIcon}
                    onClick={() => setMenuOpen(!menuOpen)}
                />
                <h1 className={styles.logo}>Aesthetify.</h1>
            </div>
            <ul className={styles.items}>
                <li>All Products</li>
                <li>Living Room</li>
                <li>Bed Room</li>
                <li>Dining</li>
            </ul>

            {menuOpen && (
                <ul className={styles.mobileMenu}>
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
