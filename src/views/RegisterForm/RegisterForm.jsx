import styles from "./RegisterForm.module.css";
import InputForm from "../../components/InputForm/InputForm";
import logo from "./spotify-logo.png";
import ButtonForm from "../../components/ButtonForm/ButtonForm";
import { useEffect, useState } from "react";
const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ]+$/u;
    const regexEmail = /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    const regexPassword = /^(?=.*[a-zA-Z])(?=.*[0-9!@#?$%^&*])(.{10,})$/;
    useEffect(() => {
        if (regexName.test(name.trim())) {
            setErrors({ ...errors, name: "" });
        }
        if (regexEmail.test(email.trim())) {
            setErrors({ ...errors, email: "" });
        }
        if (regexPassword.test(password.trim())) {
            setErrors({ ...errors, password: "" });
        }
    }, [name, email, password]);

    const handleInputChange = (fieldName, value) => {
        if (fieldName === "name") {
            setName(value);
        } else if (fieldName === "email") {
            setEmail(value);
        } else if (fieldName === "password") {
            setPassword(value);
        }
    };

    const handleBlur = (fieldName) => {
        if (fieldName === "name") {
            if (!name.trim()) {
                setErrors({
                    ...errors,
                    name: "The 'name' atribute is required.",
                });
            } else if (!regexName.test(name.trim())) {
                setErrors({
                    ...errors,
                    name: "The name cannot contain special characters or numbers.",
                });
            }
        } else if (fieldName === "email") {
            if (!email.trim()) {
                setErrors({
                    ...errors,
                    email: "The 'email' attribute is required.",
                });
            } else if (!regexEmail.test(email.trim())) {
                setErrors({
                    ...errors,
                    email: "This email is not valid. Make sure it has a format like this: example@email.com.",
                });
            }
        } else if (fieldName === "password") {
            if (!password.trim()) {
                setErrors({
                    ...errors,
                    password: "The 'password' attribute is required.",
                });
            } else if (!regexPassword.test(password.trim())) {
                setErrors({
                    ...errors,
                    password:
                        "Password must contain at least 1 letter, 1 number or special character (!@#?$%^&*), and be at least 10 characters long.",
                });
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("hiciste submit!!!!");
    };
    console.log(errors);
    return (
        <>
            <form className={styles.mainLoginForm} onSubmit={handleSubmit}>
                <img className="w-2/3" src={logo}></img>
                <div className={styles.inputsContainer}>
                    <InputForm
                        placeholder="Name"
                        type="text"
                        value={name}
                        errors={errors.name}
                        onChange={(e) =>
                            handleInputChange("name", e.target.value)
                        }
                        onBlur={() => handleBlur("name")}
                    />

                    <InputForm
                        placeholder="Email"
                        type="email"
                        value={email}
                        errors={errors.email}
                        onChange={(e) =>
                            handleInputChange("email", e.target.value)
                        }
                        onBlur={() => handleBlur("email")}
                    />
                    <InputForm
                        placeholder="Password"
                        type="password"
                        value={password}
                        errors={errors.password}
                        onChange={(e) =>
                            handleInputChange("password", e.target.value)
                        }
                        onBlur={() => handleBlur("password")}
                    />
                </div>
                <div className="w-1/3">
                    <ButtonForm
                        content={"REGISTER"}
                        type="submit"
                        disabled={
                            Object.values(errors).some(
                                (error) => error !== ""
                            ) ||
                            name.trim() === "" ||
                            email.trim() === "" ||
                            password.trim() === ""
                        }
                        colorButton="green"
                    ></ButtonForm>
                </div>
            </form>
        </>
    );
};

export default RegisterForm;
