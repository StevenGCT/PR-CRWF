import { useState, useContext, createContext , useEffect} from 'react'
import { loginUserRequest, registerUserRequest} from '../api/users'
const postContext = createContext();

export const usePosts = () => {
    const context = useContext(postContext);
    return context;
}

export const PostProvider = ({children}) => {
    const [posts, setPosts] = useState([])

   /* const getUser = async () => {
        const res = await getUserRequest()
        console.log(res)
        //setPost(res.data)
    }*/

    const registerUser = async (user) => {
        const res = await registerUserRequest(user);
    }

    const loginUser = async (user) => {
        const res = await loginUserRequest(user);
        console.log(res.data);
        return res.data;
    }

    useEffect(() => {
       //getPosts()
    }, [])


    return <postContext.Provider value={{
        posts,
        setPosts,
        registerUser,
        loginUser
    }}>
        {children}
    </postContext.Provider>
}