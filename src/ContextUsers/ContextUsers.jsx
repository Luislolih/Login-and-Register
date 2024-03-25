import { createContext, useState } from "react";
const UsersContext = createContext();
const ContextUsers = ({ children }) => {
    const [users, setUsers] = useState([
        { name: "Luis", email: "luis@gloomy.com", password: "123" },
        { name: "Pedro", email: "pedro@gloomy.com", password: "123" },
        { name: "Simón", email: "simon@gloomy.com", password: "123" },
    ]);

    return (
        <UsersContext.Provider value={{ users, setUsers }}>
            {children}
        </UsersContext.Provider>
    );
};

export { ContextUsers, UsersContext };
