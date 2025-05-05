import styles from "./styles/page.module.css";
import DarkBGButton from "./components/DarkBGButton";

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
            </div>
        </div>
    );
}
