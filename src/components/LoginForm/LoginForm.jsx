import { useState } from "react";
import InputForm from "../InputForm/InputForm";
import Toggle from "../Toggle/Toggle";
import logo from "./spotify-logo.png";
import styles from "./LoginForm.module.css";
import users from "../../users";
import ErrorLogin from "../ErrorLogin/ErrorLogin";
import SuccessfulLogin from "../SuccessfulLogin/SuccessfulLogin";
import ButtonForm from "../ButtonForm/ButtonForm";

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [showErrorLogin, setShowErrorLogin] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    // const regexEmail = /^[\w-]+(\.[\w-]+)*@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    // const validateEmail = (email) => {
    //     return regexEmail.test(email);
    // };

    const handleEmail = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
        // setIsEmailValid(validateEmail(newEmail));
    };
    const handlePassword = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
    };

    const handleLogin = () => {
        const isValidUser = users.some(
            (user) => user.email === email && user.password === password
        );

        if (isValidUser) {
            setIsAuthenticated(true);
        } else {
            setShowErrorLogin(true);
        }
    };
    return (
        <>
            {!isAuthenticated && (
                <div className={styles.mainLoginForm}>
                    <img className="w-2/3" src={logo}></img>
                    {showErrorLogin && <ErrorLogin />}
                    <div className="w-full">
                        <ButtonForm
                            content={"LOG IN WITH FACEBOOK"}
                        ></ButtonForm>
                    </div>

                    <div className={styles.orContainer}>
                        <div className="bg-textColor h-0.5 w-full"></div>
                        <p className="text-textColor">OR</p>
                        <div className="bg-textColor h-0.5 w-full"></div>
                    </div>

                    <div className={styles.inputsContainer}>
                        <InputForm
                            placeholder="Email"
                            type="text"
                            value={email}
                            isValid={isEmailValid}
                            error="Debes ingresar un email"
                            onChange={handleEmail}
                        />
                        <p></p>

                        <InputForm
                            placeholder="Password"
                            type="password"
                            value={password}
                            isValid={isPasswordValid}
                            error="Debes ingresar una contraseña"
                            onChange={handlePassword}
                        />
                        <p></p>
                    </div>
                    <div className={styles.rememberContainer}>
                        <p className="text-textColor">Remember me</p>
                        <Toggle />
                    </div>

                    <div className="w-1/3">
                        <ButtonForm
                            content={"LOG IN"}
                            onClick={handleLogin}
                            colorButton="green"
                        ></ButtonForm>
                    </div>
                </div>
            )}
            {isAuthenticated && <SuccessfulLogin />}
        </>
    );
};

export default LoginForm;
