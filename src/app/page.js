"use client";

import styles from "./styles/page.module.css";
import DarkBGButton from "./components/DarkBGButton";
import HeroImage from "../images/hero-image.jpg";
import CustomImage from "./components/CustomImage";
import LivingIMG from "../images/category-living room.jpg";
import BedIMG from "../images/category-bed room.jpg";
import DiningIMG from "../images/category-dining room.jpg";
import CategoryCard from "./components/CategoryCard";
import ProductCard from "./components/ProductCard";
import Product1Img from "../images/Product Images/product-1.jpg";
import Product2Img from "../images/Product Images/product-2.jpg";
import Product3Img from "../images/Product Images/product-3.jpg";
import { HiOutlineEnvelope } from "react-icons/hi2";
import { useState } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Footer from "./components/Footer";

export default function Home() {
    const [isFocused, setIsFocused] = useState(false);
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [submittedEmail, setSubmittedEmail] = useState("");

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubscribe = () => {
        setSuccess(false);

        if (validateEmail(email)) {
            setLoading(true);
            setSubmittedEmail(email);
            setTimeout(() => {
                setLoading(false);
                setSuccess(true);
                setEmail("");
            }, 3000);
        } else {
            alert("Please enter a valid email address.");
        }
    };

    return (
        <div className={styles.page}>
            <div className={styles.hero}>
                <div className={styles.textButton}>
                    <h1>Designed for Comfort, Crafted for Style.</h1>
                    <p>
                        Find the perfect blend of luxury, comfort, and timeless
                        design for every space
                    </p>
                    <DarkBGButton>Shop Now</DarkBGButton>
                </div>
                <div className={styles.imageContainer}>
                    <CustomImage
                        src={HeroImage}
                        alt="Hero Image"
                        className={styles.heroImage}
                    />
                </div>
            </div>
            <div className={styles.category}>
                <div className={styles.header}>
                    <h1>Shop by Category</h1>
                    <p>Explore styles made for every space.</p>
                </div>
                <div className={styles.cardContainer}>
                    <CategoryCard
                        src={LivingIMG}
                        alt="Living Room Image"
                        title="Living Room"
                    />
                    <CategoryCard
                        src={BedIMG}
                        alt="Dining Room Image"
                        title="Bed Room"
                    />
                    <CategoryCard
                        src={DiningIMG}
                        alt="Dining Room Image"
                        title="Dining"
                    />
                </div>
            </div>
            <div className={styles.featuredProducts}>
                <div className={styles.header}>
                    <h1>Customer Favorites</h1>
                    <p>
                        Thoughtfully selected pieces to complement your
                        lifestyle.
                    </p>
                </div>
                <div className={styles.productsContainer}>
                    <ProductCard
                        productImg={Product1Img}
                        productName="Light Finish Wooden Table Set"
                        productPrice={2568.6}
                    />
                    <ProductCard
                        productImg={Product2Img}
                        productName="Wooden Center Table"
                        productPrice={1700}
                    />
                    <ProductCard
                        productImg={Product3Img}
                        productName="Large 3 Seat Sofa"
                        productPrice={3400}
                    />
                </div>
                <DarkBGButton>Browse All Products</DarkBGButton>
            </div>
            <div className={styles.newsletter}>
                <div className={styles.headerText}>
                    <h2>Stay Updated</h2>
                    <h3>
                        Stay connected with Aesthetify. From fresh design ideas
                        to special deals, let inspiration find its way to you.
                    </h3>
                </div>
                <div className={styles.inputForm}>
                    <div className={styles.formControls}>
                        <div
                            className={`${styles.inputContainer} ${
                                isFocused ? styles.inputContainerFocused : ""
                            }`}
                        >
                            <HiOutlineEnvelope className={styles.emailIcon} />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className={styles.emailInput}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <DarkBGButton
                            className={styles.subscribe}
                            onClick={handleSubscribe}
                        >
                            {loading && <div className={styles.loader}></div>}
                            Subscribe
                        </DarkBGButton>
                    </div>
                    {success && (
                        <div className={styles.successMsg}>
                            <div className={styles.iconText}>
                                <IoMdCheckmarkCircleOutline
                                    className={styles.checkIcon}
                                />
                                <h2>Successfully Subscribed!</h2>
                            </div>
                            <p>
                                Thank you! We've successfully subscribed{" "}
                                {submittedEmail} to our newsletter.
                            </p>
                        </div>
                    )}
                    <ul className={styles.consentNotice}>
                        <li>
                            • Get notified about new arrivals and exclusive
                            offers
                        </li>
                        <li>• Unsubscribe anytime with one click</li>
                        <li>
                            • We respect your privacy and never share your email
                        </li>
                    </ul>
                </div>
            </div>
            <Footer/>
        </div>
    );
}
