import { useState, createContext, useContext, useEffect } from 'react'
import { getFundsRequests, getFundsRequestsByCat } from '../api/funds'
import { getCatRequests } from '../api/categories'


const postContext2 = createContext()



export const usePostsFund = () => {
    const context = useContext(postContext2)
    return context
}

export const usePostsCat = () => {
    const context = useContext(postContext2)
    return context
}


export const PostProviderFund = ({children}) => {
    
    const [posts, setPosts] = useState([])
    const [postsCat, setPostsCat] = useState([])

    const getFunds = async () => {
      const res =  await getFundsRequests()
      console.log(res, setPosts)
      setPosts(res.data)
    }

    const getCats = async () => {
      const res =  await getCatRequests()
      console.log("Datos getCats", res)
      setPostsCat(res.data)
    }

    const getPostsFundByCat = async (idCat) => {
      try{
        const res = await getFundsRequestsByCat(idCat);
        return res.data;
      }
      catch (error){
        console.error(error);
      }
    };


    useEffect(() =>{
        getFunds()
      }, [])

    useEffect(() =>{
        getCats()
      }, [])

    return <postContext2.Provider value={{
        posts,
        getFunds,
        postsCat,
        getCats,
        getPostsFundByCat
    }}>
        {children}
    </postContext2.Provider>   
}
