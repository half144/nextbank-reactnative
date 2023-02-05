import { createContext, useContext, useEffect, useState } from "react";
import api from "../../services/api";
import { UserServices } from "../../services/http/UserServices";
import { getUserAndTokenInAsyncStorage, removeUserAndTokenInAsyncStorage } from "./functions/AuthAsyncStorage";
import { saveUser, setDefaultTokenInRequests } from "./functions/saveUser";

const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState()
    const [loading, setLoading] = useState(true)
    const [loadingAuth, setLoadingAuth] = useState(false)

    useEffect(() => {
        const loadStorageData = async () => {
            const { user, token } = await getUserAndTokenInAsyncStorage()

            if (user && token) {
                setDefaultTokenInRequests(token)
                setUser(JSON.parse(user))
            }
            setLoading(false)
        }
        loadStorageData()
    }, [])

    const register = async (credentials) => {
        try {
            setLoadingAuth(true)
            const data = await UserServices.register(credentials)
            await saveUser(data)
            setUser(data.id)
        } catch (error) {
            console.log(error)
        } finally {
            setLoadingAuth(false)
        }
    }

    const login = async (credentials) => {
        try {
            setLoadingAuth(true)
            const user = await UserServices.login(credentials)
            await saveUser(user)
            setUser(user.id)
        } catch (error) {
            console.log(error)
        } finally {
            setLoadingAuth(false)
        }
    }

    const logout = async () => {
        try {
            setUser()
            delete api.defaults.headers.common['Authorization']
            await removeUserAndTokenInAsyncStorage()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, logout, register, loading, loadingAuth }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider