import { NavigationContainer } from "@react-navigation/native"
import { useAuth } from "../context/AuthContext"
import LoadingScreen from "../screens/LoadingScreen"
import AuthRoutes from "./auth.routes"
import Stacks from "./stacks.routes"


const Router = () => {
    const { user, loading } = useAuth()

    if (loading) return <LoadingScreen />

    return (
        <>
            {user ? <Stacks /> : <AuthRoutes />}
        </>
    )
}

export default Router