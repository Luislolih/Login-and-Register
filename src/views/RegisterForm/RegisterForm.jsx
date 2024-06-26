import styles from "./RegisterForm.module.css";
import InputForm from "../../components/InputForm/InputForm";
import logo from "./logo-gloomy-web.png";
import ButtonForm from "../../components/ButtonForm/ButtonForm";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ButtonSocialMedia from "../../components/ButtonSocialMedia/ButtonSocialMedia";
import { UsersContext } from "../../ContextUsers/ContextUsers";
import Successful from "../../components/Successful/Successful";
const RegisterForm = () => {
    const { users, setUsers } = useContext(UsersContext);
    const [name, setName] = useState("");
    const [existUser, setExistUser] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState("");
    const [showSuccess, setShowSuccess] = useState(false);
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
            const newUserExists = users.some((user) => user.email === value);
            setExistUser(newUserExists);
            if (!newUserExists) {
                setErrors({ ...errors, email: "" });
            }
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
            } else {
                setErrors({ ...errors, name: "" });
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
            } else {
                setErrors({ ...errors, email: "" });
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
            } else {
                setErrors({ ...errors, password: "" });
            }
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (existUser) {
            setErrors({
                ...errors,
                email: "The email already exists",
            });
        } else {
            setErrors({
                ...errors,
                email: "",
            });
            const newUser = {
                name: name,
                email: email,
                password: password,
            };
            setUsers((prevUsers) => [...prevUsers, newUser]);
            setShowSuccess(true);
            setName("");
            setEmail("");
            setPassword("");
        }
    };
    return (
        <>
            <form className={styles.mainLoginForm} onSubmit={handleSubmit}>
                <img className="w-2/3" src={logo}></img>

                <div className="flex justify-center text-xl w-full mt-4 mb-1">
                    <p className="text-textColor text-md">
                        Sign up to start listening to content.
                    </p>
                </div>
                <div className="bg-textColor border-b w-full"></div>
                {showSuccess && <Successful text="Registration completed!" />}
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
                <div className={styles.orContainer}>
                    <div className="bg-textColor border-b w-full"></div>
                    <p className="text-textColor">or</p>
                    <div className="bg-textColor border-b w-full"></div>
                </div>
                <div className="w-full flex flex-col gap-2.5">
                    <ButtonSocialMedia
                        content={"Register with Google"}
                        src="google"
                        type="button"
                    ></ButtonSocialMedia>
                    <ButtonSocialMedia
                        content={"Register with Facebook"}
                        src="facebook"
                        type="button"
                    ></ButtonSocialMedia>
                    <ButtonSocialMedia
                        content={"Register with Apple"}
                        src="apple"
                        type="button"
                    ></ButtonSocialMedia>
                </div>
                <div className="bg-textColor border-b w-full"></div>
                <div className="flex w-full justify-between text-textColor text-sm">
                    <p>Do you already have an account?</p>
                    <Link
                        to="/"
                        className="text-white border-b hover:text-spotifyGreen hover:border-spotifyGreen"
                    >
                        Log in here.
                    </Link>
                </div>
            </form>
        </>
    );
};

export default RegisterForm;
