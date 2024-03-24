import { createContext, useState } from "react";
const UsersContext = createContext();
const ContextUsers = ({ children }) => {
    const [users, setUsers] = useState([
        { email: "123@correo.com", password: "123" },
        { email: "usuario2@example.com", password: "password2" },
        { email: "usuario3@example.com", password: "password3" },
    ]);

    return (
        <UsersContext.Provider value={users}>{children}</UsersContext.Provider>
    );
};

export { ContextUsers, UsersContext };
