import styles from "./styles/page.module.css";
import DarkBGButton from "./components/DarkBGButton";
import HeroImage from "../images/hero-image.jpg";
import CustomImage from "./components/CustomImage";
import LivingIMG from "../images/category-living room.jpg";
import BedIMG from "../images/category-bed room.jpg";
import DiningIMG from "../images/category-dining room.jpg";
import { FaArrowRight } from "react-icons/fa6";

export default function Home() {
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
                    <div className={styles.card}>
                        <CustomImage
                            src={LivingIMG}
                            alt="Living Room Image"
                            className={styles.livingRoom}
                        />
                        <div className={styles.cardText}>
                            <h2>Living Room</h2>
                            <p>
                                Shop Now <FaArrowRight />
                            </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <CustomImage
                            src={BedIMG}
                            alt="Living Room Image"
                            className={styles.livingRoom}
                        />
                        <div className={styles.cardText}>
                            <h2>Bed Room</h2>
                            <p>
                                Shop Now <FaArrowRight />
                            </p>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <CustomImage
                            src={DiningIMG}
                            alt="Living Room Image"
                            className={styles.livingRoom}
                        />
                        <div className={styles.cardText}>
                            <h2>Dining Room</h2>
                            <p>
                                Shop Now <FaArrowRight />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
