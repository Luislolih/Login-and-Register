import { useState, useEffect } from "react";
import styles from "./InputForm.module.css";
import { IoAlertCircle } from "react-icons/io5";
const InputForm = ({ placeholder, type, value, onChange, error, isValid }) => {
    const [prevValue, setPrevValue] = useState("");

    useEffect(() => {
        if (value !== "") {
            setPrevValue(value);
        }
    }, [value]);

    return (
        <div>
            <input
                className={
                    !isValid && value === "" && prevValue != ""
                        ? styles.inputError
                        : styles.input
                }
                placeholder={placeholder}
                value={value}
                type={type}
                onChange={onChange}
            ></input>
            {!isValid && value === "" && prevValue != "" && (
                <div className="text-red-500 text-sm flex items-center gap-1">
                    <IoAlertCircle />
                    <p>{error}</p>
                </div>
            )}
        </div>
    );
};

export default InputForm;
