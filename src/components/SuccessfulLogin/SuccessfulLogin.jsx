import { FaCheckCircle } from "react-icons/fa";
const SuccessfulLogin = () => {
    return (
        <div className="flex justify-start items-center gap-1 text-sm  bg-spotifyGreen px-3 py-2 rounded-sm w-full mt-3">
            <FaCheckCircle className="bg-spotifyGreen text-white" />

            <p className="bg-spotifyGreen text-white">
                ¡Inicio de sesión exitoso!
            </p>
        </div>
    );
};

export default SuccessfulLogin;
