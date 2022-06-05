import { useState, createContext, useContext, useEffect } from 'react'
import { changePassword, getAllCategorysRequest, createFundingRequest, getUserByIdRequest, getCountUserDonatedFundingRequest, getUserDonatedFundingRequest, getCountUserFollowedFundingRequest, getUserFollowedFundingRequest, getCountUserFundingRequest, getUserFundingRequest, getUserRequest } from '../api/user'
import { getFundsRequests, getFundsRequestsByCat, getFundsAprobeRequests, getFundsErasedRequests, getFundsCompletedRequests, aproveRequestsOfList, removeRequestFromBault, permanentDeleteRequest, moveRequestToBault } from '../api/funds'
import { getCatRequests } from '../api/categories'
import { getFundingByIdRequest, getFundingTop3Request } from '../api/funding'
import { loginUserRequest, registerUserRequest, getTypeUserRequest, userListToEditRequest , userDonateFundingRequest} from '../api/users'
import { createCommentRequest, getCommentsRequest, deleteCommentRequest} from '../api/comment'



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

export const useFundTop = () => {
  const context = useContext(userContext)
  return context
}

export const usePostsUsersList = () => {
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

export const usePostsFundComplete = () => {
  const context = useContext(userContext)
  return context
}


export const UserProvider = ({ children }) => {
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

    if (res.data != null) {
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

  const userDonateFunding = async (id) => {
    const res = await userDonateFundingRequest(id);
    return res.data;
  }

  const getAllCategory = async () => {
    const res = await getAllCategorysRequest()
    setCategorys(res.data)
  }

  const getFollowedFunding = async () => {
    const res = await getUserFollowedFundingRequest()
    setFollowed(res.data)
  }

  const getFollowedCount = async () => {
    const res = await getCountUserFollowedFundingRequest()
    setFollowedCount(res.data)
  }

  const getDonatedFunding = async () => {
    const res = await getUserDonatedFundingRequest()
    setDonated(res.data)
  }

  const getDonatedCount = async () => {
    const res = await getCountUserDonatedFundingRequest()
    setDonatedCount(res.data)
  }

  const getUserFunding = async () => {
    const res = await getUserFundingRequest()
    setProjec(res.data)
  }

  const getUserFundingCount = async () => {
    const res = await getCountUserFundingRequest()
    setProjectCount(res.data)
  }

  const getUser = async () => {
    const res = await getUserRequest()
    setUsers(res.data)
  }

  const getUserById = async () => {
    const res = await getUserByIdRequest()
    setUsersById(res.data)
  }

  const createFunding = async (funding) => {
    const res = await createFundingRequest(funding)
    console.log(res)
  }

  const updatePassword = async (id, password) => {
    const res = await changePassword(id, password)
    console.log(res)
  }

  const [posts, setPosts] = useState([])
  const [postsTop, setPostsTop] = useState([])
  const [postsCat, setPostsCat] = useState([])
  const [postsCatFund, setPostsCatFund] = useState([])
  const [postsToAprobe, setPostsAprobe] = useState([])
  const [postsToRecycle, setPostsRecycle] = useState([])
  const [postsComplete, setPostsCompleted] = useState([])
  const [postsUsersList, setPostsUsersToModify] = useState([])

  const getFunds = async () => {
    const res = await getFundsRequests()
    console.log(res, setPosts)
    setPosts(res.data)
  }

  const getUsersToModify = async () => {
    const res = await userListToEditRequest()
    console.log("Datos to modify", res)
    setPostsUsersToModify(res.data)
  }

  const getCats = async () => {
    const res = await getCatRequests()
    console.log("Datos getCats", res)
    setPostsCat(res.data)
  }

  const getFundsAprobe = async () => {
    const res = await getFundsAprobeRequests()
    console.log(res, setPosts)
    setPostsAprobe(res.data)
  }

  const getFundsRecycle = async () => {
    const res = await getFundsErasedRequests()
    console.log(res, setPosts)
    setPostsRecycle(res.data)
  }

  const getFundsCompleted = async () => {
    const res = await getFundsCompletedRequests()
    console.log(res, setPosts)
    setPostsCompleted(res.data)
  }

  const getPostsFundByCat = async (id) => {
    try {
      const res = await getFundsRequestsByCat(id);
      setPostsCatFund(res.data);
    }
    catch (error) {
      console.error(error);
    }
  };

  const moveFundingToBault = async (id) => {
    try {
    const res = await moveRequestToBault(id);
    setPosts(posts.filter((post) => post.idFunding !== id))
    }
    catch (error)
    {
      console.error(error);
    }
  }

  const fundingOutBault = async (id) => {
    const res = await removeRequestFromBault(id);
    return res.data;
  }

  const publishFunding = async (id) => {
    const res = await aproveRequestsOfList(id);
    return res.data;
  }

  const deletePermanentFunding = async (id) => {
    const res = await permanentDeleteRequest(id);
    return res.data;
  }

  const getFundingById = async (idFunding) => {
    const res = await getFundingByIdRequest(idFunding);
    return res.data;
  }

  const getFundingTop3 = async () => {
    const res = await getFundingTop3Request();
    setPostsTop(res.data);
  }

  const createComment = async (comment) => {
    const res = await createCommentRequest(comment);

    if (res.data != null) {
      return res.status;
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


  useEffect(() => {
    getAllCategory()
  }, [])

  useEffect(() => {
    getUser()
  }, [])

  useEffect(() => {
    getUsersToModify()
  }, [])

  useEffect(() => {
    getUserById()
  }, [])

  useEffect(() => {
    getFundsAprobe()
  }, [])

  useEffect(() => {
    getFundsRecycle()
  }, [])

  useEffect(() => {
    getFundsCompleted()
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

  useEffect(() => {
    getFunds()
  }, [])

  useEffect(() => {
    getFundingTop3()
  }, [])

  useEffect(() => {
    getCats()
  }, [])

  useEffect(() => {
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

      setPostsTop,
      postsTop,

      postsCat,
      getCats,

      postsCatFund,
      getPostsFundByCat,

      postsToAprobe,
      getFundsAprobe,
      moveFundingToBault,
      publishFunding,

      postsToRecycle,
      getFundsRecycle,
      deletePermanentFunding,
      fundingOutBault,

      postsComplete,
      getFundsCompleted,

      postsUsersList,
      getUsersToModify,

      getFundingById,

      registerUser,
      loginUser,
      getTypeUser,

      getFundingTop3,

      createComment,
      getComments,
      deleteCommentById,
      userDonateFunding
    }}>
      {children}
    </userContext.Provider>
  );
}