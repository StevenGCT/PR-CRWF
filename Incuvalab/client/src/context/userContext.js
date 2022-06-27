import { useState, createContext, useContext, useEffect } from 'react'
import { changePassword, getAllCategorysRequest, createFundingRequest, putFundingRequest, getUserByIdRequest, getCountUserDonatedFundingRequest, getUserDonatedFundingRequest, getCountUserFollowedFundingRequest, getUserFollowedFundingRequest, getCountUserFundingRequest, getUserFundingRequest, getUserRequest } from '../api/user'
import { getFundsRequests, getFundsRequestsByCat, getFundsAprobeRequests, getFundsErasedRequests, getFundsCompletedRequests, aproveRequestsOfList, removeRequestFromBault, permanentDeleteRequest, moveRequestToBault, getFundByNameRequest } from '../api/funds'
import { getCatRequests } from '../api/categories'
import { getFundingByIdRequest, getFundingTop3Request } from '../api/funding'
import { loginUserRequest, registerUserRequest, getTypeUserRequest, userListToEditRequest, userDonateFundingRequest, deleteReqById, getemailCoincidencesRequest, getNumberConfirmationRequest, setPasswordForgetRequest, setUpdateUserRequest, setUpdateAccountInfoRequest ,registerAdminRequest } from '../api/users'
import { createCommentRequest, getCommentsRequest, deleteCommentRequest } from '../api/comment'
import { getCodeQrRequest } from '../api/qr'
import { createRoutesFromChildren } from 'react-router-dom'

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

export const usePostsNamFund = () => {
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

export const usePostsQr = () => {
  const context = useContext(userContext)
  return context
}

export const useUserFundings = () => {
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

  const registerAdmin = async (user) => {
    const res = await registerAdminRequest(user);
    return res.data;
  }

  const loginUser = async (user) => {
    const res = await loginUserRequest(user);
    return res.data;
  }

  const setUpdateUser = async (id, user) => {
    const res = await setUpdateUserRequest(id,user);
    return res.data;
  }

  const setUpdateAccountInfo = async (id, user) => {
    const res = await setUpdateAccountInfoRequest(id , user);
    return res.data;
  }

  const getemailCoincidences = async (emailSend) => {
    const res = await getemailCoincidencesRequest(emailSend);
    return res.data;
  }

  const getNumberConfirmation = async (emailSend) => {
    const res = await getNumberConfirmationRequest(emailSend);
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

  const deleteUserById = async (id) => {
    const res = await deleteReqById(id)
    setProjec(res.data)
  }

  const getUser = async () => {
    const res = await getUserRequest()
    setUsers(res.data)
  }

  const getUserById = async (id) => {
    const res = await getUserByIdRequest(id)
    return res.data
  }

  const getFollowedCount = async (id) => {
    const res = await getCountUserFollowedFundingRequest(id)
    return res.data
  }

  const getDonatedCount = async (id) => {
    const res = await getCountUserDonatedFundingRequest(id)
    return res.data
  }
  
  const getUserFundingCount = async (id) => {
    const res = await getCountUserFundingRequest(id)
    return res.data
  }

  const getFollowedFunding = async (id) => {
    const res = await getUserFollowedFundingRequest(id)
    return res.data
  }
  
  const getDonatedFunding = async (id) => {
    const res = await getUserDonatedFundingRequest(id)
    return res.data
  }

  const getUserFunding = async (id) => {
    const res = await getUserFundingRequest(id)
    return res.data
  }

  const createFunding = async (funding) => {
    const res = await createFundingRequest(funding)
    return res.data;
  }
 
  const updateFunding = async (funding) => {
    const res = await putFundingRequest(funding)
    return res.data;
  }

  const updatePassword = async (id, password) => {
    const res = await changePassword(id, password)
  }


  const [posts, setPosts] = useState([])
  const [postsTop, setPostsTop] = useState([])
  const [postsCat, setPostsCat] = useState([])
  const [postsCatFund, setPostsCatFund] = useState([])
  const [postsNamFund, setPostsNamFund] = useState([])
  const [postsToAprobe, setPostsAprobe] = useState([])
  const [postsToRecycle, setPostsRecycle] = useState([])
  const [postsComplete, setPostsCompleted] = useState([])
  const [postsUsersList, setPostsUsersToModify] = useState([])
  const [postsQr, setPostsQr] = useState([])

  const getFunds = async () => {
    const res = await getFundsRequests()
    setPosts(res.data)
  }

  const getUsersToModify = async () => {
    const res = await userListToEditRequest()
    setPostsUsersToModify(res.data)
  }

  const getCats = async () => {
    const res = await getCatRequests()
    console.log("Datos getCats", res)
    setPostsCat(res.data)
  }

  const getQr = async () => {
    const res = await getCodeQrRequest()
    console.log("Datos getQr", res)
    setPostsQr(res.data)
  }

  const getFundsAprobe = async () => {
    const res = await getFundsAprobeRequests()
    setPostsAprobe(res.data)
  }

  const getFundsRecycle = async () => {
    const res = await getFundsErasedRequests()
    setPostsRecycle(res.data)
  }

  const getFundsCompleted = async () => {
    const res = await getFundsCompletedRequests()
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

  const getPostsFundByNam = async (post) => {
      console.log(post)
      const res = await getFundByNameRequest(post);
      setPostsNamFund(res.data);
  };


  const moveFundingToBault = async (id) => {
    const res = await moveRequestToBault(id);
    return res.data;
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

  const setPasswordForget = async (user) => {
    const res = await setPasswordForgetRequest(user);
    return res.data;
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
    getFundsAprobe()
  }, [])

  useEffect(() => {
    getFundsRecycle()
  }, [])

  useEffect(() => {
    getFundsCompleted()
  }, [])

  useEffect(() => {
    getemailCoincidences()
  } , [])

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
    getQr()
  }, [])

  useEffect(() => {
    getPostsFundByCat()
  }, [])

   useEffect(() => {
    getPostsFundByNam()
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
      setPasswordForget,
      getNumberConfirmation,
      getemailCoincidences,
      createFunding,
      updateFunding,
      updatePassword,
      setPosts,
      posts,
      getFunds,

      setPostsTop,
      postsTop,

      postsCat,
      getCats,

      postsQr,
      getQr,

      getUserById,

      postsCatFund,
      getPostsFundByCat,

      postsNamFund,
      getPostsFundByNam,

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
      deleteUserById,

      getFundingTop3,

      createComment,
      getComments,
      deleteCommentById,
      userDonateFunding,
      getFollowedCount, getDonatedCount, getUserFundingCount,
      setUpdateUser,
      setUpdateAccountInfo,
      getFollowedFunding, getDonatedFunding, getUserFunding,
      registerAdmin
    }}>
      {children}
    </userContext.Provider>
  );
}

