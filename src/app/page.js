import styles from "./styles/page.module.css";
import DarkBGButton from "./components/DarkBGButton";
import HeroImage from "../images/hero-image.jpg";
import CustomImage from "./components/CustomImage";
import LivingIMG from "../images/category-living room.jpg";
import BedIMG from "../images/category-bed room.jpg";
import DiningIMG from "../images/category-dining room.jpg";
import CategoryCard from "./components/CategoryCard";

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
        </div>
    );
}
