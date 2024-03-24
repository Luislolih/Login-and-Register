import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm/LoginForm";
import RegisterForm from "./views/RegisterForm/RegisterForm";

function App() {
    return (
        <div className="flex items-center justify-center">
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
