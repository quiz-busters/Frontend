import { createContext, useContext, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export function UserContextProvider({children}) {

    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true);
    const navigate = useNavigate();

     async function register(username, email, password, image) {
        try {
            console.log(username, email, password);
            const res = await axios.post("https://quiz-busters.herokuapp.com/register", { username, email, password, image});
            console.log(res.data);
            localStorage.setItem("token", res.data.token)
            setUser(res.data.user)
            navigate('/');
        } catch (error) {
            console.log(error?.response?.data)
        }
        
     }

    async function login(username, password) {
        try {
            console.log(username, password);
            const res = await axios.post("https://quiz-busters.herokuapp.com/login", { username, password });
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
          
            const res = await axios.get("https://quiz-busters.herokuapp.com/users", {
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
