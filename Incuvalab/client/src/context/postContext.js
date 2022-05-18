import { useState, useContext, createContext , useEffect} from 'react'
import { loginUserRequest, registerUserRequest} from '../api/users'

//** Otro */
import { getFundingByIdRequest } from '../api/funding'
//** Otro */

const postContext = createContext();

export const usePosts = () => {
    const context = useContext(postContext);
    return context;
}

export const PostProvider = ({children}) => {
    const [posts, setPosts] = useState([])

    const registerUser = async (user) => {
        const res = await registerUserRequest(user);
        
        if(res.data != null){
            const resLogin = await loginUserRequest(user);
            return resLogin.data;
        }
        
    }

    const loginUser = async (user) => {
        const res = await loginUserRequest(user);
        return res.data;
    }

    //** Otro */
    const getFundingById = async (idFunding) => {
        const res = await getFundingByIdRequest(idFunding);
        return res.data;
    }

    useEffect(() => {
      
    },[]);

    return <postContext.Provider value={{
        posts,
        setPosts,
        registerUser,
        loginUser,
        getFundingById
    }}>
        {children}
    </postContext.Provider>
}