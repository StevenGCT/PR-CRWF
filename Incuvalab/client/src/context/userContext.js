import {useState, createContext, useContext, useEffect} from 'react'
import {getUserRequest} from '../api/user'

const userContext = createContext()

export const useUsers = () => {
    const context = useContext(useContext)
    return context
}

export const UserProvider = ({children}) =>{
    const [users, setUsers] = useState([])
    console.log(users)

    const getUsers = async () =>{
        const res = await getUserRequest()
        setUsers(res.data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return <userContext.Provider value={{
        users,
        getUsers
    }}>
        {children}
    </userContext.Provider>
}