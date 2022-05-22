import { useState, useContext, createContext , useEffect} from 'react'
import { loginUserRequest, registerUserRequest} from '../api/users'

//** Otro */
import { getFundingByIdRequest } from '../api/funding'
import { createCommentRequest, getCommentsRequest, deleteCommentRequest} from '../api/comment'
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

    const createComment = async (comment) => {
        const res = await createCommentRequest(comment);
        
        if(res.data != null){
            return res;
        }
    }

    const getComments = async (idFunding) => {
        const res = await getCommentsRequest(idFunding);
        return res.data;
    }

    const deleteCommentById = async (idComment) => {
        const res = await deleteCommentRequest(idComment);
        return res.data;
    }
    //** Otro */

    useEffect(() => {
        
    },[]);

    return <postContext.Provider value={{
        posts,
        setPosts,
        registerUser,
        loginUser,
        getFundingById,
        createComment,
        getComments,
        deleteCommentById
    }}>
        {children}
    </postContext.Provider>
}