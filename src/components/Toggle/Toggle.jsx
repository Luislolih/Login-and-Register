import { useState } from "react";
import styles from "./Toggle.module.css";
const Toggle = () => {
    const [isToggled, setIsToggled] = useState(true);

    const handleToggle = () => {
        setIsToggled((prevState) => !prevState);
    };

    return (
        <div
            className={`${styles.toggle} ${isToggled ? styles.active : ""}`}
            onClick={handleToggle}
        >
            <div className={styles.track}>
                <div className={styles.thumb} />
            </div>
        </div>
    );
};

export default Toggle;
