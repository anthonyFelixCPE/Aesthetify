"use client";

import styles from "../styles/Footer.module.css";
import { FiFacebook } from "react-icons/fi";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXFill } from "react-icons/ri";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.groupBox}>
                    <h3 className={styles.footerLogo}>Aesthetify</h3>
                    <p className={styles.footerTag}>
                        Redefining interiors with furniture that speaks to
                        simplicity, elegance, and purpose.
                    </p>
                    <ul className={styles.logos}>
                        <li>
                            <FiFacebook />
                        </li>
                        <li>
                            <IoLogoInstagram />
                        </li>
                        <li>
                            <RiTwitterXFill />
                        </li>
                    </ul>
                </div>
                <div className={styles.groupBox}>
                    <h4 className={styles.groupHeader}>Shop</h4>
                    <ul className={styles.items}>
                        <li>All Products</li>
                        <li>Living Room</li>
                        <li>Bedroom</li>
                        <li>Dining</li>
                        <li>Office</li>
                    </ul>
                </div>
                <div className={styles.groupBox}>
                    <h4 className={styles.groupHeader}>Company</h4>
                    <ul className={styles.items}>
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Careers</li>
                        <li>Blog</li>
                    </ul>
                </div>
                <div className={styles.groupBox}>
                    <h4 className={styles.groupHeader}>Customer Service</h4>
                    <ul className={styles.items}>
                        <li>FAQs</li>
                        <li>Shipping & Returns</li>
                        <li>Warranty</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
            </div>
            <div className="divider"></div>
            <div className={styles.copyright}>
                <p>
                    &copy; {new Date().getFullYear()} Aesthetify. All rights
                    reserved
                </p>
            </div>
        </div>
    );
}

export default Footer;
