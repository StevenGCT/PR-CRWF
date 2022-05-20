import { useState, createContext, useContext, useEffect } from 'react'
import { getUserByIdRequest, getCountUserDonatedFundingRequest, getUserDonatedFundingRequest, getCountUserFollowedFundingRequest, getUserFollowedFundingRequest, getCountUserFundingRequest, getUserFundingRequest, getUserRequest} from '../api/user'

const userContext = createContext()

export const useUsers = () => {
    const context = useContext(userContext)
    if (!context) throw new Error("Post Provider is missing");
  return context;
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

      useEffect(() => {
        getUser()
      }, [])

      useEffect(() => {
        getUserById()
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

    return (
        <userContext.Provider value={{ 
            users,
            usersById,

            followeds,
            followedsCount,

            donated,
            donatedCount,

            projects,
            projectsCount,

        }}>
          {children}
        </userContext.Provider>
      );
}