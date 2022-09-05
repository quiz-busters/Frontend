import { createContext, useContext, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export function UserContextProvider({children}) {

    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true);
    const navigate = useNavigate();

     async function register(name, email, password, image) {
        try {
            console.log(name, email, password);
            const res = await axios.post("http://localhost:5000/user/register", { name, email, password, image});
            console.log(res.data);
            localStorage.setItem("token", res.data.token)
            setUser(res.data.user)
            navigate('/');
        } catch (error) {
            console.log(error?.response?.data)
        }
        
     }

    async function login(email, password) {
        try {
            console.log(email, password);
            const res = await axios.post("http://localhost:5000/user/login", { email, password });
            console.log(res.data);
            localStorage.setItem("token", res.data.token)
            setUser(res.data.user);
            navigate('/');
        } catch (error) {
            console.log(error?.response?.data)
        }
        
     }

     async function getCurrentUser() {
        try {
          
            const res = await axios.get("http://localhost:5000/user/currentUser", {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            });
            console.log(res.data);
            setUser(res.data);
        } catch (error) {
            console.log(error?.response?.data)
        }
        setUserLoading(false);
     }

    const value = {
        register,
        login,
        getCurrentUser,
        userLoading,
        user
    };


    return <UserContext.Provider value={value}>
        {children} 
    </UserContext.Provider>
}

export function useUserContext() {
    return useContext(UserContext);
}
