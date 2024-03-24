import { useState, useEffect } from "react";
import styles from "./InputForm.module.css";
import { IoAlertCircle } from "react-icons/io5";
const InputForm = ({ placeholder, type, value, onChange, onBlur, errors }) => {
    return (
        <div>
            <input
                className={errors ? styles.inputError : styles.input}
                placeholder={placeholder}
                value={value}
                type={type}
                onChange={onChange}
                onBlur={onBlur}
                errors={errors}
            ></input>
            {errors && (
                <div className="text-red-500 text-sm flex items-center gap-1">
                    <IoAlertCircle />
                    <p>{errors}</p>
                </div>
            )}
        </div>
    );
};

export default InputForm;
