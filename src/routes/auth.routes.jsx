import { createStackNavigator } from "@react-navigation/stack"
import Login from "../screens/Login"
import Register from "../screens/Register"

const { Navigator, Screen } = createStackNavigator()

const AuthRoutes = () => {
    return (
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name="login" component={Login} />
            <Screen name="register" component={Register} />
        </Navigator>
    )
}

export default AuthRoutes