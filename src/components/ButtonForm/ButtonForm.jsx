import styles from "./ButtonForm.module.css";

const ButtonForm = ({ content, onClick, colorButton }) => {
    return (
        <button
            className={`${styles.buttonForm} ${
                colorButton === "green"
                    ? styles.buttonGreen
                    : styles.buttonPurple
            }`}
            onClick={onClick}
        >
            {content}
        </button>
    );
};

export default ButtonForm;
