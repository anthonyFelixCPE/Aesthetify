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
                    /><ProductCard
                        productImg={Product2Img}
                        productName="Wooden Center Table"
                        productPrice={1700}
                    /><ProductCard
                        productImg={Product3Img}
                        productName="Large 3 Seat Sofa"
                        productPrice={3400}
                    />
                </div>
            </div>
        </div>
    );
}
