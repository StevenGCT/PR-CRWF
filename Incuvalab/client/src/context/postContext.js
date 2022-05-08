import { useState, createContext, useContext, useEffect } from 'react'
import {getFundsRequests} from '../api/funds'

const postContext = createContext()

export const usePosts = () => {
    const context = useContext(postContext)
    return context
}

export const PostProvider = ({children}) => {
    
    const [posts, setPosts] = useState([])

    const getFunds = async () => {
      const res =  await getFundsRequests()
      setPosts(res.data)
    }

    useEffect(() =>{
        getFunds()
      }, [])

    return <postContext.Provider value={{
        posts,
        getFunds
    }}>
        {children}
    </postContext.Provider>
}