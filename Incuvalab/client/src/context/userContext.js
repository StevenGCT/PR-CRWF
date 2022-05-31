import { useState, createContext, useContext, useEffect } from 'react'
import { changePassword, getAllCategorysRequest, createFundingRequest, getUserByIdRequest, getCountUserDonatedFundingRequest, getUserDonatedFundingRequest, getCountUserFollowedFundingRequest, getUserFollowedFundingRequest, getCountUserFundingRequest, getUserFundingRequest, getUserRequest} from '../api/user'
import { getFundsRequests, getFundsRequestsByCat, getFundsAprobeRequests, getFundsErasedRequests } from '../api/funds'
import { getCatRequests } from '../api/categories'
import { getFundingByIdRequest } from '../api/funding'
import { loginUserRequest, registerUserRequest, getTypeUserRequest} from '../api/users'



const userContext = createContext()

export const useUsers = () => {
    const context = useContext(userContext)
    if (!context) throw new Error("Post Provider is missing");
  return context;
}

export const usePostsFund = () => {
  const context = useContext(userContext)
  return context
}

export const usePostsCat = () => {
  const context = useContext(userContext)
  return context
}

export const usePostsCatFund = () => {
const context = useContext(userContext)
return context
}

export const usePostsFundAprobe = () => {
  const context = useContext(userContext)
  return context
}

export const usePostsFundRecycle = () => {
  const context = useContext(userContext)
  return context
}


export const UserProvider = ({children}) =>{
    const [users, setUsers] = useState([]);
    const [usersById, setUsersById] = useState([]);

    const [followeds, setFollowed] = useState([]);
    const [followedsCount, setFollowedCount] = useState([]);

    const [donated, setDonated] = useState([]);
    const [donatedCount, setDonatedCount] = useState([]);

    const [projects, setProjec] = useState([]);
    const [projectsCount, setProjectCount] = useState([]);
    
    const [categorys, setCategorys] = useState([]);
    
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

    const getTypeUser = async (user) => {
      const res = await getTypeUserRequest(user);
      return res.data;
    }

    const getAllCategory = async () =>{
      const res = await getAllCategorysRequest()
      setCategorys(res.data)
    }

    const getFollowedFunding = async () =>{
        const res = await getUserFollowedFundingRequest()
        setFollowed(res.data)
    }

    const getFollowedCount = async () =>{
        const res = await getCountUserFollowedFundingRequest()
        setFollowedCount(res.data)
    }

    const getDonatedFunding = async () =>{
        const res = await getUserDonatedFundingRequest()
        setDonated(res.data)
    }

    const getDonatedCount = async () =>{
        const res = await getCountUserDonatedFundingRequest()
        setDonatedCount(res.data)
    }

    const getUserFunding = async () =>{
        const res = await getUserFundingRequest()
        setProjec(res.data)
    }

    const getUserFundingCount = async () =>{
        const res = await getCountUserFundingRequest()
        setProjectCount(res.data)
    }

    const getUser = async () =>{
        const res = await getUserRequest()
        setUsers(res.data)
    }
    
    const getUserById = async () =>{
        const res = await getUserByIdRequest()
        setUsersById(res.data)
    }

    const createFunding = async (funding) =>{
      const res = await createFundingRequest(funding)
      console.log(res) 
    }

    const updatePassword = async (id, password) =>{
      const res =  await changePassword(id, password)
      console.log(res)
    }

    const [posts, setPosts] = useState([])
    const [postsCat, setPostsCat] = useState([])
    const [postsCatFund, setPostsCatFund] = useState([])
    const [postsToAprobe, setPostsAprobe] = useState([])
    const [postsToRecycle, setPostsRecycle] = useState([])

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

    const getFundsAprobe = async () => {
      const res =  await getFundsAprobeRequests()
      console.log(res, setPosts)
      setPostsAprobe(res.data)
    }

    const getFundsRecycle = async () => {
      const res =  await getFundsErasedRequests()
      console.log(res, setPosts)
      setPostsRecycle(res.data)
    }

    const getPostsFundByCat = async (id) => {
      try{
        const res = await getFundsRequestsByCat(id);
        setPostsCatFund(res.data);
      }
      catch (error){
        console.error(error);
      }
    };

    const getFundingById = async (idFunding) => {
      const res = await getFundingByIdRequest(idFunding);
      return res.data;
  }

    useEffect(() => {
      getAllCategory()
    }, [])

      useEffect(() => {
        getUser()
      }, [])

      useEffect(() => {
        getUserById()
      }, [])

      useEffect(() =>{
        getFundsAprobe()
      }, [])

      useEffect(() =>{
        getFundsRecycle()
      }, [])

      useEffect(() => {
        getFollowedFunding()
      }, [])

      useEffect(() => {
        getFollowedCount()
      }, [])

      useEffect(() => {
        getDonatedFunding()
      }, [])

      useEffect(() => {
        getDonatedCount()
      }, [])

      useEffect(() => {
        getUserFunding()
      }, [])

      useEffect(() => {
        getUserFundingCount()
      }, [])

      useEffect(() =>{
        getFunds()
      }, [])

    useEffect(() =>{
        getCats()
      }, [])

    useEffect(() =>{
        getPostsFundByCat()
      }, [])

    return (
        <userContext.Provider value={{ 
            categorys,

            users,
            usersById,

            followeds,
            followedsCount,

            donated,
            donatedCount,

            projects,
            projectsCount,

            createFunding,
            updatePassword,
            setPosts,
            posts,
            getFunds,

            postsCat,
            getCats,

            postsCatFund,
            getPostsFundByCat,

            postsToAprobe,
            getFundsAprobe,

            postsToRecycle,
            getFundsRecycle,

            getFundingById,

            registerUser,
            loginUser,
            getTypeUser
        }}>
          {children}
        </userContext.Provider>
      );
}