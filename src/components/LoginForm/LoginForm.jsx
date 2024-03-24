import { useState } from "react";
import InputForm from "../InputForm/InputForm";
import Toggle from "../Toggle/Toggle";
import logo from "./spotify-logo.png";
import styles from "./LoginForm.module.css";
import { useContext } from "react";
import ErrorLogin from "../ErrorLogin/ErrorLogin";
import SuccessfulLogin from "../SuccessfulLogin/SuccessfulLogin";
import ButtonForm from "../ButtonForm/ButtonForm";
import { UsersContext } from "../../ContextUsers/ContextUsers";
import { Link } from "react-router-dom";
const LoginForm = () => {
    const users = useContext(UsersContext);
    console.log(users);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showErrorLogin, setShowErrorLogin] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleEmail = (e) => {
        const newEmail = e.target.value;
        setEmail(newEmail);
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
                        <div className="bg-textColor border-b w-full"></div>
                        <p className="text-textColor">OR</p>
                        <div className="bg-textColor border-b w-full"></div>
                    </div>

                    <div className={styles.inputsContainer}>
                        <InputForm
                            placeholder="Email"
                            type="text"
                            value={email}
                            error="You must enter an email"
                            onChange={handleEmail}
                        />

                        <InputForm
                            placeholder="Password"
                            type="password"
                            value={password}
                            error="You must enter a password"
                            onChange={handlePassword}
                        />
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
                    <p
                        to="/register"
                        className="text-white border-b hover:text-spotifyGreen hover:border-spotifyGreen text-sm cursor-pointer"
                    >
                        Forgot your password?
                    </p>
                    <div className="bg-textColor border-b w-full"></div>
                    <div className="flex w-full justify-between text-textColor text-sm">
                        <p>Don't have an account?</p>
                        <Link
                            to="/register"
                            className="text-white border-b hover:text-spotifyGreen hover:border-spotifyGreen"
                        >
                            Sign up for Spotify.
                        </Link>
                    </div>
                </div>
            )}

            {isAuthenticated && <SuccessfulLogin />}
        </>
    );
};

export default LoginForm;
