import { createContext, useContext, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const UserContext = createContext();

export function UserContextProvider({children}) {

    const [user, setUser] = useState(null);
    const [userLoading, setUserLoading] = useState(true);
    const [myscore, setScore] = useState(4);

    const navigate = useNavigate();

     async function register(username, email, password, image) {
        try {
            console.log(username, email, password);
            const res = await axios.post("/register", { username, email, password, image});
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
            const res = await axios.post("/login", { username, password });
            console.log(res.data);
            localStorage.setItem("token", res.data.token)
            
            setUser(res.data.username);
           
            navigate('/');
        } catch (error) {
            console.log(error?.response?.data)
        }
        
     }
     
     //post score
     async function playerScore(username,score) {
        try {
           
            const res = await axios.post(`/${username}/score`, { score});

            console.log("uername and score- "+res.username, res.myscore);
            console.log("res"+ res.data);
            console.log("score: "+res.score);
            setScore(res.myscore);

         
           
        } catch (error) {
            console.log(error?.response?.data)
        }
        
     }




     async function getCurrentUser() {
        try {
          
            const res = await axios.get("/currentUser", {
                headers: {
                    Authorization: localStorage.getItem('token')?.split(" ")[1]
                }
            });
            console.log("currentUser",res.data);
            setUser(res.data);
        } catch (error) {
            console.log(error?.response?.data)
        }
        setUserLoading(false);
     }

     function logout() {
        localStorage.removeItem('token')
        setUser(null);
     }

    const value = {
        register,
        login,
        getCurrentUser,
        logout,
        userLoading,
        user,playerScore
    };


    return <UserContext.Provider value={value}>
        {children} 
    </UserContext.Provider>
}

export function useUserContext() {
    return useContext(UserContext);
}
