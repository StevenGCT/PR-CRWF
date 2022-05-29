import { useState, createContext, useContext, useEffect } from 'react'
import { getFundsRequests, getFundsRequestsByCat, getFundsAprobeRequests } from '../api/funds'
import { getCatRequests } from '../api/categories'


const postContext2 = createContext()


export const usePostsFund = () => {
    const context = useContext(postContext2)
    return context
}

export const usePostsFundAprobe = () => {
  const context = useContext(postContext2)
  return context
}

export const usePostsCat = () => {
    const context = useContext(postContext2)
    return context
}

export const usePostsCatFund = () => {
  const context = useContext(postContext2)
  return context
}

export const PostProviderFund = ({children}) => {
    
    const [posts, setPosts] = useState([])
    const [postsToAprobe, setPostsAprobe] = useState([])
    const [postsCat, setPostsCat] = useState([])
    const [postsCatFund, setPostsCatFund] = useState([])

    const getFunds = async () => {
      const res =  await getFundsRequests()
      console.log(res, setPosts)
      setPosts(res.data)
    }

    const getFundsAprobe = async () => {
      const res =  await getFundsAprobeRequests()
      console.log(res, setPosts)
      setPostsAprobe(res.data)
    }

    const getCats = async () => {
      const res =  await getCatRequests()
      console.log("Datos getCats", res)
      setPostsCat(res.data)
    }


    const getPostsFundByCat = async (idCat) => {
      try{
        const res = await getFundsRequestsByCat(idCat);
        console.log("Datos getPostsFundByCat", res)
        setPostsCatFund(res.data);
      }
      catch (error){
        console.error(error);
      }
    };


    useEffect(() =>{
        getFunds()
      }, [])

    useEffect(() =>{
        getFundsAprobe()
      }, [])

    useEffect(() =>{
        getCats()
      }, [])

    useEffect(() =>{
        getPostsFundByCat()
      }, [])

    return <postContext2.Provider value={{
        posts,
        getFunds,
        postsCat,
        getCats,
        postsCatFund,
        getPostsFundByCat,
        postsToAprobe,
        getFundsAprobe
    }}>
        {children}
    </postContext2.Provider>   
}
