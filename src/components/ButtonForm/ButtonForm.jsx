import styles from "./ButtonForm.module.css";

const ButtonForm = ({ content, onClick, colorButton, type, disabled }) => {
    return (
        <button
            className={`${styles.buttonForm} ${
                colorButton === "green"
                    ? styles.buttonGreen
                    : styles.buttonPurple
            }`}
            onClick={onClick}
            type={type}
            disabled={disabled}
        >
            {content}
        </button>
    );
};

export default ButtonForm;
