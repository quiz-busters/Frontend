import { createContext, useContext, useState } from "react";
import axios from 'axios';

const UserContext = createContext();

export function UserContextProvider({children}) {

    const [user, setUser] = useState(null);

     async function register(name, email, password, image) {
        try {
            console.log(name, email, password);
            const res = await axios.post("http://localhost:5000/user/register", { name, email, password, image});
            console.log(res.data);
            localStorage.setItem("token", res.data.token)
            setUser(res.data.user)
        } catch (error) {
            console.log(error?.response?.data)
        }
        
     }


    const value = {
        register

    };

    return <UserContext.Provider value={value}>
        {children} 
    </UserContext.Provider>
}

export function useUserContext() {
    return useContext(UserContext);
}
