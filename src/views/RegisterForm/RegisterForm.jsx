import styles from "./RegisterForm.module.css";
import InputForm from "../../components/InputForm/InputForm";
import logo from "./spotify-logo.png";
import ButtonForm from "../../components/ButtonForm/ButtonForm";
import { useState } from "react";
const RegisterForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const regexEmail = /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    const validateEmail = (email) => {
        return regexEmail.test(email);
    };

    const handleEmail = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        if (validateEmail(newEmail)) {
            setIsEmailValid(true);
        } else {
            setIsEmailValid(false);
        }
    };
    const handleRegister = () => {
        if (validateEmail(email)) {
            setIsEmailValid(true);
        } else {
            setIsEmailValid(false);
        }
    };
    console.log(isEmailValid);
    return (
        <>
            <div className={styles.mainLoginForm}>
                <img className="w-2/3" src={logo}></img>
                <div className={styles.inputsContainer}>
                    <InputForm
                        placeholder="Name"
                        type="text"
                        value={name}
                        error="Debes ingresar un nombre"
                    />

                    <InputForm
                        placeholder="Email"
                        type="email"
                        value={email}
                        isValid={isEmailValid}
                        errorValidate="This email is not valid. Make sure it is in a format like this: example@email.com"
                        onChange={handleEmail}
                    />
                    <InputForm
                        placeholder="Password"
                        type="password"
                        value={password}
                        error="Debes ingresar un password"
                    />
                </div>
                <div className="w-1/3">
                    <ButtonForm
                        content={"REGISTER"}
                        colorButton="green"
                        onClick={handleRegister}
                    ></ButtonForm>
                </div>
            </div>
        </>
    );
};

export default RegisterForm;
