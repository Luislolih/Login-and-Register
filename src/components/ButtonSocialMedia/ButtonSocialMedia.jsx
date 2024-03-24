import styles from "./ButtonSocialMedia.module.css";

import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";

const ButtonSocialMedia = ({ content, onClick, type, src }) => {
    let logoSrc;
    if (src === "facebook") {
        logoSrc = <FaFacebook />;
    } else if (src === "google") {
        logoSrc = <FaGoogle />;
    } else if (src === "apple") {
        logoSrc = <FaApple />;
    }
    return (
        <button className={styles.buttonForm} onClick={onClick} type={type}>
            {logoSrc && (
                <div className="">
                    <div className="text-lg">{logoSrc}</div>
                </div>
            )}
            <p>{content}</p>
        </button>
    );
};

export default ButtonSocialMedia;
